
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    // write test params
    const testGit = "dweeb123";
    const e = new Engineer("tessa", 123, "tessa@email.com", testGit);
    expect(e.github).toBe(testGit);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    // write test params
    const testRole = "Engineer";
    const e = new Engineer("tessa", 123, "tessa@email.com", "dweeb123");
    expect(e.getRole()).toBe(testRole);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    // write test params
    const testGitGet = "dweeb123";
    const e = new Engineer("tessa", 123, "tessa@email.com", testGitGet);
    expect(e.getGithub()).toBe(testGitGet);
  });