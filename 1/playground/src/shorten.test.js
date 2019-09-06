import shorten from "./shorten";

it("check return type", () => {
    expect(typeof shorten("abcdefghijkl")).toBe("string")
});

describe("strings that are short enough", () => {
    it("leaves 'loremipsum' unchanged given a max length of 20", () => {
        const expected = "loremipsum";
        const actual = shorten("loremipsum", 20);

        expect(actual).toEqual(expected);
        // or assert.equal(a, b);    libs: jest, chai
    })

    it("leaves 'loremipsum' unchanged given a max length of 10", () => {
        const expected = "loremipsum";
        const actual = shorten("loremipsum", 10);

        expect(actual).toEqual(expected);
    })
});

it("changes 'loremipsum' to 'lor...' given a max length of 6", () => {
    expect(shorten("loremipsum", 6)).toEqual("lor...");
})




