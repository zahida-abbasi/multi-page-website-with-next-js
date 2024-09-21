"use client";
import Navbar from "../navbar/navbar/navbar";
import Footer from "../Footer/footer";
import {
     createTheme,
     Paper,
     ThemeProvider     
    } from "@mui/material";
const Layout = ({children}) => {
    const theme = createTheme({
        palette : {
            mode : "light"
        }
    })
    const design = (
        <> 
          <ThemeProvider theme={theme}>
                <Paper sx={{minHeight:"100vh"}}>
                    <Navbar />
                    {children}
                    <Footer />
                </Paper>
          </ThemeProvider>
        </>
    );
    return design;
}
export default Layout