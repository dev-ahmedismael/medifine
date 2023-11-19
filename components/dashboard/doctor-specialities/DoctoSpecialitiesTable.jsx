"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "doctorSpeciality", headerName: "Doctor Speciality", width: 200 },
];

const rows = [
  { id: 1, doctorSpeciality: "Snow" },
  { id: 2, doctorSpeciality: "Lannister" },
  { id: 3, doctorSpeciality: "Lannister" },
  { id: 4, doctorSpeciality: "Stark" },
  { id: 5, doctorSpeciality: "Targaryen" },
  { id: 6, doctorSpeciality: "Melisandre" },
  { id: 7, doctorSpeciality: "Clifford" },
  { id: 8, doctorSpeciality: "Frances" },
  { id: 9, doctorSpeciality: "Roxie" },
];

export default function DoctorSpecialitiesTable() {
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
}
