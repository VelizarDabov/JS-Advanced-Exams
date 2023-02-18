const findNewApartment = require("./findApartment");
const assert = require("chai").assert;

describe("Test", function () {
  it("validate input", () => {
    assert.throw(() => findNewApartment.isGoodLocation(a, true), "a"),
      "Invalid input!";
    assert.throw(() => findNewApartment.isGoodLocation(1, true), "a"),
      "Invalid input!";
    assert.throw(() => findNewApartment.isGoodLocation(["asd"], true), "a"),
      "Invalid input!";
    assert.throw(() => findNewApartment.isGoodLocation("asdf", 1)),
      "Invalid input!";
  });
  it("test the location", () => {
    assert.equal(
      findNewApartment.isGoodLocation("Pleven", true),
      "This location is not suitable for you."
    );
    assert.equal(
      findNewApartment.isGoodLocation("Ruse", true),
      "This location is not suitable for you."
    );
    assert.equal(
      findNewApartment.isGoodLocation("Sofia", false),
      "There is no public transport in area."
    );
    assert.equal(
      findNewApartment.isGoodLocation("Sofia", false),
      "There is no public transport in area."
    );
    assert.equal(
      findNewApartment.isGoodLocation("Plovdiv", true),
      "You can go on home tour!"
    );
    assert.equal(
      findNewApartment.isGoodLocation("Plovdiv", true),
      "You can go on home tour!"
    );
  });
  it("is large enoug testing validate input", () => {
    assert.throw(() => findNewApartment.isLargeEnough(50, 40)),
      "Invalid input!";
    assert.throw(() => findNewApartment.isLargeEnough("50", 40)),
      "Invalid input!";
    assert.throw(() => findNewApartment.isLargeEnough("ásd", 40)),
      "Invalid input!";
    assert.throw(() => findNewApartment.isLargeEnough([], 40)),
      "Invalid input!";
    assert.throw(() => findNewApartment.isLargeEnough([40], "10")),
      "Invalid input!";
    assert.throw(() => findNewApartment.isLargeEnough([40, 50, 60], "50")),
      "Invalid input!";
  });
  it("test the result", () => {
    assert.equal(findNewApartment.isLargeEnough([55], 45), 55);
  });

  it("test price and budget input", () => {
    assert.throw(
      () => findNewApartment.isItAffordable("10", 10),
      "Invalid input"
    );
    assert.throw(
      () => findNewApartment.isItAffordable("10", "10"),
      "Invalid input"
    );
    assert.throw(
      () => findNewApartment.isItAffordable(10, "10"),
      "Invalid input"
    );
    assert.throw(
      () => findNewApartment.isItAffordable([10], 10),
      "Invalid input"
    );
    assert.throw(
      () => findNewApartment.isItAffordable(10, [10]),
      "Invalid input"
    );
    assert.throw(() => findNewApartment.isItAffordable(10, 0), "Invalid input");
    assert.throw(() => findNewApartment.isItAffordable(0, 10), "Invalid input");
    assert.throw(
      () => findNewApartment.isItAffordable(-10, 10),
      "Invalid input"
    );
    assert.throw(
      () => findNewApartment.isItAffordable(10, -5),
      "Invalid input"
    );
  });
  it("check the result", () => {
    assert.equal(
      findNewApartment.isItAffordable(10, 100),
      "You can afford this home!"
    );
    assert.equal(
      findNewApartment.isItAffordable(10, 10),
      "You can afford this home!"
    );
    assert.equal(
      findNewApartment.isItAffordable(100, 10),
      "You don't have enough money for this house!"
    );
    assert.equal(
      findNewApartment.isItAffordable(100, 10),
      "You don't have enough money for this house!"
    );
  });
});
