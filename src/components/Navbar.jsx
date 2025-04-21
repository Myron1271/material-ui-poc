import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <ScrollLink to="hero" smooth duration={500}>
                        <Button variant="plain"><h2>Material UI</h2></Button>
                    </ScrollLink>
                </Typography>
                <Stack direction="row" spacing={2}>
                    <ScrollLink to="hero" smooth duration={500}>
                        <Button variant="plain">Home</Button>
                    </ScrollLink>
                    <ScrollLink to="pricing" smooth duration={500}>
                        <Button variant="plain">Pricing</Button>
                    </ScrollLink>
                    <ScrollLink to="faq" smooth duration={500}>
                        <Button variant="plain">FAQ</Button>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={500}>
                        <Button variant="plain">Contact</Button>
                    </ScrollLink>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;












// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import {Link} from "react-router-dom";
//
// const pages = [
//     { label: 'Home', path: '/home'},
//     { label: 'About', path: '/about' },
// ];
//
// const Navbar = () => {
//     const theme = useTheme();
//     const mobileMenu = useMediaQuery(theme.breakpoints.down('md'));
//
//     const [drawerOpen, setDrawerOpen] = React.useState(false);
//
//     return (
//         <AppBar
//             position="sticky"
//             sx={{
//                 backgroundColor: "#4c73a2",
//                 color: "#FFFFFF",
//                 boxShadow: "none",
//             }}>
//             <Toolbar>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         mx: 'auto',
//                         width: '100%',
//                         maxWidth: "1152px",
//                     }}>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{
//                             fontWeight: "bold",
//                         }}>
//                         Logo
//                     </Typography>
//
//                     {mobileMenu ? (
//                         <>
//                             <IconButton
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 onClick={() => setDrawerOpen(true)}>
//                                 <MenuIcon />
//                             </IconButton>
//                             <Drawer
//                                 anchor="left"
//                                 open={drawerOpen}
//                                 onClose={() => setDrawerOpen(false)}>
//                                 <Box
//                                     sx={{ width: 250 }}
//                                     role="presentation"
//                                     onClick={() => setDrawerOpen(false)}
//                                     onKeyDown={() => setDrawerOpen(false)}>
//                                     <List>
//                                         {pages.map((page) => (
//                                             <ListItem button key={page.label} component={Link} to={page.path} sx={{
//                                                 color: "#ff0000",
//                                             }}>
//                                                 <ListItemText primary={page.label} sx={{
//                                                     ":hover": {
//                                                         color: "#b1ff52"
//                                                     }
//                                                 }}/>
//                                             </ListItem>
//                                         ))}
//                                     </List>
//                                 </Box>
//                             </Drawer>
//                         </>
//                     ) : (
//                         <Box sx={{ display: 'flex', gap: 2 }}>
//                             {pages.map((page) => (
//                                 <Button key={page.label} color="inherit" component={Link} to={page.path}>
//                                     {page.label}
//                                 </Button>
//                             ))}
//                         </Box>
//                     )}
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };
//
// export default Navbar;
