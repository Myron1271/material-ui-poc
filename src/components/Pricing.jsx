import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

export const Pricing = () => {
    return (
        <Grid container>
            <Grid size={6}>
                <Card>
                    <CardContent>
                        <Typography>
                            Tekst in de card
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={6}>
                <Card>
                    <CardContent>
                        <Typography>
                            Tekst in de card
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}