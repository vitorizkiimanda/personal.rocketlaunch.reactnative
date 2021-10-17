import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Error from 'components/Error';

describe('Error UI', () => {
  test('rendered with correct props', () => {
    const mockOnReload = jest.fn();
    const {getByA11yLabel} = render(<Error onReload={mockOnReload} />);

    const contentButton = getByA11yLabel('content button');
    fireEvent.press(contentButton);
    expect(mockOnReload).toBeCalledTimes(1);
  });
});
