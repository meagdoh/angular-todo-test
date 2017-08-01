describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});

// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.

describe("ToDosControllerFunction", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format.

    it("creates new to-do", function () {
        // Invoke the unit being tested as necessary
        var todoData = {"name": "Successfully write a test", "completed": true};
        var todo = ToDosControllerFunction(todoData);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(todoData).toEqual({"name": "Successfully write a test", "completed": true});
        expect(todoData.name).toEqual("Successfully write a test");
        expect(todoData.completed).toEqual(true);
        expect(typeof(todoData)).toEqual('object');

    });
});
