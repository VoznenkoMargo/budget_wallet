// import { useSelector } from 'react-redux';
// import { getStatistics } from '../../redux/transactions/transaction-selectors';
import 'chart.js/auto';
import Chart from '../Chart';
import MyTable from '../Table';
import s from './DiagramTab.module.scss';

export default function DiagramTab() {
  // const data = useSelector(getStatistics);

  return (
    <section className={s.SectionStats}>
      <h1 className={s.StatisticsTitle}>Statistics</h1>
      <div className={s.ContainerStats}>
        <Chart />
        <MyTable />
      </div>
    </section>
  );
}
