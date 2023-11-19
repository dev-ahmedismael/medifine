"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "@/templates/Section";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

const LandingPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (
        values.email === "admin@medifine.com" &&
        values.password === "admin123"
      ) {
        dispatch(login());
        router.push("/dashboard");
      } else {
        handleOpen();
      }
    },
  });

  return (
    <Box className="img-wrap">
      <Box id="landing-page">
        <Box position={"relative"} zIndex={2}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={5}>
                <Box pt={22}>
                  <Section>
                    <Typography
                      textAlign={"center"}
                      color={"primary"}
                      variant="h5"
                      fontWeight={"bold"}
                      mb={3}
                    >
                      Sign In
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <TextField
                            variant="standard"
                            label="Email"
                            fullWidth
                            name="email"
                            focused
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="standard"
                            focused
                            type="password"
                            label="Password"
                            fullWidth
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.password &&
                              Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            sx={{ height: 50 }}
                          >
                            Sign In
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Section>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={7}
                display={{ xs: "none", sm: "block" }}
              ></Grid>
            </Grid>
          </Container>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description">
              Wrong email or password, please contact administration
            </Typography>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default LandingPage;
