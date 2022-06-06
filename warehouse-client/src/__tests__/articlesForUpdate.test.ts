import { generateArticlesForUpdate } from '../utils';

describe('Articles for update', () => {
  it('Should return array of article for PUT request', () => {
    const articles = [{ id: '1', amountRequired: 2 }];
    const data = generateArticlesForUpdate(articles);
    expect(data).toEqual([
      {
        id: '1',
        amountToSubtract: 2,
      },
    ]);
  });
});
