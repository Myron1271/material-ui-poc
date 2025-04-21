import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import heroImg from "../assets/img/hero-img.png"
import Button from "@mui/material/Button";

const Hero = () => {
    return (
        <Box id="hero" sx={{ py: 15, backgroundColor: "#f5f5f5" }}>
            <Container>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    direction={{ xs: "column", md: "row" }}
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom>
                            Bij deze POC wordt gebruik gemaakt van Material UI
                        </Typography>
                        <Typography variant="body1">
                            Material UI maakt gebruik van de Material Design standaarden van Google, deze standaarden worden gebruikt voor zowel het web
                            als voor mobile designs.
                        </Typography>
                        <Button sx={{backgroundColor: "#469fff", color: "#ffffff", marginTop: "10px"}}>
                            Check hier Google Material Design
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src= {heroImg}
                            alt="Placeholder afbeelding"
                            sx={{ width: "100%", borderRadius: 2 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
