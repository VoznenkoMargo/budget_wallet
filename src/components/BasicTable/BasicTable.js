/* eslint-disable no-restricted-globals */
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './BasicTable.scss';
import { useTheme } from '@mui/system';

export default function BasicTable(props) {
  const { palette } = useTheme();
  const categories = useSelector((state) => state.categories.categories);
  const { items } = props;

  const getCategoryName = (categoryId, categories) => {
    if (categories.length > 0) {
      const result = categories?.find((el) => el.id === categoryId).name;
      return result;
    }
  };

  return (
    <>
      <TableContainer className="tableContainer">
        <Table className="table" aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow
              className="tableHeadRow"
              sx={{
                borderRadius: '0px',
                backgroundColor: palette.common.white,
                '& .MuiTableCell-root': {
                  borderRadius: '0px',
                  borderBottom: 'none',
                  textAlign: 'center',
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
              <TableCell>Date&nbsp;</TableCell>
              <TableCell>Type&nbsp;</TableCell>
              <TableCell>Category&nbsp;</TableCell>
              <TableCell>Comments&nbsp;</TableCell>
              <TableCell>Amount&nbsp;</TableCell>
              <TableCell>Balance&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {items.map(
              ({ Date, Type, Category, Comments, Amount, Balance, ID }) => (
                <TableRow
                  key={ID}
                  className={`${Type === 'EXPENSE' ? 'costs' : 'income'}`}
                  sx={{
                    '& .MuiTableCell-root': {
                      textAlign: 'center',
                    },
                  }}
                >
                  <TableCell data-toggle="Date">{Date}</TableCell>
                  <TableCell data-toggle="Type">{Type}</TableCell>
                  <TableCell data-toggle="Category">
                    {getCategoryName(Category, categories)}
                  </TableCell>
                  <TableCell data-toggle="Comments">{Comments}</TableCell>
                  <TableCell
                    data-toggle="Amount"
                    sx={{
                      color:
                        Type === 'EXPENSE'
                          ? palette.tertiary.main
                          : palette.primary.main,
                    }}
                  >
                    {Amount}
                  </TableCell>
                  <TableCell data-toggle="Balance">{Balance}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
