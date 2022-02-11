import DiagramTab from 'components/DiagramTab';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesStatistic } from '../../redux/statisticSlice';
import { setIsLoading } from '../../redux/globalSlice';

export default function StatisticPage() {
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
      {!isLoading && <DiagramTab statistic={statistic}/>}
    </>
  )
}
