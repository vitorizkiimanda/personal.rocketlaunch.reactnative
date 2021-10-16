import React from 'react';
import HelloWorld from 'components/HelloWorld';
import {render} from '@testing-library/react-native';

describe('test component', () => {
  test('always pass', () => {
    render(<HelloWorld />);
    expect(2 + 2).toEqual(4);
  });
});
