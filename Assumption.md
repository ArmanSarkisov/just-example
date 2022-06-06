1. I chose to use React + Vite.
2. Effector as a state manager
3. Axios and Axios-Retry for requests
4. Module scss for styling. I had several choices Tailwind, Bootstrap, but I preferred to write css myself
5. Jest for Unit testing, but there were some issues regarding @testing-library/react-hooks (related React 18v)
6. I have started to calculate quantities of available products and after several implementations I chose this one see below. But I taught about to use reduce or recursive function, but in my opinion in this way it is more readable.
```javascript
  const findAvailableProducts = ({
    products,
    articles,
  }: {
    products: Product[];
    articles: Article[];
  }) => {
  return products.filter(({ articles: productArticles, id, name }) => {
    return productArticles.every((article) => {
      const foundArticle = articles.find((a) => a.id === article.id);
      if (foundArticle) {
        return article.amountRequired <= foundArticle.amountInStock;
      }

      return false;
    });
  });
};
```
7. I faced with some problems with API, because our API is not always working perfectly, it means that you can register sale but your PATCH request for updating articles can be failed. that's why I chose following flow.
   1. First way (if everything is ok)
      1. I will do (PATCH) articles
      2. I will create (POST) sale
   2. Second way (if articles are failed)
      1. I will retry to (PATCH) articles (max 3 times)
         1. If (PATCH) is successful then other steps
         2. If not I'll error show message
   3. Third way (if article is ok, but sale is failed)
      1. I will retry to (POST) sale (max 3 times)
         1. If (POST) is successful then other steps
      2. If not
         1. I'll show error message
         2. And I'll do (PATCH) articles to set previous state
8. To do a Retry, I had 2 choices, create myself or use library. I chose library, because it is more readable and the library has good reviews and stars. (Git & npm)