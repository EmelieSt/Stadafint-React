import { Box, styled, Typography } from "@mui/material";
import heroImg from "../Media/heroImg.jpg"
import Bokabutton from "../Bokabutton"

const Hero = () => {

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    textShadow: `0 0 10px #EDEAE2`,
    fontWeight: "bold",
    margin: theme.spacing(0, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
  <> 
           <Box sx={{ 
            backgroundImage: `url(${heroImg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
           }} 
           > 
            <Title variant="h1" sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingTop: '32vh' }}>
            Välkommen till Städa Fint AB
            </Title>

           <Bokabutton/>

            <Typography
              variant="body2" 
              sx={{ fontSize: "24px", 
              color: "#001e36", 
              textShadow: `0 0 10px #EDEAE2`, 
              my: 3, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingTop: '40px' }} >
              Skippa pizzan och lägg istället pengarna på att vi fredagsstädar åt dig? win-win 
            </Typography>
           </Box>
 </>
  )
}

export default Hero;

