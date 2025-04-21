import React from "react";
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent } from "@mui/material";

const ContactForm = () => {
    return (
        <Box id="contact" sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
            <Container maxWidth="md">
                <Card elevation={6} sx={{ p: 4 }}>
                    <CardContent>
                        <Typography variant="h4" align="center" gutterBottom>
                            Neem contact op
                        </Typography>
                        <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Naam" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Onderwerp" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="E-mail" type="email" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Bericht"
                                        variant="outlined"
                                        multiline
                                        rows={6}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" size="large" fullWidth>
                                        Verstuur bericht
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default ContactForm;
