import { useContext, useEffect, useState } from "react";
import { Box, Alert, Button, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { LoginContext } from "../../context/LoginContext";
// validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FeedbackTypes } from "../../types/types";
import Title from "../../components/Title/Title";

const Feedback = () => {
  // validation
  const schema = yup.object().shape({
    author: yup.string(),
    subject: yup
      .string()
      .min(3)
      .required("Subject has to be at least 3 characters long!"),
    message: yup
      .string()
      .min(5)
      .required("Message has to be at least 5 characters long!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const context = useContext(LoginContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleSend = (data: FeedbackTypes) => {
    console.log(data);
    if (!errors.subject && !errors.message) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  useEffect(() => {
    reset({
      author: context?.loginForm.nickname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      xs={12}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="80px"
      marginBottom="50px"
      sx={{minHeight: "100vh"}}
    >
      <Title text="Tell us" />
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        {showAlert && (
          <Alert
            severity="success"
            onClose={() => setShowAlert(false)}
            sx={{ margin: "10px" }}
          >
            Mail sent
          </Alert>
        )}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            maxWidth: "550px",
          }}
          onSubmit={handleSubmit(handleSend)}
        >
          <Box
            display="flex"
            gap="5px"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <TextField
              type="text"
              placeholder="name"
              defaultValue={context?.loginForm.nickname}
              {...register("author")}
              disabled
              sx={{ margin: "10px" }}
            />
            <TextField
              type="text"
              label="Subject"
              variant="outlined"
              {...register("subject")}
              error={!!errors.subject}
              helperText={errors.subject?.message}
              sx={{ margin: "10px" }}
            />
          </Box>
          <TextField
            multiline
            rows={5}
            label="Enter text"
            variant="outlined"
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={{ margin: "10px" }}
          />
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginTop: "10px", maxWidth: "200px", alignSelf: "center" }}
            endIcon={<SendIcon />}
            type="submit"
          >
            send ticket
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Feedback;
