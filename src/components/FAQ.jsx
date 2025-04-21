import React from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
    return (
        <Box id="faq" sx={{ py: 10 }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Veelgestelde vragen
                </Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Wat is jullie retourbeleid?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Je kunt je aankoop binnen 14 dagen retourneren, zonder opgaaf van reden.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Hoe kan ik contact opnemen?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Via het contactformulier hieronder of via onze klantenservice.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Biedt Material UI maatwerk?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Ja en nee, er is een mogelijkheid om een thema te maken en hiermee je eigen stijl te creëren.
                            Echter blijft dit beperkt binnen de MUI stijl..
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    );
};

export default FAQ;
