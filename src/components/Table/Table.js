import Select from 'react-select';
import s from './Table.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { setIsLoading } from 'redux/globalSlice';
import {
  getCategoriesStatistics,
  setMonth,
  setYear,
} from 'redux/statisticsSlice';
import { useDispatch } from 'react-redux';

const colourStyles = {
  placeholder: (base) => ({
    ...base,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#000000',
  }),
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),
  menu: (provided) => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(30px)',
    overflow: 'hidden',
  }),
  menuList: (provided) => ({
    ...provided,
    '::-webkit-scrollbar': {
      width: '4px',
      height: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#c2c2c2',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-track': {
      marginTop: '20px',
      marginBottom: '20px',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: '30px',
    border: '1px solid #000000',
    padding: '0 15px',
    minHeight: '50px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: ' 1.5',
    color: '#000000',
    width: '100%',
    backgroundColor: 'transparent',
    ':hover': {
      cursor: 'pointer',
      borderColor: '#4A56E2',
    },
    boxShadow: 0,
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: '#000000',
    ':hover': { cursor: 'pointer', backgroundColor: '#fff', color: '#FF6596' },
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: ' 1.5',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    svg: { color: '#000' },
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
};

const month = [
  {
    value: '',
    label: 'All period',
  },
];

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

for (let i = 1; i <= 12; i += 1) {
  month.push({
    value: i,
    label: monthName[i - 1],
  });
}

const year = [
  {
    value: '',
    label: 'All years',
  },
  {
    value: 2019,
    label: '2019',
  },
  {
    value: 2020,
    label: '2020',
  },
  {
    value: 2021,
    label: '2021',
  },
  {
    value: 2022,
    label: '2022',
  },
];

function MyTable({ statistics }) {
  const categories =
    (statistics?.categoriesSummary &&
      statistics?.categoriesSummary.filter(
        (category) => category.total <= 0
      )) ||
    [];
  const incomeSummary = statistics?.incomeSummary;
  const expenseSummary =
    statistics?.expenseSummary && Math.abs(statistics?.expenseSummary);
  const dispatch = useDispatch();

  const selectMonth = async ({ value }) => {
    const { month, year } = statistics;
    dispatch(setMonth(value));
    if (!year && !month) return;

    dispatch(setIsLoading(true));
    await dispatch(getCategoriesStatistics({ month: +value, year }));
    dispatch(setIsLoading(false));
  };

  const selectYear = async ({ value }) => {
    const { month } = statistics;
    dispatch(setYear(value));

    dispatch(setIsLoading(true));
    await dispatch(getCategoriesStatistics({ month, year: +value }));
    dispatch(setIsLoading(false));
  };

  return (
    <div className={s.tableContainer}>
      <div className={s.selectContainer}>
        <Select
          name="month"
          styles={colourStyles}
          options={month}
          placeholder={month[statistics?.month]?.label || 'All period'}
          onChange={selectMonth}
          isSearchable={false}
        />
        <Select
          name="year"
          styles={colourStyles}
          options={year}
          placeholder={statistics?.year || 'All years'}
          onChange={selectYear}
          isSearchable={false}
        />
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 280 }}>
          <TableHead>
            <TableRow
              className={s.TableHead}
              sx={{
                borderRadius: '0px',
                backgroundColor: '#fff',
                '& .MuiTableCell-root': {
                  borderRadius: '0px',
                  borderBottom: 'none',
                  fontSize: '18px',
                },
                '& .MuiTableCell-root:first-of-type': {
                  borderTopLeftRadius: '30px',
                  borderBottomLeftRadius: '30px',
                },
                '& .MuiTableCell-root:last-of-type': {
                  borderTopRightRadius: '30px',
                  borderBottomRightRadius: '30px',
                },
              }}
            >
              <TableCell>Category</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.name}
                sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}
              >
                <TableCell
                  className={s.cellName}
                  component="th"
                  scope="row"
                  sx={{
                    display: 'flex',
                    fontSize: '16px',
                    borderBottom: 'none',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: category.color,
                      width: '24px',
                      height: '24px',
                      marginRight: '16px',
                      borderRadius: '2px',
                    }}
                  ></div>
                  {category.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: 'none', fontSize: '16px' }}
                >
                  {Math.abs(category.total).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="hiddenBorder">
              <TableCell align="left" sx={{ fontSize: '16px' }}>
                Expenses:
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: '#ff6596', fontSize: '16px' }}
              >
                {Number(expenseSummary).toFixed(2)}
              </TableCell>
            </TableRow>

            <TableRow className="hiddenBorder">
              <TableCell align="left" sx={{ fontSize: '16px' }}>
                Incomes:
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: '#24CCA7', fontSize: '16px' }}
              >
                {Number(incomeSummary).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
