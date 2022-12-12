import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import PlusButton from "../../../components/uielements/buttons/plusButton";
import PageTitle from "../../../components/uielements/pageTitle";
import Description from "../../../components/uielements/description";
import { Plus as PlusIcon } from "../../../icons/plus";
import { Delete as DeleteIcon } from "../../../icons/delete";
import DeleteButton from "../../../components/uielements/buttons/deleteButton";

const Widgets = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{
          width: "100%",
          lineHeight: "0.8rem",
          marginLeft: "2rem",
          alignItems: "center",
        }}
      >
        <Grid item>
          <PageTitle>Your Widgets</PageTitle>
          <Description>
            Embed testimonials on your website, without code.
          </Description>
        </Grid>
        <Grid item>
          <DeleteButton>
            <DeleteIcon />
            Delete
          </DeleteButton>
          <PlusButton
            onClick={() => {
              navigate("/widgets/0954e718-4c50-44ed-af17-92dda61edae3");
            }}
          >
            <PlusIcon style={{ background: "rgb(146,58,254)" }} />
            Create New
          </PlusButton>
        </Grid>
      </Grid>
      <div
        style={{
          width: "100%",
          lineHeight: "0.8rem",
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      >
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {[0].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem key={value} style={{ margin: "1rem" }}>
                <Checkbox
                  style={{
                    marginRight: "5px",
                    color: "#ddd",
                    borderRadius: "10px",
                  }}
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
                <ListItemButton style={{ height: "50px" }}>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        width: "15px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        height: "30px",
                        borderRadius: "20%",
                        border: "1px solid #ddd",
                      }}
                      alt={`Avatar n°${value + 1}`}
                      src={"./item.svg"}
                    />
                  </ListItemAvatar>
                  <ListItemText style={{ letterSpacing: "1px" }}>
                    <div style={{ fontSize: "1rem", fontWeight: "600" }}>
                      Loya Testimonial Form
                    </div>
                    <div>0 responses,created on Nov 28,2022</div>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Widgets;
