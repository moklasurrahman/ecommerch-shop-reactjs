import "./tabel.scss"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { getUserall } from "../../../services/dataService";

const Tabel = () => {

  const [users, setUsers] = useState(null);

  useEffect(() => {
      async function fetchProducts(){
       try{
         const data = await getUserall()
         setUsers(data)
       }
       catch(error){
        console.error('Error fetching-data:', error);
       }
       
      }
      fetchProducts()
     }, []);


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      <TableHead>
      <TableRow>

            <TableCell className="tableCell titlebold">User ID</TableCell>
            <TableCell className="tableCell titlebold">Phone</TableCell>
            <TableCell className="tableCell titlebold">Email</TableCell>
            <TableCell className="tableCell titlebold">Delet User</TableCell>          
          
          </TableRow>
      </TableHead>

      <TableBody>
      {users?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.number}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell> 
              <TableCell className="tableCell"><span className="bg-red-600 hover:bg-red-400 w-[40px] font-bold text-white py-3 px-4 cursor-pointer rounded-sm">Delet</span></TableCell>              
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tabel