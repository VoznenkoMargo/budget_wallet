import { Doughnut } from 'react-chartjs-2';
import Balance from './ChartBalance/ChartBalance';
import s from './Chart.module.scss';

export default function Chart({statistics}) {
  const periodTotal = statistics?.periodTotal;
  const categories = statistics?.categoriesSummary.filter(category => category.total <= 0);
  const categoryTotal = categories?.map(category => Math.abs(category.total));
  const categoryColor = categories?.map(category => category.color);

  return (
    <div className={s.chart}>
      <div className={s.containerChart}>
        <Balance periodTotal={periodTotal}/>
        <div className={s.doughnut}>
          <Doughnut
            className="s.douhnut"
            data={{
              labels: categoryTotal?.length === 0 ? ['No expends'] : null,
              datasets: [
                {
                  data: categoryTotal?.length > 0 ? categoryTotal : [1],
                  backgroundColor: categoryColor?.length > 0 ? categoryColor : ['#C5BAFF'],
                  borderColor: categoryColor?.length > 0 ? categoryColor : ['#C5BAFF'],
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
