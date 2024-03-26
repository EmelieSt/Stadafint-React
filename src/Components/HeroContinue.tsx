import {Box} from "@mui/material";
import heroImg from "../Components/Media/heroImg.jpg"

const Hero = () => {
  return (
  <> 
        <Box sx={{ 
            backgroundImage: `url(${heroImg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            height: '20em',
           }}> 
        </Box> 
 </>
  )
}

export default Hero;

