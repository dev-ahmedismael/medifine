"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DoctorScheduleTable from "./DoctorScheduleTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "70%",
  overflow: "scroll",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
};

const DoctorSchedule = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const weekDays = [
    {
      title: "Saturday",
      workingHours: [
        { from: "9:00AM", to: "4.00PM" },
        { from: "9:00AM", to: "4.00PM" },
      ],
    },
    { title: "Sunday", workingHours: [] },
    { title: "Monday", workingHours: [] },
    { title: "Tuesday", workingHours: [] },
    { title: "Wednesday", workingHours: [] },
    { title: "Thursday", workingHours: [] },
    { title: "Friday", workingHours: [] },
  ];
  return (
    <Box>
      <Box mb={3}>
        <Button variant="contained" onClick={handleOpen}>
          Add a new schedule +
        </Button>
      </Box>
      {/* Table */}
      <DoctorScheduleTable />
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
              New Schedule
            </Typography>
          </Box>
          <Box py={4}>
            <Container>
              <form>
                <Grid container spacing={3}>
                  {/* Duration */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Choose duration:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      focused
                      type="date"
                      variant="standard"
                      label={"From"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      focused
                      type="date"
                      variant="standard"
                      label={"To"}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>

                  {/* Working hours */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Add working hours:</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {weekDays.map((day) => (
                      <Grid container spacing={5} key={day.title} mb={2}>
                        <Grid item xs={12} sm={2}>
                          <Typography>{day.title}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          {day.workingHours.map((e, index) => (
                            <Typography key={index}>
                              From: {e?.from} - To: {e?.to}
                            </Typography>
                          ))}{" "}
                          <Grid container spacing={5}>
                            <Grid item xs={4}>
                              <TextField
                                type="time"
                                label="From"
                                variant="standard"
                                focused
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="time"
                                label="To"
                                variant="standard"
                                focused
                                fullWidth
                              />
                            </Grid>
                            <Grid
                              item
                              xs={4}
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Button>Add working hours </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                  {/* Submit button */}
                  <Grid item xs={12}>
                    <Button variant="contained"> Add Schedule</Button>
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

export default DoctorSchedule;
