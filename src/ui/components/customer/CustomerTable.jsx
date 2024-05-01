import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Hoang Tin', 159, 6.0, 24, 4.0),
  createData('Khon Linh', 237, 9.0, 37, 4.3),
  createData('Thach Phong', 262, 16.0, 24, 6.0),
  createData('Ngan Ha', 305, 3.7, 67, 4.3),
  createData('Kim Yen', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold',fontSize:'1.1rem', }}>CUSTOMER</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'1.1rem', }}>Cellphone</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'1.1rem', }}>Email&nbsp;Address</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'1.1rem', }}>Skype</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'1.1rem', }}>Zalo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
