import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";

const pricingOptions = [
    {
        title: "Basic - Gratis",
        price: "0",
        features: ["1 project met MUI", "beperkt toegang tot Joy UI"],
    },
    {
        title: "Pro",
        price: "€10",
        features: ["10 projects", "Beparkte toegang tot Joy UI"],
        featured: true,
    },
    {
        title: "Ultimate",
        price: "€25",
        features: ["Oneindig projecten", "Volledig toch tot Joy UI"],
    },
];

const Pricing = () => {
    return (
        <Box id="pricing" sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Onze Prijzen
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {pricingOptions.map((option) => (
                        <Grid item xs={12} sm={6} md={4} key={option.title}>
                            <Card
                                elevation={option.featured ? 10 : 4}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    marginTop: "15px",
                                    p: 2,
                                    minHeight: 380,
                                    transform: option.featured ? "scale(1.05)" : "none",
                                    border:
                                        option.featured ? "2px solid #1976d2" : "1px solid #e0e0e0",
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {option.title}
                                    </Typography>
                                    <Typography variant="h4" gutterBottom>
                                        {option.price}/maand
                                    </Typography>
                                    {option.features.map((feature, i) => (
                                        <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                                            • {feature}
                                        </Typography>
                                    ))}
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        size="large"
                                        variant={option.featured ? "contained" : "outlined"}
                                    >
                                        Selecteer
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Pricing;
