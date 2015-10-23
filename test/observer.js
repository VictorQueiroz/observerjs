describe('Observer', function() {
	var observer, object, times;

	it('should watch the entire object', function() {
		object		= {};
		times			= 0;
		observer 	= new Observer(object);

		observer.on('updated', function() {
			times++;
		});

		object.someValue = 100;
		observer.deliverChangeRecords();

		expect(times).toEqual(1);
	});

	it('should get modified path', function() {
		var changedPath;

		object				= {};
		observer 			= new Observer(object);

		observer.on('changedProperty', function(path, data) {
			changedPath = path;
		});

		object.someDeepObject = {
			anotherObject: {
				someDeepValue: true
			}
		};
		observer.deliverChangeRecords();

		expect('someDeepObject').toBe(changedPath);

		object.someDeepObject.anotherObject.anotherDeepValue = false;
		observer.deliverChangeRecords();

		expect('someDeepObject.anotherObject.anotherDeepValue').toBe(changedPath);
		
		object.someDeepObject.anotherObject = {anotherDeepValue: false};
		observer.deliverChangeRecords();

		expect('someDeepObject.anotherObject').toBe(changedPath);
	});

	it('should watch arrays', function() {
		var changedPath, addedObject, someDeepArray = [];

		object				= {	someDeepArray: someDeepArray	};
		observer 			= new Observer(object);

		observer.on('changedProperty', function(path, data) {
			if(!path.match(/length/)) {
				changedPath = path;
			}
		});

		object.someDeepArray.push(0);
		observer.deliverChangeRecords();

		expect('someDeepArray.0').toBe(changedPath);

		addedObject = {
			someDeepObject: {}
		};
		object.someDeepArray.push(addedObject);
		observer.deliverChangeRecords();

		expect('someDeepArray.1').toBe(changedPath);

		addedObject.someDeepObject.someDeepValue = true;
		observer.deliverChangeRecords();

		expect('someDeepArray.1.someDeepObject.someDeepValue').toBe(changedPath);

		someDeepArray.splice(1, 1);
		observer.deliverChangeRecords();

		expect('someDeepArray.1').toBe(changedPath);
		
		object.someDeepArray.push(addedObject);
		observer.deliverChangeRecords();

		expect('someDeepArray.1').toBe(changedPath);
	});

	it('should watch object the entire keys', function() {
		object		= {};
		times			= 0;
		observer 	= new Observer(object);

		observer.on('updated', function() {
			times++;
		});

		object.someObject = {};
		observer.deliverChangeRecords();

		expect(times).toEqual(1);

		delete object.someObject;
		observer.deliverChangeRecords();

		expect(times).toEqual(2);

		object.someObject = {};
		observer.deliverChangeRecords();

		expect(times).toEqual(3);

		object.someObject.someValue = 100;
		observer.deliverChangeRecords();

		expect(times).toEqual(4);

		object.someObject = {
			someValue: {
				someDeepObject: {}
			}
		};
		observer.deliverChangeRecords();

		expect(times).toEqual(5);

		object.someObject.someValue.someDeepObject.someDeepValue = 100;
		observer.deliverChangeRecords();

		expect(times).toEqual(6);
	});

	it('should watch changes even if the properties get deleted', function() {
		object		= {};
		times			= 0;
		observer 	= new Observer(object);

		object.someObject = {};

		observer.on('updated', function() {
			times++;
		});

		observer.deliverChangeRecords();

		expect(times).toEqual(1);
	});
});