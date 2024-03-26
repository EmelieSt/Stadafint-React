import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firestore.config';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

interface ILog {
  email: string;
  password: string;
}

export function SignInSide() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [inlog, setInlogData] = useState<ILog[]>([]);
  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/main2")
      });
  }

  const fetchData = async (): Promise<void> => {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    const inlogData = querySnapshot.docs.map<ILog>((doc) => ({
      ...(doc.data() as ILog),
      id: doc.id
    }));

    setInlogData(inlogData);
  };
  useEffect(() => {
    fetchData();
  }, [inlog]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Logga in
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                color="success"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Användarnamn"
                name="username"
                autoComplete="username"
                autoFocus
                type='email'
                onChange={handleEmailChange}
              />
              <TextField
                color="success"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="success" />}
                label="Kom ihåg mig"
              />

              <Button
                color="success"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >Logga in
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"
                    sx={{ textDecorationColor: 'black', color: 'black' }}>
                    Glömt lösenord?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2"
                    sx={{ textDecorationColor: 'black', color: 'black' }}>

                    {"Inget konto? Bli medlem här!"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default SignInSide;
