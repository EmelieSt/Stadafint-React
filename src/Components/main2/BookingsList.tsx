import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Card, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { collection, deleteDoc } from 'firebase/firestore';
import { db } from '../../firestore.config';
import { doc } from "firebase/firestore";
import { IBooking } from './BookingsApi';

interface IProps {
  bookings: IBooking[]
  fetchBookings: () => void;
}

function BookingsList(props: IProps) {

  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean[]>(Array(props.bookings.length).fill(false));
  const bookingsCollectionRef = collection(db, 'bokningar');
  const [rows, setRows] = useState<IBooking[]>([]);
  const utfordabok = props.bookings.filter((bookings) => bookings.status === true)
  const kommandebok = props.bookings.filter((bookings) => bookings.status === false)

  //Raderar bokade städningar vid soptunneklick
  const handleDeleteRow = async (id: string) => {

    await deleteBooking(id)
    props.fetchBookings()
  }

  //Checkboxen i utförda städningar
  const handleCheckboxChange = (id: any) => {
    const newChecked = [...checked];
    newChecked[id] = !newChecked[id];
    setChecked(newChecked);

    if (checkedRows.includes(id)) {
      setCheckedRows(checkedRows.filter((checkedIndex) => checkedIndex !== id));
    } else {
      setCheckedRows([...checkedRows, id]);
    }
  };

  //Raderar icheckade städningar på knapptryck
  const handleDeleteCheckedRows = async (e: React.MouseEvent<HTMLButtonElement>) => {

    checkedRows.forEach(async (id) => {
      await deleteBooking(id)
    })

  };

  const deleteBooking = async (id: string) => {
    await deleteDoc(doc(bookingsCollectionRef, id));
    setRows(prevRows => prevRows.filter((booking) => booking.id !== id));

    props.fetchBookings()
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '80vw', paddingBottom: '4rem' }}>

        <Box sx={{ padding: '2rem' }}>
          <TableContainer component={Card}><h1>Bokade städningar</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>

                <TableRow id="distans">
                  <TableCell >Städnivå</TableCell>
                  <TableCell>Datum</TableCell>
                  <TableCell>Tid</TableCell>
                  <TableCell>Städare</TableCell>
                  <TableCell>Ångrat bokning?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {kommandebok.map((bookings) => (
                  <TableRow

                    key={bookings.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{bookings.level}</TableCell>
                    <TableCell>{bookings.datum}</TableCell>
                    <TableCell>{bookings.tid}</TableCell>
                    <TableCell>{bookings.cleaner}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDeleteRow(bookings.id)}><DeleteIcon /></IconButton></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ padding: '2rem' }}>
          <TableContainer component={Card}><h1>Utförda städningar</h1>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow id="distans">
                  <TableCell>Städnivå</TableCell>
                  <TableCell>Datum</TableCell>
                  <TableCell>Tid</TableCell>
                  <TableCell>Städare</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" size="medium" onClick={handleDeleteCheckedRows}>Ta bort!</Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {utfordabok.map((bookings, id) => (
                  <TableRow
                    key={bookings.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{bookings.level}</TableCell>
                    <TableCell>{bookings.datum}</TableCell>
                    <TableCell>{bookings.tid}</TableCell>
                    <TableCell>{bookings.cleaner}</TableCell>
                    <TableCell>
                      <Checkbox inputProps={{ 'aria-label': 'checkbox', checked: checked[id] }} onChange={() => handleCheckboxChange(bookings.id)} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  )
}
export default BookingsList

