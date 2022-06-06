import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './card.module.scss';

const cx = classNames.bind(styles);

interface CardProps {
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={cx('card')}>{children}</div>;
};
