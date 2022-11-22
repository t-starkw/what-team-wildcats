const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //write test params
  const testRole = "Manager";
  const e = new Manager("tessa", 123, "tessa@email.com", 456);
  expect(e.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  //write test params
  const testOffice = 456;
  const e = new Manager("tessa", 123, "tessa@email.com", testOffice);
  expect(e.getOfficeNumber()).toBe(testOffice);
});