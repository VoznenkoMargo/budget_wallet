import Select from 'react-select';
import s from './Table.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FormControl } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

function createData(category, amount) {
  return { category, amount };
}

const rows = [
  createData('Food', 159),
  createData('Children', 237),
  createData('KOMUNALKA', 262),
  createData('Fuel', 305),
  createData('Pets', 356),
];
const colourStyles = {
  placeholder: base => ({
    ...base,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#000000',
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: 10,
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),

  control: styles => ({
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
    backgroundColor: 'transparent',
    ':hover': { cursor: 'pointer' },
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (provided, state) => ({
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
};

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
        {/* <FormControl
          variant="standard"
          sx={{ width: '100%' }}
          color="secondary"
        > */}
        <Select name="month" styles={colourStyles} displayEmpty></Select>
        <Select name="year" styles={colourStyles} displayEmpty></Select>
        {/* </FormControl> */}
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 340 }}>
          <TableHead>
            <TableRow
              className={s.TableHead}
              sx={{
                borderRadius: '0px',
                backgroundColor: 'red',
                '& .MuiTableCell-root': {
                  borderRadius: '0px',
                  borderBottom: 'none',
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
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.category}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div
                    style={{
                      backgroundColor: backgroundColor[0],
                      width: '24px',
                      height: '24px',
                    }}
                  ></div>
                  {row.category}
                </TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
