import { Container, Grid, Link, Typography,} from '@mui/material'

const footers = [
    {
      title: 'Sociala Medier',
      description: ['Facebook', 'Instagram', 'Twitter', 'Youtube']
    },
    {
      title: 'Tjänster',
      description: ['Lediga tjänster', 'Karriär', 'Lär känna oss']
    },
    {
      title: 'Hjälp och Kontakt',
      description: ['Kontakta oss', 'Vanliga frågor', 'Här finns vi']
    },
    {
      title: 'Övrigt',
      description: ['Personuppgifter', 'Cookies', 'Tips och trix']
    },
  ];
  
const Footer = () => {

  return (

      <Container
      component="footer"
      sx={{
        width: `md`,
        
        padding: 10,
        margin: 'auto'
      }}
    >
      <Grid container spacing={1}>
        {footers.map((footer) => (
          <Grid item xs={12} sm={6} md={3} key={footer.title}>
            <Typography variant="h6" color="text.primary">
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      STÄDAFINT AB 2023
    </Container>
      )}

export default Footer