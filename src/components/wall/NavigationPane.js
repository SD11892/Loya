import * as React from "react";
import { Logo } from "../../icons/wall/logo";

export const NavigationPane = () => {
  return (
    <div>
      <div
        style={{
          padding: "0.5rem",
          overflowX: "auto",
          overflow: "visible",
          display: "flex",
          gap: "1rem",
        }}
      >
        Logo
      </div>
      <div
        style={{
          padding: "0.5rem",
          overflowX: "auto",
          overflow: "visible",
          display: "flex",
          gap: "1rem",
          width: "inherit",
          textAlign: "center",
        }}
      >
        <Logo />
      </div>
    </div>
  );
};
