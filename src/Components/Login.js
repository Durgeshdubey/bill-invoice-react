import { Container } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ParticleBackground from "./ParticleBackground";
import './Login.css'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Login(){
    return (
      <>
       
        <div style={{backgroundImage:`url(https://www.pixground.com/wp-content/uploads/2023/02/Black-Hole-in-the-Vastness-of-Space-AI-4K-Desktop-Wallpaper-Pixground-1536x864.jpg.webp)`,width:'100vw',height:'100vh'}} >
        <ParticleBackground />
          <Container sx={{ bgcolor: "", height: "100vh",width:"45vw", color:'white'}}>
            <div style={{paddingTop:"14rem"}}>
            <Card className="Login_card" sx={{bgcolor:'transparent', textAlign:'center', height:'45vh', borderRadius:'2rem'}}>
              <CardContent>
                <Typography
                  sx={{ fontSize:24 }}
                  color="#FFFFFF"
                  gutterBottom
                >
                  <h3 style={{marginTop:'0'}}>Login</h3>
                </Typography>
                <Typography 
                  color="white"
                >
                <TextField sx={{marginBottom:'1rem', input:{color:'white'},label:{color:'white'}}} type="text"  fullWidth  id="outlined-basic" label="Username" variant="outlined" required/>
                <TextField sx={{input:{color:'white'},label:{color:'white'}}} type="password" fullWidth  id="outlined-basic"label="Password" variant="outlined" required/>
                </Typography>
              </CardContent>
        
              <Button sx={{marginBottom:'2rem', marginTop:'1rem'}} variant="outlined" type="Submit">Submit</Button>
           
            </Card>
            </div>
          </Container>
        </div>
      </>
    );
}

export default Login;