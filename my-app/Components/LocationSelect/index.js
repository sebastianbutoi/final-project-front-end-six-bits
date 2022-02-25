import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function LocationSelect() {
  return (
    <Box>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Location
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Birmingham</option>
          <option value={20}>London</option>
          <option value={30}>Torquay</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
