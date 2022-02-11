import { Doughnut } from 'react-chartjs-2';
import Balance from './ChartBalance/ChartBalance';
import s from './Chart.module.scss';

export default function Chart({statistic}) {
  const expenseSummary = statistic?.expenseSummary;
  const categories = statistic?.categoriesSummary.filter(category => category.total <= 0);
  const categoryTotal = categories?.map(category => Math.abs(category.total));
  const categoryColor = categories?.map(category => category.color);

  return (
    <div className={s.chart}>
      <div className={s.containerChart}>
        <Balance expenseSummary={expenseSummary}/>
        <div className={s.doughnut}>
          <Doughnut
            className="s.douhnut"
            data={{
              datasets: [
                {
                  data: categoryTotal,
                  backgroundColor: categoryColor,
                  borderColor: categoryColor,
                  borderWidth: 1,
                  cutout: 90,
                },
              ],
            }}
            options={{
              cutout: 120,
              maintainAspectRatio: true,
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
