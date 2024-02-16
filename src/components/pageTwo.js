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

import Pic2 from "../../src/pics/p4-removebg-preview (1).png";
import { useState } from "react";

const steps = ["Step-1", "Step-2", "Step-3"];

export default function PageTwo({submit}) {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
  return (
    <Container maxWidth sx={{ height: "100%" }} >
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "100%" }}
      
    >
      <h1>Employee Inquiry Form</h1>
      <Container className="glass" style={{width:'90%'}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <div style={{ bgcolor: "#fffff",width:'50%' }}>
            <img src={Pic2} alt={"alt img"} />
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
                Step - 2
              </Typography>
              <Stepper activeStep={1} alternativeLabel>
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
              <div> Full Address</div>
              <TextField
                id="outlined-basic"
                label="address"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <div>Pin Code</div>
              <TextField
                id="outlined-basic"
                label="pin code"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <div>State</div>
              <TextField
                id="outlined-basic"
                label="state"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Button variant="contained" onClick={()=>submit(name,email)}>Next</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  </Container>
  );
}
