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
import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AppointmentTable from "./AppointmentTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
};

const AppointmentCosts = () => {
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
  return (
    <Box>
      <Box mb={3}>
        <Button variant={"contained"} onClick={handleOpen}>
          Add a new appointment cost +
        </Button>
      </Box>
      <AppointmentTable />
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
              Appointment Cost
            </Typography>
          </Box>
          <Box py={4}>
            <Container>
              <form>
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
                      label={"Appointment's Hospital Percentage "}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      label={"Re-appointment's Hospital Percentage"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained"> Add Appointment Cost</Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AppointmentCosts;
