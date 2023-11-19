"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "schedule", headerName: "Schedule", width: 350 },
  { field: "workingdays", headerName: "Working Days", width: 200 },
];

const rows = [
  {
    id: 1,
    schedule: "From 01 / 01 / 2023 - To 01 / 01 / 2026",
    workingdays: "Sunday, Wednesday",
  },
];

export default function DoctorScheduleTable() {
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
