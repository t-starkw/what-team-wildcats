const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  //write test params
  const testRole = "Intern";
  const e = new Intern("tessa", 123, "tessa@email.com", "UNC");
  expect(e.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
  //write test params
  const testSchool = "UNC";
  const e = new Intern("tessa", 123, "tessa@email.com", testSchool);
  expect(e.getSchool()).toBe(testSchool);
});