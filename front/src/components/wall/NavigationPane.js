import * as React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, IconButton } from "@mui/material";
import BackwardButton from "../uielements/buttons/backwardButton";
import AddButton from "../uielements/buttons/addButton";
import FormLabel from "../uielements/form/FormLabel";
import FormInput from "../uielements/form/FormInput";
import PageTitle from "../uielements/pageTitle";

import { Delete as DeleteIcon } from "../../icons/delete";
import { Plus as PlusIcon } from "../../icons/plus";

const NavigationPane = ({ keys, setKey, values, setValue }) => {
  React.useEffect(() => {}, [keys, values]);
  return (
    <>
      <div
        style={{
          overflowX: "scroll",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormLabel>Header Links</FormLabel>
          <AddButton
            onClick={() => {
              setKey([...keys, ""]);
              setValue([...values, ""]);
            }}
          >
            <PlusIcon fill="#f3f3f6" stroke="#6701e6" />
          </AddButton>
        </div>
        {keys === undefined || keys.length === 0
          ? null
          : keys.map((value, index) => {
              return (
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #e5e7eb",
                    padding: "0.2rem",
                    marginTop: "0.25rem",
                    borderRadius: "0.375rem",
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ alignSelf: "center" }}>
                    <IconButton
                      onClick={() => {
                        keys.splice(index, 1);
                        setKey([...keys]);
                        values.splice(index, 1);
                        setValue([...values]);
                      }}
                    >
                      <DeleteIcon fill="white" stroke="black" />
                    </IconButton>
                  </div>
                  <div
                    style={{
                      gap: "0.5rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormInput
                      placeholder="Label"
                      onChange={(e) => {
                        keys[index] = e.target.value;
                        setKey([...keys]);
                      }}
                    />
                    <FormInput
                      placeholder="URL"
                      onChange={(e) => {
                        values[index] = e.target.value;
                        setValue([...values]);
                      }}
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default NavigationPane;
