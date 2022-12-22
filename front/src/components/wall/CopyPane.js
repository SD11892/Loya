import * as React from "react";

import FormLabel from "../uielements/form/FormLabel";
import FormInput from "../uielements/form/FormInput";
import FormGrid from "../uielements/form/FormGrid";

import { TextField } from "@mui/material";

const CopyPane = ({ pTitle, setPTitle, subTitle, setSubTitle }) => {
  return (
    <>
      <FormGrid>
        <FormLabel>Page Title</FormLabel>
        <FormInput
          value={pTitle}
          onChange={(e) => {
            setPTitle(e.target.value);
          }}
        ></FormInput>
      </FormGrid>
      <FormGrid>
        <FormLabel>Subtitle</FormLabel>
        <TextField
          multiline
          rows={4}
          style={{ width: "100%" }}
          value={subTitle}
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
        />
      </FormGrid>
    </>
  );
};
export default CopyPane;
