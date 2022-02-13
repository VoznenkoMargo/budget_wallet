import palette from '../../theme/palette';

const categoriesName = {
  BASIC_EXPENSES: "Основные расходы",
  PRODUCTS: "Продукты",
  CAR: "Машина",
  CARE_OF_YOURSELF: "Забота о себе",
  CARE_OF_CHILDREN: "Забота о детях",
  HOUSEHOLD_PRODUCTS: "Товары для дома",
  EDUCATION: "Образование",
  LEISURE: "Досуг",
  OTHER_EXPENSES: "Другие расходы",
  ENTERTAINMENT: "Развлечения",
}

export const basicCategoriesColors = {
  [categoriesName.BASIC_EXPENSES]: palette.chart.violet[0],
  [categoriesName.PRODUCTS]: palette.chart.blue[0],
  [categoriesName.CAR]: palette.chart.violet[2],
  [categoriesName.CARE_OF_YOURSELF]: palette.chart.red[0],
  [categoriesName.CARE_OF_CHILDREN]: palette.chart.red[1],
  [categoriesName.HOUSEHOLD_PRODUCTS]: palette.chart.green[1],
  [categoriesName.EDUCATION]: palette.chart.violet[1],
  [categoriesName.LEISURE]: palette.chart.yellow[0],
  [categoriesName.OTHER_EXPENSES]: palette.chart.yellow[1],
  [categoriesName.ENTERTAINMENT]: palette.chart.green[1],
}

const usedColors = [];

export const generateUniqueColor = () => {
  let color = null;
  while(!color || usedColors.includes(color)){
    color = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  }
  usedColors.push(color);
  return color;
}
