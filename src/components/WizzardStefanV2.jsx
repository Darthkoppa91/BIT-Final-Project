import React from "react";
import { useContext } from "react";
import { appContext } from "../context";
import Button from "@mui/material/Button";

function WizzardStefanV2({ setStep }) {
  const { companies, createReport, setCreateReport } = useContext(appContext);
  const handleChange = (event) => {
    setCreateReport({
      ...createReport,
      companyId: Number(event.target.value),
      companyName: companies.find((c) => {
        return c?.id === Number(event.target.value);
      })?.name,
    });
  };
  return (
    <div className="select">
      <select name="" id="" onChange={handleChange}>
        <option>Select Company</option>
        {companies.map((comp) => {
          return (
            <option
              value={comp.id}
              selected={createReport.companyId === comp.id ? true : false}
            >
              {comp.name}
            </option>
          );
        })}
      </select>
      <div className="btns-select">
        <Button variant="contained" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
  // return (
  //   <Box sx={{ minWidth: 120 }}>
  //     <FormControl fullWidth>
  //       <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         label="Age"
  //         onChange={handleChange}
  //         defaultValue={1}
  //         native=
  //       >
  //         {companies.map((comp) => {
  //           return (
  //             <MenuItem
  //               value={comp.id}
  //               selected={createReport.companyId === comp.id ? true : false}
  //               dense={true}
  //             >
  //               {comp.name}
  //             </MenuItem>
  //           );
  //         })}
  //       </Select>
  //     </FormControl>

  //   </Box>
  // );
}

export default WizzardStefanV2;
