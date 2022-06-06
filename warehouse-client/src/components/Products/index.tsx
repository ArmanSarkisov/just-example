import { FC, Fragment } from 'react';
import { useStore } from 'effector-react';
import classNames from 'classnames/bind';

// styles
import styles from './products.module.scss';

// utils
import { findArticleName } from '../../utils';

// hooks
import { useSale, useAvailableProducts } from '../../hooks';

// store
import {
  articlesState,
  errorState,
  loadingState,
  productsState,
} from '../../store';

// components
import { Card } from '../common/Card';
import { Tag } from '../common/Tag';
import { Button } from '../common/Button';

const cx = classNames.bind(styles);

export const Products: FC = () => {
  const isLoading = useStore(loadingState.isLoading);
  const articles = useStore(articlesState.articles);
  const products = useStore(productsState.products);
  const error = useStore(errorState.error);
  const { handleClick, isLoading: isDisableButton } = useSale();
  const availableProducts = useAvailableProducts({ products, articles });

  if (error.isError) {
    return (
      <div className={cx('message')}>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className={cx('message')}>Loading....</div>;
  }

  return (
    <div className={cx('container')}>
      {availableProducts.map(({ name, id, articles: localArt = [] }) => {
        return (
          <Card key={id}>
            <h2>{name}</h2>
            <div className={cx('tag-container')}>
              {localArt.map(({ amountRequired, id: articleId }) => {
                const foundName = findArticleName(articles, articleId);
                return (
                  <Fragment key={articleId}>
                    <Tag>
                      <h5>{foundName}</h5>
                      Amount: {amountRequired}
                    </Tag>
                  </Fragment>
                );
              })}
            </div>
            <div>
              <Button disabled={isDisableButton} onClick={() => handleClick({ id, articles: localArt })}>
                Buy
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
