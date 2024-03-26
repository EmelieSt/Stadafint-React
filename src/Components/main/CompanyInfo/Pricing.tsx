import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'Bas Städning',
    description: [
      'Damma',
      'Dammsuga',
      'Våttorka',
      'Tömma papperskorg',
      ''
    ],
  },
  {
    title: 'Topp Städning',
    subheader: 'Kundernas Favorit',
    description: [
      'Damma',
      'Dammsuga',
      'Våttorka',
      'Tömma papperkorgar',
      'Fönsterputs',
      'Grovstäd badrum'
    ],
  },
  {
    title: 'Diamant Städning',
    description: [
      'Damma',
      'Dammsuga',
      'Våttorka',
      'Tömma papperskorgar',
      'Fönsterputs',
      'Grovstäd badrum',
      'Grovstäd kök'
    ],
  },
  {
    title: 'Fönster Städning',
    description: [
      'Fönsterputs',
      'Torka av spröjs',
      'Torka av fönsterbläck',
      'Efterbehandling av fönster',
    ],
  },
];

function Pricing () {

  return (
  <Box sx={{ backgroundColor: 'rgba(38, 49, 38, 0.68)', pb: 14}}>
    <React.Fragment >
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none'} }} />

      <Container sx={{pt: 8, pb: 4}}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom>
          Våra Tjänster
        </Typography>
      </Container>
      
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={12}
              md={3}
            >
              <Card >
                <CardHeader 
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Topp Städning' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{ minHeight:"100px",
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent sx={{minHeight:"260px"}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline', 
                      mb:1,
                    }}>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  </Box> 
  );
}

export default Pricing;