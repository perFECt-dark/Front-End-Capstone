const { describe, expect, test } = require("@jest/globals");
const renderer = require('react-test-renderer')
// const App = require("../components/App.jsx")

describe('testing the tests', () => {
  it('should be able to test', () => {
    expect(1).toBe(1);
    expect(1).not.toBe('1');
  })
  it('should be true', () => {
    expect(true).toBe(true);
  })
})

// describe('trying to test App', () => {
//   it('loads', () => {
//     const component = renderer.create(
//       <App/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   })
// })