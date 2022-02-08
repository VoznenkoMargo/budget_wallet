import 'chart.js/auto';
import Chart from 'components/Chart';
import MyTable from 'components/Table';
import s from './DiagramTab.module.scss';

export default function DiagramTab() {
  return (
    <section className={s.sectionStats}>
      <h1 className={s.statisticsTitle}>Statistics</h1>
      <div className={s.containerStats}>
        <Chart />
        <MyTable />
      </div>
    </section>
  );
}
