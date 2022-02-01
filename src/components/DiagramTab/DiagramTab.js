import 'chart.js/auto';
import Chart from '../Chart';
import MyTable from '../Table';
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
