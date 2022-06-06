/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { Card } from '../components/common/Card';

describe('Card', () => {
  it('should render Card component with children', function () {
    const { getByText } = render(<Card>content</Card>);

    const card = getByText('content');

    expect(card).toBeInTheDocument();
  });
});
