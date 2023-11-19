"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "doctorDegree", headerName: "Doctor Degree", width: 200 },
];

const rows = [
  { id: 1, doctorDegree: "Snow" },
  { id: 2, doctorDegree: "Lannister" },
  { id: 3, doctorDegree: "Lannister" },
  { id: 4, doctorDegree: "Stark" },
  { id: 5, doctorDegree: "Targaryen" },
  { id: 6, doctorDegree: "Melisandre" },
  { id: 7, doctorDegree: "Clifford" },
  { id: 8, doctorDegree: "Frances" },
  { id: 9, doctorDegree: "Roxie" },
];

export default function DoctorDegreeTable() {
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
