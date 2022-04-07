import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function LocationSelect({ handleOnChange }) {
  return (
    <Box>
      <FormControl>
        <label>Location:</label>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        ></InputLabel>
        <NativeSelect
          onChange={handleOnChange}
          defaultValue={"-"}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={""}>All</option>
          <option value={"London"}>London</option>
          <option value={"Torquay"}>Torquay</option>
          <option value={"Birmingham"}>Birmingham</option>
          <option value={"Manchester"}>Manchester</option>
          <option value={"Edinburgh"}>Edinburgh</option>
          <option value={"Liverpool"}>Liverpool</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
