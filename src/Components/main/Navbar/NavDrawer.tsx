import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CottageIcon from '@mui/icons-material/Cottage';
import MailIcon from '@mui/icons-material/Mail';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };    

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: 'rgba(38, 49, 38, 0.8)'}} position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Städa Fint AB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: 'rgba(38, 49, 38, 0.8)',}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
    <List >
        {['Hem', 'Kontakta Oss', 'Våra tjänster', 'Logga In'].map((text, index) => (
          <ListItem key={text} disablePadding>
           <Link to={index === 0 ? '/' : index === 3 ? '/loggain' : '#'}
           style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
            <ListItemIcon>
          {index % 4 === 0 ? <CottageIcon /> : 
            index % 4 === 1 ? <MailIcon /> :
            index % 4 === 2 ? <CleaningServicesIcon /> : <LoginIcon />}
        </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      </Drawer >
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
    </Box>
  );
};

export default NavDrawer