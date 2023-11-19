"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EmployeeTable from "./EmployeeTable";
import { useFormik } from "formik";
import * as yup from "yup";
import { Label } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  another_phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  another_email: yup.string("Enter your email").email("Enter a valid email"),
  address: yup
    .string("Enter your address")
    .min(3, "Address should be of minimum 3 characters length"),
});

const Employee = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [doctorDegree, setDoctorDegree] = React.useState("");
  const [doctorSpeciality, setDoctorSpeciality] = React.useState("");

  const handleChangeDoctorDegree = (event) => {
    setDoctorDegree(event.target.value);
  };
  const handleChangeDoctorSpeciality = (event) => {
    setDoctorSpeciality(event.target.value);
  };

  const [currentForm, setCurrentForm] = useState("Registeration");

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

  return (
    <Box>
      <Box mb={3}>
        <Button variant={"contained"} onClick={handleOpen}>
          Add a new Employee +
        </Button>
      </Box>
      <EmployeeTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            bgcolor={theme.palette.primary.main}
            p={2}
            sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"white"}
              textAlign={"center"}
            >
              Employee
            </Typography>
          </Box>
          <Box py={4}>
            <Box sx={{ overflowY: "scroll", height: 300 }}>
              <Container>
                <Box borderBottom={"1px solid lightgray"} mb={5}>
                  <Button
                    variant="outlined"
                    onClick={() => setCurrentForm("Registeration")}
                  >
                    Registeration
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setCurrentForm("Doctor Data")}
                  >
                    Doctor Data
                  </Button>
                </Box>
                <form>
                  {currentForm === "Registeration" ? (
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label="National ID"
                          fullWidth
                          name="national_id"
                          value={formik.values.national_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.national_id &&
                            Boolean(formik.errors.national_id)
                          }
                          helperText={
                            formik.touched.national_id &&
                            formik.errors.national_id
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label="Employee name in English"
                          fullWidth
                          name="phone"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label="Employee name in Arabic"
                          fullWidth
                          name="phone"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label="Phone"
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
                            formik.touched.another_phone &&
                            formik.errors.another_phone
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label="Email"
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
                            formik.touched.another_email &&
                            formik.errors.another_email
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
                          label="Date of birth"
                          focused
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="file"
                          name="image"
                          label="Profile Picture"
                          focused
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
                            formik.touched.address &&
                            Boolean(formik.errors.address)
                          }
                          helperText={
                            formik.touched.address && formik.errors.address
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          select
                          variant="standard"
                          fullWidth
                          multiple
                          name="roles"
                          label="roles"
                        >
                          <MenuItem value="Doctor">Doctor</MenuItem>
                          <MenuItem value="Receptionist">Receptionist</MenuItem>
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="Rad Doctor">Rad Doctor</MenuItem>
                          <MenuItem value="Rad Technican">
                            Rad Technican
                          </MenuItem>
                          <MenuItem value="Rad Cashier">Rad Cashier</MenuItem>
                          <MenuItem value="Lab Doctor">Lab Doctor</MenuItem>
                          <MenuItem value="Lab Technican">
                            Lab Technican
                          </MenuItem>
                          <MenuItem value="Lab Receptionist">
                            Lab Receptionist
                          </MenuItem>
                          <MenuItem value="Lab Cashier">Lab Cashier</MenuItem>
                          <MenuItem value="Clinic Service Receptionist">
                            Clinic Service Receptionist
                          </MenuItem>
                          <MenuItem value="Clinic Service Cashier">
                            Clinic Service Cashier
                          </MenuItem>
                          <MenuItem value="Nurse">Nurse</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-standard-label">
                            Doctor Degree
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Doctor"
                            variant="standard"
                            fullWidth
                            value={doctorDegree}
                            onChange={handleChangeDoctorDegree}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-standard-label">
                            Doctor Speciality
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Doctor"
                            variant="standard"
                            fullWidth
                            value={doctorSpeciality}
                            onChange={handleChangeDoctorSpeciality}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label={"Appointment Cost"}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label={"Re-Appointment Cost"}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label={"Appointment's Doctor Percentage "}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="standard"
                          label={"Re-appointment's Doctor Percentage"}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  )}
                  <Box mt={3}>
                    <Button variant="contained"> Add Employee</Button>
                  </Box>
                </form>
              </Container>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Employee;
