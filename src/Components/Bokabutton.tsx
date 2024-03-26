import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Bokabutton = () => {
  return (
    <>
      <Button
        size="large"
        variant="contained"
        color="success"
        component={Link}
        to="/loggain"
        sx={{fontSize: "24px", marginLeft: '35vw', marginRight: '35vw', display: 'block', textAlign: 'center', padding: 3 }}
      >
        {/* Email: Olof@gmail.com
            Lösen: abc123 */}
        Boka städning här!
      </Button>
    </>
  );
};

export default Bokabutton;
