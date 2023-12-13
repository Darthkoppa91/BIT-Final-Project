import React from "react";
import { useContext } from "react";
import { appContext } from "../context";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function WizzardStefanV2({ setStep }) {
  const { companies, createReport, setCreateReport } = useContext(appContext);
  const handleChange = (event) => {
    setCreateReport({ ...createReport, companyId: event.target.value });
  };
  //   return (
  //     <div>
  //       <select
  //         name=""
  //         id=""
  //         onChange={(e) =>
  //           setCreateReport({ ...createReport, companyId: e.target.value })
  //         }
  //       >
  //         <option>Select Company</option>
  //         {companies.map((comp) => {
  //           return <option value={comp.id}>{comp.name}</option>;
  //         })}
  //       </select>

  //     </div>
  //   );
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {companies.map((comp) => {
            return <MenuItem value={comp.id}>{comp.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => setStep(1)}>
        Back
      </Button>
      <Button variant="contained" onClick={() => setStep(3)}>
        Next
      </Button>
    </Box>
  );
}

export default WizzardStefanV2;
