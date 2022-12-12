import React, { useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Avatar,
} from "@mui/material";
import { Starsm as StarIcon } from "../../icons/star_sm";
import StatusButton from "../../components/uielements/buttons/statusButton";

function createData(avatar, name, testimonial, rate, date, status) {
  return { avatar, name, testimonial, rate, date, status };
}

const rows = [
  createData(
    "1.jpg",
    "Ardi",
    "Hey! It's Ardi here, co-founder of Loya. This is a dummy review that'll show you how a testimonial works 😄",
    0,
    "Nov 28, 2022",
    1
  ),
  createData(
    "2.jpg",
    "William",
    "I just learned about Loya this morning and now they have a new customer. I'm head over heels about William's project. It just works! Well done!",
    5,
    "Nov 28, 2022",
    0
  ),
];

const TestTable = () => {
  const [buttonText, setButtonText] = useState(["private", "public"]);

  const privateStyle = { background: "#F59E0B33", color: "#D97706 " };
  const publicStyle = { background: "#10B98133", color: "#059689" };

  return (
    <div>
      <TableContainer style={{ boxShadow: "unset" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
              >
                Person
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Testimonials
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Date
              </TableCell>
              <TableCell
                style={{
                  padding: "0.875rem 1rem 0.5rem",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  color: "rgb(107,114,128)",
                }}
                align="left"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    verticalAlign: "top",
                  },
                }}
              >
                <TableCell
                  style={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    color: "rgb(107,114,128)",
                  }}
                  component="th"
                  scope="row"
                >
                  <Grid container spacing={2} style={{ gap: "0.5rem" }}>
                    <Grid item>
                      <Avatar
                        style={{
                          borderRadius: "50%",
                          border: "1px solid #ddd",
                        }}
                        alt={row.avatar}
                        src={row.avatar}
                      />
                    </Grid>
                    <Grid
                      item
                      style={{
                        overFlow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        color: "#000",
                      }}
                    >
                      {row.name}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                  }}
                  align="left"
                >
                  <div style={{ color: "rgb(107,114,128)", maxWidth: "28rem" }}>
                    {row.rate === 0 ? null : (
                      <div>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    )}
                  </div>
                  <div style={{ color: "rgb(107,114,128)", maxWidth: "28rem" }}>
                    {row.testimonial}
                  </div>
                </TableCell>
                <TableCell
                  style={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    verticalAlign: "top",
                  }}
                  align="left"
                >
                  <div style={{ color: "rgb(17,24,39)" }}>{row.date}</div>
                </TableCell>
                <TableCell
                  tyle={{
                    padding: "1rem",
                    fontSize: "0.8rem",
                    lineHeight: "1.25rem",
                    color: "rgb(107,114,128)",
                    verticalAlign: "top",
                  }}
                  align="left"
                >
                  {row.status === 1 ? (
                    <StatusButton
                      style={{ ...privateStyle }}
                      onClick={() => {
                        setButtonText([buttonText[1 - row.status], "public"]);
                        row.status = 0;
                      }}
                    >
                      {buttonText[0]}
                    </StatusButton>
                  ) : (
                    <StatusButton
                      style={{ ...publicStyle }}
                      onClick={() => {
                        setButtonText(["public", buttonText[1 - row.status]]);
                        row.status = 1;
                      }}
                    >
                      {buttonText[1]}
                    </StatusButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TestTable;
