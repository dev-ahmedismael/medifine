"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

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

const EmployeeTable = () => {
  const [editButton, setEditButton] = React.useState(false);
  const [deleteButton, setDeleteButton] = React.useState(false);
  return (
    <div>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        {editButton && <Button variant="contained">Edit</Button>}

        {deleteButton && (
          <Button variant="contained" color="error" sx={{ ml: 2 }}>
            Delete
          </Button>
        )}
      </Box>
      <div style={{ height: 400, maxWidth: "100%", backgroundColor: "white" }}>
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
          onRowSelectionModelChange={(rowSelectionModel) => {
            if (rowSelectionModel.length === 0) {
              setEditButton(false);
              setDeleteButton(false);
            } else if (rowSelectionModel.length === 1) {
              setEditButton(true);
              setDeleteButton(false);
            } else {
              setEditButton(true);
              setDeleteButton(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
