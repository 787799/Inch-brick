import {
    Box,
    Button,
    Container,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
  } from "@mui/material";
  import Footer from "./footer";
  
  import Pic3 from "../../src/pics/p5-removebg-preview.png";
import { useState } from "react";
  
  const steps = ["Step-1", "Step-2", "Step-3"];



export default function PageThree({submit}){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    return(
        <Container maxWidth sx={{ height: "100%" }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <h1>Employee Inquiry Form</h1>
          <Container style={{width:'90%'}}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              className="glass"
            >
              <div style={{ bgcolor: "#fffff",width:'50%' }}>
                <img src={Pic3} alt={"alt img"}  />
              </div>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ width: "40%" }}
                
              >
                <Box sx={{ width: "65%", margin: "20px 0px !important" }}>
                  <Typography variant="h6" gutterBottom>
                    Step - 3
                  </Typography>
                  <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="start"
                  spacing={2}
                  sx={{ width: "65%" }}
                  
                >
                  <div>Quiry </div>
                  <TextField
                    id="outlined-basic"
                    label="quiry"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <div>message</div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  {/* <div>Phone no.</div>
                  <TextField
                    id="outlined-basic"
                    label="phone no."
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  /> */}
                  <Button variant="contained" onClick={()=>submit(name,email)}>Next</Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
          <Footer />
        </Stack>
      </Container>
    )
}