import { Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { useState } from 'react'
import { db } from '../../firestore.config';

interface IProps {
  fetchBookings: () => void;
}

const names = [
  { id: 1, name: 'Bosse' },
  { id: 2, name: 'Anita' },
  { id: 3, name: 'Sven' },
  { id: 4, name: 'Anna' }
];

interface User {
  namn: string;
}

const BookingsForm: React.FC<IProps> = ({fetchBookings}) => {
  const [sendTid, setSendTid] = useState<string>("");
  const [sendLevel, setLevel] = useState<string>("");
  const [sendCleaner, setSendCleaner] = useState<string>("");

  const [user] = useState<User>({
    namn: 'Olof'
  });

  const sendbokning = async () => {
    if (!sendTid || !sendLevel || !sendCleaner) {
      alert("Vänligen fyll i alla fält korrekt");
      return;
    }
  
    const existingBookingQuery = query(
      collection(db, "bokningar"), 
      where("datum", "==", sendTid.substring(0, 10)),
      where("cleaner", "==", sendCleaner)
    );
    
    const existingBookingSnapshot = await getDocs(existingBookingQuery);
  
    if (!existingBookingSnapshot.empty) {
      alert("Det finns redan en bokning för den här tiden och städaren!");
      return;
    }

    await setDoc(doc(db, "bokningar", Date.now().toString()), {
      id: Date.now().toString(),
      datum: sendTid.substring(0,10),
      tid: sendTid.substring(11),
      kund: "Olof",
      level: sendLevel,
      cleaner: sendCleaner,
      status: false
    });
    fetchBookings();
  };
 
  return (

    <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '80vw',  padding: '5rem'}}>
      <h1 id="välkommen">Välkommen {user.namn}</h1>
      <h2>Här kan du välja att boka eller avboka dina städningar</h2>
      <FormControl>
        <FormLabel color='success' id="buttons-group-label">{/* Välj Städnivå: */}</FormLabel>
        <RadioGroup
          onChange={((e) => setLevel(e.target.value))}
          row
          aria-labelledby="buttons-group-label"
          
          name="radio-buttons-group"
        >
          <FormControlLabel labelPlacement="top" value="Basic" control={<Radio color='success' />} label="Basicstäd" />
          <FormControlLabel labelPlacement="top" value="Topp" control={<Radio color='success' />} label="Toppstäd" />
          <FormControlLabel labelPlacement="top" value="Diamant" control={<Radio  color='success'/>} label="Diamantstäd" />
          <FormControlLabel labelPlacement="top" value="Fönster" control={<Radio  color='success'/>} label="Fönstertvätt" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <TextField
          color='success'
          onChange={((e) => setSendTid(e.target.value))}
          id="datetime-local"
          label="Välj tid"
          type="datetime-local"
          sx={{ width: 250, marginRight: '20px' }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: new Date().toISOString().slice(0, 16),
          }}
        />
      </FormControl>

      <FormControl >
        <InputLabel color='success' id="name-label" >Välj städare:</InputLabel>
        <Select
          color='success'
          onChange={(e) => setSendCleaner(e.target.value as string)}
          labelId="name-label"
          id="name-select"
          sx={{ width: '250px', marginRight: '20px' }}
          defaultValue="">
          {names.map((name) => (
            <MenuItem key={name.id} value={name.name}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button size="large" color='success' variant="contained" sx={{marginTop: '7px'}} onClick={() =>
        sendbokning()}>Boka här</Button>

    </Container>
  )
}

export default BookingsForm;
