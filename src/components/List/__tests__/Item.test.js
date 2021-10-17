import React from 'react';
import {render} from '@testing-library/react-native';
import Item from 'components/List/Item';

describe('Item List UI', () => {
  test('rendered with correct props', () => {
    const mockData = {
      mission: {
        name: 'abcd',
        missionPatch: 'abcd',
      },
      rocket: {
        name: 'abcd',
        type: 'abcd',
      },
      site: 'abcd',
    };
    render(<Item data={mockData} index={0} />);
  });
  test('rendered with correct props index non zero', () => {
    const mockData = {
      mission: {
        name: 'abcd',
        missionPatch: 'abcd',
      },
      rocket: {
        name: 'abcd',
        type: 'abcd',
      },
      site: 'abcd',
    };
    render(<Item data={mockData} index={1} />);
  });
  test('rendered with in-correct props', () => {
    render(<Item />);
  });
});
