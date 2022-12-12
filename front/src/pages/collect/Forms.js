import React, { useEffect } from "react";
import {
  Grid,
  Modal,
  Fade,
  Box,
  Button,
  Backdrop,
  InputBase,
  IconButton,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "../../components/uielements/buttons/listItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import PlusButton from "../../components/uielements/buttons/plusButton";
import PageTitle from "../../components/uielements/pageTitle";
import Description from "../../components/uielements/description";
import IconContainer from "../../components/uielements/iconContainer";
import { Plus as PlusIcon } from "../../icons/plus";
import { Qmark } from "../../icons/qmark";
import { Close as CloseIcon } from "../../icons/close";
import { Delete as DeleteIcon } from "../../icons/delete";
import MainButton from "../../components/uielements/buttons/mainButton";
import DeleteButton from "../../components/uielements/buttons/deleteButton";
import { getAll, createForm, deleteForm } from "../../actions/form";
import { isEmpty } from "../../util/isEmpty";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CopyUrl } from "../../icons/copyUrl";
import { Edit } from "../../icons/edit";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

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
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.payload);
  // const forms = [1, 2, 3, 4];
  const [checked, setChecked] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [formName, setFormName] = React.useState("New Form");
  const [text, setText] = React.useState("New Form");

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreate = () => {
    createForm(formName)
      .then((res) => {
        dispatch(getAll()).then((res) => {
          console.log(res);
          handleClose();
        });
        return {
          CODE: 200,
          message: "success",
          data: res,
        };
      })
      .catch((err) => {
        console.log("createErr=", err);
      });
  };
  useEffect(() => {
    setFormName(text);
  }, [text]);
  useEffect(() => {
    console.log("here");
    dispatch(getAll());
  }, []);

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

  const handleDelete = () => {
    const deleteIds = [];
    checked.map((row) => deleteIds.push(row.id));
    deleteForm(deleteIds).then((res) => {
      dispatch(getAll());
    });
    setChecked([]);
  };

  const copyContent = async (info) => {
    let text = window.location.href + `/p/${info.projectId}/r/${info.formUrl}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
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
          {isEmpty(checked) === true ? null : (
            <DeleteButton onClick={handleDelete}>
              <DeleteIcon />
              <span style={{ marginLeft: "1rem" }}>Delete</span>
            </DeleteButton>
          )}

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
        {isEmpty(forms) ? (
          <div>No Forms Created Here</div>
        ) : (
          <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
            {forms.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;

              return (
                <ListItem key={value.formId} style={{ marginTop: "1rem" }}>
                  <ListItemButton
                    onClick={(e) => {
                      console.log(e);
                      if (isEmpty(e.target.id)) {
                        navigate(`/forms/${value.formUrl}`);
                      }
                    }}
                  >
                    <Checkbox
                      id={`check[${value.id}]`}
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
                        {value.formName}
                      </div>
                      <div>
                        {value.response} responses,created on {value.crearedAt}
                      </div>
                    </ListItemText>
                    <IconContainer>
                      <IconButton
                        id={`url[${value.id}]`}
                        onClick={(eve) => {
                          eve.stopPropagation();
                          copyContent(value);
                        }}
                      >
                        <CopyUrl />
                      </IconButton>
                    </IconContainer>
                    <IconContainer>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </IconContainer>
                    <IconContainer>
                      <IconButton
                        onClick={(ev) => {
                          ev.stopPropagation();
                          createForm(value.formName + " copy").then((res) => {
                            dispatch(getAll());
                          });
                        }}
                      >
                        <FileCopyOutlinedIcon />
                      </IconButton>
                    </IconContainer>
                    <IconContainer>
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          let id = [];
                          id.push(value.id);
                          deleteForm(id).then(() => {
                            dispatch(getAll());
                          });
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </IconContainer>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
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
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                }}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              >
                {text}
              </InputBase>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <MainButton
                onClick={handleCreate}
                style={{ width: "100%", marginLeft: "unset" }}
              >
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
