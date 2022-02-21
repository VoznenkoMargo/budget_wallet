import { CATEGORIES } from 'constants/categories';

const transalateCategories = (categories) => {
  return categories.map((category) => {
    category.name = CATEGORIES[category.name];
    return category;
  });
};

export default transalateCategories;
