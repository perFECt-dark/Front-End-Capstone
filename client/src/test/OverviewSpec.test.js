const { describe, expect, test } = require("@jest/globals");
const App = require("../components/App")
const renderer = require('react-test-renderer')
const index = require('../index')
describe('testing the tests', () => {
  it('should be able to test', () => {
    expect(1).toBe(1);
    expect(1).not.toBe('1');
  })
  it('should be true', () => {
    expect(true).toBe(true);
  })
})

describe('trying to test index', () => {
  it('loads', () => {
    const component
  })
})