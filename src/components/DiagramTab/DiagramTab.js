import 'chart.js/auto';
import Chart from 'components/Chart';
import MyTable from 'components/Table';
import s from './DiagramTab.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setIsLoading } from 'redux/globalSlice';
import { getCategoriesStatistics } from 'redux/statisticsSlice';

export default function DiagramTab() {
  const statistics = useSelector((state) => state.statistics.statistics);
  const { isLoading } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!statistics) {
        dispatch(setIsLoading(true));
        await dispatch(getCategoriesStatistics());
        dispatch(setIsLoading(false));
      }
    })();
  }, [dispatch]);

  let sortedStatistics = statistics && {
    ...statistics,
    categoriesSummary: [...statistics?.categoriesSummary].sort(
      (prevEl, nextEl) => prevEl.name.localeCompare(nextEl.name)
    ),
  };

  return (
    <>
      {!isLoading && (
        <section className={s.sectionStats}>
          <h1 className={s.statisticsTitle}>Statistics</h1>
          <div className={s.containerStats}>
            <Chart statistics={sortedStatistics} />
            <MyTable statistics={sortedStatistics} />
          </div>
        </section>
      )}
    </>
  );
}
