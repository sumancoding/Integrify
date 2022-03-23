import React, {useEffect, useState} from 'react'
import {Grid, Typography, Button, Card, CardContent, Container, Box, AppBar }from '@mui/material';
import Search from './Search';
import {NavLink} from 'react-router-dom';


const Home = () => {
    const[list, setList] = useState([]);

    useEffect(() => {
      fetch('https://api.openbrewerydb.org/breweries').then((res) => res.json()).then((json)=> setList(json))
    }, []);

  return (
    <>
 
       <Container >
      <Typography variant="h4"  sx={{p:1, textDecoration:'underline'}}>Home Page</Typography>
      <Search sx={{mt: 3}} />
      <Grid container spacing={3} sx={{ mt: 1}}>
     {list.map((item, id) => 
<Grid item xl={3} lg={4} sm={6} xs={12} key={id}>
        <Card variant="outlined" sx={{color:'Navy'}}>
            <CardContent >

   <Typography variant="subtitle1"  sx={{p:1}}><Box  sx={{fontWeight: 'bold'}}>Company's Name: {item.name}</Box></Typography>
 <Typography variant="subtitle1"  sx={{p:1}}>Brewery Type:{item.brewery_type}</Typography>
 <Typography variant="subtitle1"  sx={{p:1}}> City: {item.city}</Typography>


 <NavLink to={`/details/${item.id}`} style={{textDecoration: 'none', margin:5}} ><Button variant='contained' >Click For Details</Button></NavLink>
            </CardContent>
        </Card>
     </Grid>
   )
   }
     
        </Grid>
      </Container>

  
    </>
  )
}
   
export default Home
