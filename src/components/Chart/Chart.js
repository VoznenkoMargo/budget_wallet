import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from './ChartBalance/ChartBalance';
import s from './Chart.module.scss';

export default function Chart() {
  return (
    <div className={s.chart}>
      <div className={s.containerChart}>
        <Balance />
        <div className={s.doughnut}>
          <Doughnut
            className="s.douhnut"
            data={{
              datasets: [
                {
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    '#FED057',
                    '#FFD8D0',
                    '#FD9498',
                    '#C5BAFF',
                    '#6E78E8',
                    '#4A56E2',
                    '#81E1FF',
                    '#24CCA7',
                    '#00AD84',
                  ],
                  borderColor: [
                    '#FED057',
                    '#FFD8D0',
                    '#FD9498',
                    '#C5BAFF',
                    '#6E78E8',
                    '#4A56E2',
                    '#81E1FF',
                    '#24CCA7',
                    '#00AD84',
                  ],
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
