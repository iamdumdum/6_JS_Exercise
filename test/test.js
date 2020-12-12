const { expect } = require("chai")
const {
    firstChar, middleChar, lastChar
} = require("../index")

describe("Slice String", () => {
    it("firstChar should be character 'A'", () => {
        expect(firstChar).to.equal("A")
    })
    it("firstChar should be character 'i'", () => {
        expect(middleChar).to.equal("i")
    })
    it("firstChar should be character 'e'", () => {
        expect(lastChar).to.equal("e")
    })
})