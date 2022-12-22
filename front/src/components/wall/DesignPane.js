import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { createColor } from "material-ui-color";
import Picker from "../uielements/picker";
import ImageButton from "../uielements/buttons/imageButton";

const DesignPane = ({ theme, setTheme, pColor, setPColor }) => {
  const handleChange = (value) => {
    setPColor(value.css.backgroundColor);
  };
  return (
    <div style={{ width: "inherit" }}>
      <div
        style={{
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            padding: "0.5rem",
            overflowX: "auto",
            overflow: "visible",
            display: "flex",
            gap: "1rem",
          }}
        >
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <ImageButton
              onClick={() => {
                setTheme(1);
              }}
            >
              <img src="../design1.png" alt="design1" />
            </ImageButton>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <ImageButton
              onClick={() => {
                setTheme(2);
              }}
            >
              <img src="../design2.png" alt="design2" />
            </ImageButton>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <ImageButton
              onClick={() => {
                setTheme(3);
              }}
            >
              <img src="../design3.png" alt="design3" />
            </ImageButton>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <ImageButton
              onClick={() => {
                setTheme(4);
              }}
            >
              <img src="../design4.png" alt="design4" />
            </ImageButton>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <ImageButton
              onClick={() => {
                setTheme(5);
              }}
            >
              <img src="../design5.png" alt="design5" />
            </ImageButton>
          </div>
        </div>
      </div>
      <div style={{ padding: "0.5rem", marginTop: "0.5rem" }}>
        Primary Color
      </div>
      <div
        style={{
          padding: "0.5rem",
          marginTop: "0.5rem",
          border: "1px solid #ddd",
          borderRadius: "1rem",
        }}
      >
        <Picker value={createColor(pColor)} onChange={handleChange} />
      </div>
    </div>
  );
};
export default DesignPane;
