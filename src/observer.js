function Observer(object, parentObserver, property) {
	EventEmitter.call(this);

	var observer = this;

	this.object = object;

	if(parentObserver) {
		this.parentObserver = parentObserver;
	}
	if(property) {
		this.property = property;
	}

	this.childObservers = {};

	this
	.on('updated', function() {
		this.deliverChangeRecords();
	})
	.on('changed', function(changes) {
		var changedValue, changedProperty, childObserver;

		forEach(changes, function(change) {
			changedProperty 	= change.name;
			changedValue 			= change.object[changedProperty];

			switch(change.type) {
				case 'add':
					if(isObject(changedValue)) {
						observer.createChildObserver(changedProperty, changedValue);
					}
					break;
				case 'update':
				case 'delete':
					if(isObject(change.oldValue) && (childObserver = observer.getChildObserver(change.name))) {
						childObserver.destroy();
					}
					if(isObject(changedValue)) {
						observer.createChildObserver(changedProperty, changedValue);
					}
					break;
			}
		});

		this.emit('updated');
	})
	.on('childChanged', function(property, c) {
		this.emit('updated');
	});

	this.listener = function(changes) {
		observer.emit('changed', changes);
	};

	Object.observe(this.object, this.listener);

	this.walkInto(this.object);
}

inherits(Observer, EventEmitter, {
	deliverChangeRecords: function(property) {
		var childObserver, i, childObserverProperty, keys = Object.keys(this.childObservers);

		for(i = 0; i < keys.length; i++) {
			childObserverProperty = keys[i];
			childObserver = this.childObservers[childObserverProperty];

			childObserver.deliverChangeRecords();
		}

		Object.deliverChangeRecords(this.listener);

		return this;
	},

	getChildObserver: function(property) {
		return this.childObservers[property];
	},

	createChildObserver: function(property, value) {
		var observer = this;

		if(this.childObservers.hasOwnProperty(property)) {
			this.childObservers[property].destroy();
		}

		var childObserver = new Observer(value, this, property);

		this.childObservers[property] = childObserver;

		childObserver.on('updated', function(changes) {
			observer.emit('childChanged', property, changes);
		});

		return this;
	},

	destroy: function () {
		var observer = this;

		Object.unobserve(this.object, this.listener);

		forEach(this.childObservers, function(value, key) {
			observer.childObservers[key].destroy();
		});

		if(this.property) {
			delete this.parentObserver.childObservers[this.property];
		}

		return this;
	},

	walkInto: function(object) {
		var observer = this;

		forEach(object, function(value, key) {
			if(isObject(value)) {
				observer.createChildObserver(key, value);
			}
		});

		return this;
	}
});