const Spiderman = require("../app/Spiderman");

describe("Unit Test for Spiderman class", () => {
  test("1) Create an spiderman object", () => {
    const andrewGarfield = new Spiderman("Amazing spiderman", 38, "andrew garfield", 2, "Sony");
    expect(andrewGarfield.name).toBe("Amazing spiderman");

    const tomHolland = new Spiderman("Spiderman no way Home", 25, "Tom Holland", 3, "Marvel studio");
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
  });
});
