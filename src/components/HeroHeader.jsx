import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import heroImg from "../assets/img/hero-img.png";
import theme from "../theme.js";

export const HeroHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: "#ffffff",
                width: 'auto',
                height: 'auto',
                px: {lg: 40, md: 5},
                py: 2,
            }}>
            <Grid container alignItems="center" justifyContent="space-evenly" sx={{
                    height: "100%"
                }}>
                <Grid size={6} item textAlign={"left"}>
                    <Typography variant={"h3"} sx={{
                        textTransform: theme.typography.button.textTransform,
                        //maxWidth: { xs: "100%", sm: "100%", md:"50%"},

                    }}>
                        Slimme software begint bij ons!
                    </Typography>
                    <Typography>
                        Voor elke klant is er wel wat!
                    </Typography>
                </Grid>

                <Grid size={6} item sx={{ textAlign: "right" }}>
                    <Box
                        component="img"
                        src= {heroImg}
                        alt="Hero afbeelding"
                        sx={{
                            maxWidth: 400,
                            height: 'auto',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
export default HeroHeader;
