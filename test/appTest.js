const assert = require("chai").assert;
const app = require("../app");

sayHelloResult = app.sayHello();
sayOneResult = app.sayOne();

describe("App", function () {
  it("sayOne should return 1", function () {
    assert.equal(sayOneResult, "1");
  });
  it("sayOne should return the string 1", function () {
    assert.strictEqual(sayOneResult, "1");
  });
  it("sayOne should return type sting", function () {
    assert.typeOf(sayOneResult, "string");
  });
  it("sayHello should return hello", function () {
    assert.equal(sayHelloResult, "hello");
  });
  it("addNumbers should be greater than 5", function () {
    let result = app.addNumbers(4, 2);
    assert.isAbove(result, 5);
  });
  it("addNumbers should be greater than 5", function () {
    let result = app.addNumbers(1, 2);
    assert.isAbove(result, 5);
  });
  it("addNumbers should return type number", function () {
    let result = app.addNumbers(1, 2);
    assert.typeOf(result, "number");
  });
});
