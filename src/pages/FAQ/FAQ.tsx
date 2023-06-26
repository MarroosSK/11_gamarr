
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import { Title } from "../../components";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQdata } from "../../helpers/data";


const FAQ = () => {


  return (
    <>
      <Grid
        container
        xs={12}
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        marginTop="95px"
        marginBottom="50px"
      >
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 200,
            width: 200,
            height: 300,
            background: "linear-gradient(to right, green, black)",
            borderRadius: "85%",
            filter: "blur(200px)",
            zIndex: -1,
          }}
        />
        <Title text="FAQ" />
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
        >
          {FAQdata.map((info) => (
            <Accordion key={info.id} sx={{ width: "100%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="primary">{info.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{info.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column" },
          justifyContent: { xs: "center" },
          marginBottom:"200px"
        }}
      >
        <Typography>
          If you have further questions, contact us{" "}
          <span style={{ textDecoration: "underline" }}>
            <NavLink to="/feedback">here</NavLink>
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default FAQ;
