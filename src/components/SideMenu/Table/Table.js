import Select from 'react-select';
import s from './Table.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(category, amount) {
  return { category, amount };
}

const rows = [
  createData('Main expenses', '8 700.00'),
  createData('Products', '3 800.74'),
  createData('Car', '1 500.00'),
  createData('Self-care', '800.00'),
  createData('Care of children', '2208.50'),
  createData('Housewares', '300.00'),
  createData('Education', '3 400.00'),
  createData('Leisure', '1 230.00'),
  createData('Other expenses', '610.00'),
];

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
    value: 'All',
    label: 'All Period',
  },
  {
    value: '01',
    label: 'January',
  },
  {
    value: '02',
    label: 'February',
  },
  {
    value: '03',
    label: 'March',
  },
  {
    value: '04',
    label: 'April',
  },
  {
    value: '05',
    label: 'May',
  },
  {
    value: '06',
    label: 'June',
  },
  {
    value: '07',
    label: 'Jule',
  },
  {
    value: '08',
    label: 'August',
  },
  {
    value: '09',
    label: 'September',
  },
  {
    value: '10',
    label: 'October',
  },
  {
    value: '11',
    label: 'November',
  },
  {
    value: '12',
    label: 'December',
  },
];
const year = [
  {
    value: 'All',
    label: 'All Years',
  },
  {
    value: '2019',
    label: '2019',
  },
  {
    value: '2020',
    label: '2020',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2022',
    label: '2022',
  },
];

function MyTable() {
  const backgroundColor = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  return (
    <div className={s.tableContainer}>
      <div className={s.selectContainer}>
        <Select
          name="month"
          styles={colourStyles}
          options={month}
          placeholder="Month"
        />
        <Select
          name="year"
          styles={colourStyles}
          options={year}
          placeholder="Year"
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
            {rows.map((row, index) => (
              <TableRow
                key={row.category}
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
                      backgroundColor: backgroundColor[index],
                      width: '24px',
                      height: '24px',
                      marginRight: '16px',
                      borderRadius: '2px',
                    }}
                  ></div>
                  {row.category}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: 'none', fontSize: '16px' }}
                >
                  {row.amount}
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
                22 549.24
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
                27 350.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
