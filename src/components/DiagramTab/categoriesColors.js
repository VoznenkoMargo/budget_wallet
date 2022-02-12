import palette from '../../theme/palette';

export const basicCategoriesColors = [
  {
    category: "Основные расходы",
    color: palette.chart.violet[0],
  },
  {
    category: "Продукты",
    color: palette.chart.blue[0],
  },
  {
    category: "Машина",
    color: palette.chart.violet[2],
  },
  {
    category: "Забота о себе",
    color: palette.chart.red[0],
  },
  {
    category: "Забота о детях",
    color: palette.chart.red[1],
  },
  {
    category: "Товары для дома",
    color: palette.chart.green[1],
  },
  {
    category: "Образование",
    color: palette.chart.violet[1],
  },
  {
    category: "Досуг",
    color: palette.chart.yellow[0],
  },
  {
    category: "Другие расходы",
    color: palette.chart.yellow[1],
  },
  {
    category: "Развлечения",
    color: palette.chart.green[1],
  },
]

const usedColors = [];

export const generateUniqueColor = () => {
  let color = null;
  while(!color || usedColors.includes(color)){
    color = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  }
  usedColors.push(color);
  return color;
}