import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getBookings, IBooking } from './BookingsApi';
import BookingsForm from './BookingsForm'
import BookingsList from './BookingsList'

const Main2 = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const fetchBookings = async () =>{
    const bookings = await getBookings()
    setBookings(bookings)
}

useEffect(() => {
  
  fetchBookings()
  }, []);

  return (
    <Grid item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >

    <BookingsForm fetchBookings={fetchBookings} />
    <BookingsList bookings ={bookings} fetchBookings={fetchBookings} />
    </Grid>
  )
}

export default Main2;