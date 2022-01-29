import Select from 'react-select';
import s from './Table.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
        <Select name="month" displayEmpty></Select>
        <Select name="year" displayEmpty></Select>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 340 }} aria-label="simple table">
          <TableHead>
            <TableRow
              className={s.TableHead}
              sx={{ backgroundColor: backgroundColor[0] }}
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

// const colourStyles = {
//   placeholder: {
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '1.5',
//     color: '#000000',
//   },
//   menu: {
//     padding: 10,
//     background: 'rgba(255, 255, 255, 0.9)',
//     boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
//     borderRadius: '20px',
//   },

//   indicatorSeparator: (provided, state) => ({
//     ...provided,
//     display: 'none',
//   }),

//   control: styles => ({
//     ...styles,
//     borderRadius: '30px',
//     border: '1px solid #000000',
//     padding: '0 15px',
//     minHeight: '50px',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '18px',
//     lineHeight: ' 1.5',
//     color: '#000000',
//     backgroundColor: 'transparent',
//     ':hover': { cursor: 'pointer' },
//     '@media screen and (min-width: 768px)': {
//       minWidth: '166px',
//     },
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: 'rgba(255, 255, 255,0.7)',
//     color: '#000000',
//     padding: 20,
//     ':hover': { cursor: 'pointer' },
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '16px',
//     lineHeight: ' 1.5',
//   }),
// };

// function MyTable() {
//   const backgroundColor = [
//     '#FED057',
//     '#FFD8D0',
//     '#FD9498',
//     '#C5BAFF',
//     '#6E78E8',
//     '#4A56E2',
//     '#81E1FF',
//     '#24CCA7',
//     '#00AD84',
//   ];

//   return (
//     <div className={styles.tableContainer}>
//       <div className={styles.selectContainer}>
//         <div className={styles.select}>
//           <Select
//             value={'month'}
//             options={'uniqueMonth'}
//             name="month"
//             placeholder={'month'}
//             styles={colourStyles}
//           />
//         </div>
//         <div className={styles.select}>
//           <Select
//             value={2}
//             options={'uniqueYear'}
//             name="year"
//             placeholder={'year'}
//             styles={colourStyles}
//           />
//         </div>
//       </div>

//       <div className={styles.categoryContainer}>
//         <ul className={styles.listTitle}>
//           <li className={styles.listTitleText}>Category</li>
//           <li className={styles.listTitleText}>Amount</li>
//         </ul>

//         <ul className={styles.listTransaction}>
//           <li className={styles.elementTransaction}>
//             <div
//               style={{
//                 backgroundColor: backgroundColor[3],
//                 width: '24px',
//                 height: '24px',
//               }}
//             ></div>
//             <div className={styles.category}>{4}</div>
//             <div className={styles.sum}>{3}</div>
//           </li>
//           <li className={styles.elementTransaction}>
//             <div style={{ backgroundColor: backgroundColor[1] }}></div>
//             <div className={styles.category}>{4}</div>
//             <div className={styles.sum}>{3}</div>
//           </li>
//           <li className={styles.elementTransaction}>
//             <div style={{ backgroundColor: backgroundColor[1] }}></div>
//             <div className={styles.category}>{4}</div>
//             <div className={styles.sum}>{3}</div>
//           </li>
//         </ul>

//         <ul className={styles.listTotal}>
//           <li className={styles.itemTotal}>
//             <div className={styles.itemText}>Expenses:</div>
//             <div className={styles.itemTextSpend}>{'totalSpend'}</div>
//           </li>
//           <li className={styles.itemTotal}>
//             <div className={styles.itemText}>Income:</div>
//             <div className={styles.itemTextIncome}>{'totalIncome'}</div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

export default MyTable;
