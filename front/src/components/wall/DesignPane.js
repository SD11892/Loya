import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { createColor } from "material-ui-color";
import Picker from "../uielements/picker";

export const DesignPane = () => {
  const [color, setColor] = useState(createColor("#000"));
  const handleChange = (value) => {
    setColor(value);
  };
  return (
    <>
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
            <Button
              style={{
                transform:
                  "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                fontFamily: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                color: "inherit",
              }}
            >
              <img src="design1.png" alt="design1" />
            </Button>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <Button
              style={{
                transform:
                  "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                fontFamily: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                color: "inherit",
              }}
            >
              <img src="design2.png" alt="design2" />
            </Button>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <Button
              style={{
                transform:
                  "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                fontFamily: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                color: "inherit",
              }}
            >
              <img src="design3.png" alt="design3" />
            </Button>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <Button
              style={{
                transform:
                  "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                fontFamily: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                color: "inherit",
              }}
            >
              <img src="design4.png" alt="design4" />
            </Button>
          </div>
          <div
            style={{
              transitionDuration: ".2s",
              twScaleX: " 1.05",
              twScaleY: "1.05",
            }}
          >
            <Button
              style={{
                transform:
                  "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                fontFamily: "inherit",
                fontSize: "100%",
                fontWeight: "inherit",
                lineHeight: "inherit",
                color: "inherit",
              }}
            >
              <img src="design5.png" alt="design5" />
            </Button>
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
        <Picker value={color} onChange={handleChange} />
      </div>
    </>
  );
};
