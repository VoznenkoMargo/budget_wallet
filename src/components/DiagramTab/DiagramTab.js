import 'chart.js/auto';
import Chart from 'components/Chart';
import MyTable from 'components/Table';
import s from './DiagramTab.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setIsLoading } from '../../redux/globalSlice';
import { getCategoriesStatistic } from '../../redux/statisticSlice';

export default function DiagramTab() {
  const statistic = useSelector((state) => state.statistic.statistic);
  const { isLoading } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(async () => {
    if(!statistic) {
      dispatch(setIsLoading(true));
      await dispatch(getCategoriesStatistic());
      dispatch(setIsLoading(false));
    }
  }, [dispatch])

  return (
    <>
      {!isLoading &&
      <section className={s.sectionStats}>
        <h1 className={s.statisticsTitle}>Statistics</h1>
        <div className={s.containerStats}>
          <Chart statistic={statistic}/>
          <MyTable statistic={statistic}/>
        </div>
      </section>}
    </>
  );
}
