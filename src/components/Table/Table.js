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
    padding: 10,
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: '30px',
    marginBottom: '20px',
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
    ':hover': { cursor: 'pointer' },
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255,0.7)',

    color: '#000000',
    padding: 20,
    ':hover': { cursor: 'pointer' },
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: ' 1.5',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: { color: '#000' },
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
                '& .MuiTableCell-root:first-child': {
                  borderTopLeftRadius: '30px',
                  borderBottomLeftRadius: '30px',
                },
                '& .MuiTableCell-root:last-child': {
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  className={s.cellName}
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', fontSize: '16px' }}
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
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
            <TableRow className="hiddenBorder">
              <TableCell align="left">Expenses:</TableCell>
              <TableCell align="right" sx={{ color: '#ff6596' }}>
                22 549.24
              </TableCell>
            </TableRow>

            <TableRow className="hiddenBorder">
              <TableCell align="left">Incomes:</TableCell>
              <TableCell align="right" sx={{ color: '#24CCA7' }}>
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
