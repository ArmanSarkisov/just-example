import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './button.module.scss';

export interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit';
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  type = 'button',
  children,
}) => {
  return (
    <button
      className={cx('button')}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
