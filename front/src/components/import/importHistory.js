import {
  List,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  ListItemText,
  Rating,
} from "@mui/material";
import * as React from "react";
import PageTitle from "../uielements/pageTitle";
import { ReactSVG } from "react-svg";
import Description from "../../components/uielements/description";
import moment from "moment";

export const ImportHistory = (props) => {
  const [url, setUrl] = React.useState([]);
  React.useEffect(() => {
    props.testimonials.map((row) => {
      setUrl(...url, row.url);
    });
  }, []);

  return (
    <div
      style={{
        overflowY: "auto",
      }}
    >
      <Grid container pt={"1rem"}>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <PageTitle>Import History</PageTitle>
        </Grid>
        {url.indexOf("") === -1 ? (
          <Grid
            container
            style={{ paddingTop: "1rem", borderTop: "1px solid #ddd" }}
          >
            <Grid item xs={2}>
              <ReactSVG src="history.svg" style={{ color: "#000" }} />
            </Grid>
            <Grid item xs={10}>
              <Description style={{ fontWeight: "bold" }}>
                No testimonials imported yet.
              </Description>
              <Description style={{ fontSize: "1rem" }}>
                Pick a testimonial source from the sidebar to get started.
              </Description>
            </Grid>
          </Grid>
        ) : (
          <List
            dense
            sx={{
              width: "100%",
              background: "transparent",
            }}
          >
            {props.testimonials.map((row) => {
              if (row.url === "") {
                return (
                  <ListItem
                    key={row.id}
                    style={{
                      marginTop: "1rem",
                      borderTop: "1px solid #ddd",
                      width: "100%",
                    }}
                  >
                    <ListItemButton style={{ flexDirection: "column" }}>
                      <div
                        style={{
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <ListItemAvatar>
                            {row.data !== null ? (
                              <Avatar
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  border: "1px solid #ddd",
                                }}
                                alt={`Avatar n°${row + 1}`}
                                src={`data:image/png;base64,${btoa(
                                  String.fromCharCode(
                                    ...new Uint8Array(row.data.data)
                                  )
                                )}`}
                              />
                            ) : row.imageUrl !== null ? (
                              <Avatar
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  border: "1px solid #ddd",
                                  background: "#000",
                                  color: "#fff",
                                  fontSize: "0.8rem",
                                }}
                                alt={`Avatar n°${row + 1}`}
                              >
                                <img src={row.imageUrl} />
                              </Avatar>
                            ) : (
                              <Avatar
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  border: "1px solid #ddd",
                                  background: "#000",
                                  color: "#fff",
                                  fontSize: "0.8rem",
                                }}
                                alt={`Avatar n°${row + 1}`}
                              >
                                UN
                              </Avatar>
                            )}
                          </ListItemAvatar>
                          <ListItemText style={{ letterSpacing: "1px" }}>
                            <div
                              style={{ fontSize: "0.8rem", fontWeight: "500" }}
                            >
                              {row.value.split(",")[0]}
                            </div>
                            <div
                              style={{ fontSize: "0.8rem", fontWeight: "200" }}
                            >
                              {row.value.split(",")[1]}
                            </div>
                          </ListItemText>
                        </div>
                        <div>
                          {row.importDate !== null
                            ? row.importDate
                            : moment(row.updatedAt).format("ll")}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div>{row.content}</div>
                        <div>
                          <Rating value={row.rating} readOnly />
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                );
              }
            })}
          </List>
        )}
      </Grid>
    </div>
  );
};
