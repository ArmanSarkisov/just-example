/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../components/common/Button';

describe('Button', () => {
  const onClick = jest.fn();
  it('should render button', function () {
    const { getByText } = render(<Button onClick={onClick}>button</Button>);

    const btn = getByText('button');

    expect(btn).toBeInTheDocument();
  });

  it('should click on button', function () {
    const { getByText } = render(<Button onClick={onClick}>button</Button>);

    const btn = getByText('button');
    fireEvent.click(btn);

    expect(onClick).toBeCalled();
  });

  it('should be disabled', function () {
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        button
      </Button>,
    );

    const btn = getByText('button');

    expect(btn.closest('button')).toBeDisabled();
  });
});
