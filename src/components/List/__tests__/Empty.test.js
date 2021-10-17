import React from 'react';
import {render} from '@testing-library/react-native';
import Empty from 'components/List/Empty';

describe('Empty List UI', () => {
  test('rendered with correct props', () => {
    render(<Empty />);
  });
});
