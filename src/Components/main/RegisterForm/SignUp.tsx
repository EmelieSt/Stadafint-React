import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Radio, RadioGroup } from '@mui/material';

const theme = createTheme();

export default function SignUp() {
  const [userType, setUserType] = React.useState('Företag');

  const handleUserTypeChange = (event: any) => {
    setUserType(event.target.value);
  };

 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm"  sx={{width: '80vw', pt: 3, pb: 10}}>
        
        <Box
          sx={{
          
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      
          <Typography component="h1" variant="h5">
            Bli Medlem här!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
          <RadioGroup
              aria-label="userType"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <FormControlLabel value="Företag" control={<Radio  color="success"/>} label="Företag" />
              <FormControlLabel value="Privatperson" control={<Radio  color="success"/>} label="Privatperson" />
            </RadioGroup>

            <Grid container spacing={2}>
              {userType === 'Företag' ? (
                <Grid item xs={12}>
                  <TextField
                    color="success"
                    required
                    fullWidth
                    id="orgNumber"
                    label="Org. Nr."
                    name="orgNumber"
                    autoComplete="orgNumber"
                    sx={{ backgroundColor: 'lightgray' }}
                  />
                </Grid>
              ) : (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Förnamn"
                      autoFocus
                      sx={{ backgroundColor: 'lightgray' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="success"
                      required
                      fullWidth
                      id="lastName"
                      label="Efternamn"
                      name="lastName"
                      autoComplete="family-name"
                      sx={{ backgroundColor: 'lightgray' }}
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  color="success"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  sx={{ backgroundColor: 'lightgray' }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  color="success"
                  required
                  fullWidth
                  id="adress"
                  label="Adress"
                  name="adress"
                  autoComplete="adress"
                  sx={{ backgroundColor: 'lightgray' }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  color="success"
                  required
                  fullWidth
                  name="password"
                  label="Lösenord"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{ backgroundColor: 'lightgray' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="success" />}
                  label="Ja tack, jag vill gärna ha reklam och andra erbjudanden via email."
                />
              </Grid>
            </Grid>
            <Button
            color="success"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Bli Medlem
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./loggain" variant="body2"
                sx={{ textDecorationColor: 'black', color: 'black' }}>
                  Har du redan ett konto? Logga in här!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}