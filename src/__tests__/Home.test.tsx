import React from 'react'
import { sum } from '../Functions';
// import {render, fireEvent} from '@testing-library/react-native'
// import Home from '../screens/Home'

// // Home Tests
// it('Render Home component',() =>{
//     const {debug, getAllByTestId} = render(<Home/>)
//     debug()
// })

// const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});