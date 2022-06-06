import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './tag.module.scss';

interface TagProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const Tag: FC<TagProps> = ({ children }) => {
  return <div className={cx('tag')}>{children}</div>;
};
