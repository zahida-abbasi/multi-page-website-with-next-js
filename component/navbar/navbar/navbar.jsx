import { 
    AppBar,
    Toolbar, 
    Typography,
    Stack

 } from "@mui/material";
 import Link from "next/link";
 import { usePathname } from "next/navigation";
const Navebar = () => {
    const pathname = usePathname();
    const design = (
        <>
          
          <AppBar position="static">
            <Stack direction="row" justifyContent="space-between">
                <Toolbar>
                    <Typography variant="h4">Next App</Typography>
                </Toolbar>
                <Stack direction="row">
                    <Toolbar>
                    <Toolbar>
                        <Link href="/" className={pathname === "/" ? "bg-danger p-2 px-2 rounded – Default border radius" : ""}>Home</Link>
                    </Toolbar>
                        <Link href="/courses" className={pathname === "/courses" ? "bg-danger p-2 px-2 rounded – Default border radius" : ""}>Courses</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/blog" className={pathname === "/blog" ? "bg-danger p-2 px-2 rounded – Default border radius" : ""}>Blog</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/login" className={pathname === "/login" ? "bg-danger p-2 px-2 rounded – Default border radius" : ""}>Login</Link>
                    </Toolbar>
                    </Stack>
            </Stack>
          </AppBar>
        </>

    );return design
}
export default Navebar