"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "doctorDegree", headerName: "Doctor Degree", width: 200 },
  { field: "doctorSpeciality", headerName: "Doctor Speciality", width: 200 },
  { field: "appointmentCost", headerName: "Appointment Cost", width: 200 },
  { field: "reappointmentCost", headerName: "Re-appointment Cost", width: 200 },
  {
    field: "appointmentHospitalPercentage",
    headerName: "Appointment's Hospital Percentage",
    width: 200,
  },
  {
    field: "reappointmentHospitalPercentage",
    headerName: "Re-appointment's Hospital Percentage",
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Snow",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 2,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Lannister",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 3,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Lannister",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 4,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Stark",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 5,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Targaryen",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 6,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Melisandre",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 7,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Clifford",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 8,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Frances",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
  {
    id: 9,
    doctorDegree: "Bachelor's",
    doctorSpeciality: "Roxie",
    appointmentCost: 80,
    reappointmentCost: 90,
    appointmentHospitalPercentage: "20%",
    reappointmentHospitalPercentage: "10%",
  },
];

const AppointmentTable = () => {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default AppointmentTable;
