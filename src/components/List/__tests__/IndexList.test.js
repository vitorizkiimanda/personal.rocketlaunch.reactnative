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

    const {getByA11yLabel} = render(
      <List data={mockData} loadMore={mockLoadMore} />,
    );
    const flatlist = getByA11yLabel('flatlist');
    expect(flatlist.children).toHaveLength(1);

    jest.useFakeTimers();

    flatlist.props.onEndReached();
    expect(mockLoadMore).toBeCalledTimes(1);
  });
  test('rendered with no data', () => {
    render(<List />);
  });
});
