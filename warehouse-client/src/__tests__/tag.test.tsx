/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { Tag } from '../components/common/Tag';

describe('Card', () => {
  it('should render Card component with children', function () {
    const { getByText } = render(<Tag>leg</Tag>);

    const tag = getByText('leg');

    expect(tag).toBeInTheDocument();
  });
});
