import React from "react";
import {
  Grid,
  Modal,
  Fade,
  Box,
  Button,
  Backdrop,
  InputBase,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import PlusButton from "../../components/uielements/plusButton";
import PageTitle from "../../components/uielements/pageTitle";
import Description from "../../components/uielements/description";
import { Plus as PlusIcon } from "../../icons/plus";
import { Qmark } from "../../icons/qmark";
import { Close as CloseIcon } from "../../icons/close";
import { Delete as DeleteIcon } from "../../icons/delete";
import MainButton from "../../components/uielements/mainButton";
import DeleteButton from "../../components/uielements/deleteButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  pl: 4,
  pt: 0,
  pr: 4,
  pb: 4,
};

const Forms = () => {
  const [checked, setChecked] = React.useState([1]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <PageTitle>Your Forms</PageTitle>
          <Description>
            Use forms to collect testimonials from your users.
          </Description>
        </Grid>
        <Grid item>
          <DeleteButton>
            <DeleteIcon />
            Delete
          </DeleteButton>
          <PlusButton onClick={handleOpen}>
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
                      Senja Testimonial Form
                    </div>
                    <div>0 responses,created on Nov 28,2022</div>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ borderRadius: "2rem" }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PageTitle>Create a form</PageTitle>
            <Button
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#444",
              }}
            >
              <CloseIcon />
            </Button>
            <Description style={{ fontSize: "1rem" }}>
              You can create different forms to collect different testimonial
              types.
            </Description>
            <div style={{ marginTop: "2rem" }}>
              <div
                style={{
                  marginBottom: "0.5rem",
                  alignItems: "center",
                  display: "flex",
                  gap: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Form Name <Qmark />
              </div>
              <InputBase
                defaultValue="New Form"
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                }}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <MainButton style={{ width: "100%", marginLeft: "unset" }}>
                Create form
              </MainButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Forms;
