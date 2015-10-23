# observerjs

A recursive observer which uses `Object.observer` internally.

## Usage

A child observer is created to each property of the object recusively, this way, you can watch bunchs of recusively objects, and keep knowing exactly what have change from one to another.

```js
var object = {};
var observer = new Observer(object);

/**
 * This event is emited everytime you change any property
 * inside the `object`
 */
observer.on('changedProperty', function(path) {
	// 1. path === someKey
	// 2. path === someKey.someValue
})

/**
 * This event will be emited when every key of the
 * object gets updated
 */
.on('updated', function() {
	console.log('This object has been updated');
})

/**
 * If you create a property at `object.someAnotherObject = {}`
 * the observer will emit an internally `updated` event and start
 * watch `object.someAnotherObject` creating a child observer, if
 * you delete this key with `delete object.someAnotherObject`, the
 * child observer will be destroyed, including the Object.observe
 * listener, but the observer will keep receiving changes. If you
 * change `object.someAnotherObject` to another value that it isn't
 * an object, on the otherwise, if you redefine the property as
 * an object, this will restart this cycle, and if you define a property at
 * `object.someAnotherObject.someValue` the child observer will receive this
 * changes and pass to the parent observer
 */
.on('childChanged', function() {
	
})

/**
 * This event will only be emited when some property
 * of the `object` change, if you want to watch any
 * changes of the object completely, use `updated`
 */
.on('changed', function(changes) {
	changes.forEach(function(change) {
		console.log(change.type, change.name);
	});
});

object.someKey = {
	someValue: 1000
};
object.someKey.someValue += 1000;
```