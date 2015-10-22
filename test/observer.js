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