import { Container } from "@mui/material";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ParticleBackground from "./ParticleBackground";
import './Login.css'
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert } from '@mui/material';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const schema = yup.object().shape({
    userName: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
  });

function Login(){

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [usernameErrorText, setUsernameErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');


    const loginSchema = yup.object().shape({
      username:yup.string().required(),
      password:yup.string().min(8).required(),
    })

    async function validateLoginForm(){
      let dataObject = {
        username:username,
        password:password,
      }
      const isValid = await loginSchema.isValid(dataObject)

      if (isValid) {
        navigate("/Home");
       
      } else {
        if (!username) {
          setUsernameErrorText("Please enter Username");
        } else {
          setUsernameErrorText("");
        }
        if (!password){
          setPasswordErrorText("Please enter password");
        } else {
          setPasswordErrorText("");
        }
        if(password.length <8 ){
          setPasswordErrorText("Your password must be at least 8 characters long")
        }
      }

    }

  const navigate = useNavigate();
 
    return (
      <>
      
        {/* <div style={{backgroundImage:`url(https://www.pixground.com/wp-content/uploads/2023/02/Black-Hole-in-the-Vastness-of-Space-AI-4K-Desktop-Wallpaper-Pixground-1536x864.jpg.webp)`, backgroundSize:'100%'}} > */}
        <div style={{backgroundImage:`url(https://images8.alphacoders.com/132/1321689.png)`, backgroundSize:'100%'}} >
        <ParticleBackground />
          <Container sx={{ bgcolor: "", height: "100vh",width:"45vw", color:'white'}}>
            <div style={{paddingTop:"14rem"}}>
              <form>
            <Card className="Login_card" sx={{bgcolor:'transparent', textAlign:'center', height:'47vh', borderRadius:'2rem'}}>
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
                <TextField 
                onChange={(e) => setUsername(e.target.value)}
                sx={{marginBottom:'1rem', input:{color:'white'},label:{color:'white'}}} 
                type="text"
                fullWidth  
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                value={username}
                error={!!usernameErrorText}
                helperText={usernameErrorText}
                
           />
                
                <TextField 
                 onChange={(e) => setPassword(e.target.value)}
                 sx={{input:{color:'white'},label:{color:'white'}}} 
                 type="password" 
                 fullWidth  
                 id="outlined-basic"
                 label="Password" 
                 variant="outlined" 
                 value={password}
                 error={!!passwordErrorText}
                 helperText={passwordErrorText}
                 />
                </Typography>

             

              </CardContent>

              <Button  onClick={()=>validateLoginForm()} sx={{marginBottom:'2rem', marginTop:'1rem', color:'white'}} variant="outlined">Submit</Button>
         
 
            </Card>
            </form>
            </div>
          </Container>
        </div>


      </>
    );
}

export default Login;