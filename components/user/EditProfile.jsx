"use client";
import React from "react";
import Section from "@/templates/Section";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  standardInput,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  another_phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  another_email: yup.string("Enter your email").email("Enter a valid email"),
  address: yup
    .string("Enter your address")
    .min(3, "Address should be of minimum 3 characters length"),
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

const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      another_phone: "",
      another_email: "",
      nationality: "",
      marital_status: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleOpen();
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [changePassword, setChangePassword] = React.useState(false);
  const openChangePassword = () => setChangePassword(true);
  const closeChangePassword = () => setChangePassword(false);

  return (
    <Box py={5}>
      <Container>
        <Section>
          <Typography variant="h5" mb={5}>
            Edit Profile
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Phone"
                  disabled
                  fullWidth
                  name="phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Another Phone"
                  fullWidth
                  name="another_phone"
                  value={formik.values.another_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.another_phone &&
                    Boolean(formik.errors.another_phone)
                  }
                  helperText={
                    formik.touched.another_phone && formik.errors.another_phone
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Email"
                  disabled
                  fullWidth
                  name="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Another Email"
                  fullWidth
                  name="another_email"
                  value={formik.values.another_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.another_email &&
                    Boolean(formik.errors.another_email)
                  }
                  helperText={
                    formik.touched.another_email && formik.errors.another_email
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Nationality"
                  fullWidth
                  name="nationality"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Marital Status"
                    fullWidth
                    name="marital_status"
                    select
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Widowed">Widowed</MenuItem>
                    <MenuItem value="Divorced">Divorced</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Gender"
                    fullWidth
                    select
                    name="gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  name="date_of_birth"
                  focused
                  label="Date of birth"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  name="image"
                  focused
                  label="Profile Picture"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="Address"
                  fullWidth
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  sx={{ height: "56px", width: "100%" }}
                  onClick={openChangePassword}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
            <Box py={5}>
              <Divider />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </form>
          <Box mt={5}>
            <Link href={"/dashboard"}>
              <Typography
                color={"primary"}
                sx={{ textDecoration: "underline" }}
              >
                Back To Dashboard
              </Typography>
            </Link>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description">
                Data has been saved successfully.
              </Typography>
              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button onClick={handleClose}>Close</Button>
              </Box>
            </Box>
          </Modal>
          <Modal
            open={changePassword}
            onClose={closeChangePassword}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box id="modal-modal-description">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth variant="standard" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Old Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="New Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Confirm Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={closeChangePassword} variant="contained">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Modal>
        </Section>
      </Container>
    </Box>
  );
};

export default EditProfile;
