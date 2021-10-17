import React from 'react';
import {render} from '@testing-library/react-native';
import List from 'components/List';

describe('List UI', () => {
  test('rendered with correct props', () => {
    const mockLoadMore = jest.fn();
    const mockData = [
      {
        id: 'abc',
        mission: {
          name: 'abcd',
          missionPatch: 'abcd',
        },
        rocket: {
          name: 'abcd',
          type: 'abcd',
        },
        site: 'abcd',
      },
    ];
    let ref = null; // ref => { current: null }

    const {getByA11yLabel} = render(
      <List data={mockData} loadMore={mockLoadMore} ref={ref} />,
    );
    const flatlist = getByA11yLabel('flatlist');
    expect(flatlist.children).toHaveLength(1);
  });
  test('rendered with no data', () => {
    render(<List />);
  });
});
