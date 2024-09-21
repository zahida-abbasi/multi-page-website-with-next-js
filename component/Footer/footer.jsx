import { AppBar } from "@mui/material";
const Footer = () => {
    const design = (
        <> 
           <AppBar 
             position="static"
             sx={{
                py:20,
                textAlign : "center",
                fontSize : "50px",
             }}>
              Footer
           </AppBar>
        </>
    );
    return design;
}
export default Footer;