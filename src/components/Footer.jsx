import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#363636", color: "#fff", py: 6 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Sitelinks
                        </Typography>
                        <Link href="#hero" underline="hover" color="inherit" display="block">
                            Home
                        </Link>
                        <Link href="#pricing" underline="hover" color="inherit" display="block">
                            Pricing
                        </Link>
                        <Link href="#faq" underline="hover" color="inherit" display="block">
                            FAQ
                        </Link>
                        <Link href="#contact" underline="hover" color="inherit" display="block">
                            Contact
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Contactgegevens
                        </Typography>
                        <Typography>📍 Nederland</Typography>
                        <Typography>📞 +31 6 12345678</Typography>
                        <Typography>✉️ info@mui-poc.nl</Typography>
                    </Grid>
                </Grid>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="gray">
                        © {new Date().getFullYear()} Mui POC Site. Alle rechten voorbehouden.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
