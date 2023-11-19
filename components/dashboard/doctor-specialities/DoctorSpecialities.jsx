"use client";
import DoctorSpecialitiesTable from "./DoctoSpecialitiesTable";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
};

const DoctorSpecialities = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box mb={3}>
        <Button variant={"contained"} onClick={handleOpen}>
          Add a new Doctor speciality +
        </Button>
      </Box>
      <DoctorSpecialitiesTable />
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
              Doctor Speciality
            </Typography>
          </Box>
          <Box py={4}>
            <Container>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      label={"Doctor Speciality in English"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      label={"Doctor Speciality in Arabic"}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained"> Add Doctor Speciality</Button>
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

export default DoctorSpecialities;
