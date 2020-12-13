const { italics } = require("../__mocks__/fileMock");
import Component from '../src/index'
describe("engine se v poradku rozbehne", () => {
  it('vrati HTML element pri zavolani', () => {
    expect(Component()).toBeDefined()
  })
})