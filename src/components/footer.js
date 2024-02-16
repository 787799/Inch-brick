import { Box, Container } from "@mui/material";

export default function Footer(){
    return(
        <>
      
      <Container maxWidth>
        <Box sx={{ bgcolor: '#0F2678', height: '5vh',color:'white',width :'100%',textAlign:'center' }} >
            <h3>© 2024 ABC Company. All rights reserved.</h3>
        </Box>
        
      </Container>
    </>
    )
}