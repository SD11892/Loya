import React, { useEffect } from "react";
import {
  Grid,
  Modal,
  Fade,
  Box,
  Button,
  InputBase,
  IconButton,
} from "@mui/material";
import moment from "moment";
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
import { Plus as PlusIcon } from "../../icons/plus";
import { Close as CloseIcon } from "../../icons/close";
import MainButton from "../../components/uielements/buttons/mainButton";
import { search_getAll, createTag } from "../../actions/tag";
import { isEmpty } from "../../util/isEmpty";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CopyUrl } from "../../icons/copyUrl";
import { Edit } from "../../icons/edit";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
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

const Tags = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.payload);
  console.log("tagName", tags);
  const [checked, setChecked] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [tagName, setTagName] = React.useState("New Tag");
  const [text, setText] = React.useState("");

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTagName(text);
  }, [text]);
  useEffect(() => {
    dispatch(search_getAll());
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

  const handleCreate = () => {
    createTag(tagName)
      .then((res) => {
        dispatch(search_getAll()).then((result) => {
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

  // const handleDelete = () => {
  //   const deleteIds = [];
  //   checked.map((row) => deleteIds.push(row.id));
  //   deleteTag(deleteIds).then((res) => {
  //     dispatch(getAll());
  //   });
  //   setChecked([]);
  // };

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
          <PageTitle>Your Tags</PageTitle>
          <Description>Use tags to organize your testimonials.</Description>
        </Grid>
        <Grid item>
          {/* {isEmpty(checked) === true ? null : (
            <DeleteButton onClick={handleDelete}>
              <DeleteIcon fill="white" stroke="red" />
              <span style={{ marginLeft: "1rem" }}>Delete</span>
            </DeleteButton>
          )} */}

          <PlusButton onClick={handleOpen}>
            <PlusIcon fill="#923AFE" stroke="white" />
            Create New
          </PlusButton>
        </Grid>
      </Grid>
      <Grid item>
        {isEmpty(tags) ? (
          <div>No Tags</div>
        ) : (
          tags.map((value) => {
            return (
              <Grid>
                <Description key={value.id}>
                  {isEmpty(value.tag_name) ? "123" : value.tag_name}
                </Description>
                <Button>
                  <ModeEditIcon></ModeEditIcon>
                </Button>
              </Grid>
            );
          })
        )}
      </Grid>
      <div
        style={{
          width: "100%",
          lineHeight: "0.8rem",
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      ></div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ borderRadius: "2rem" }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PageTitle>Create a Tag</PageTitle>
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
              Use tags to organize your testimonials.
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
              ></div>
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
                value={text}
                placeholder="new tag"
              ></InputBase>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <MainButton
                onClick={handleCreate}
                style={{ width: "100%", marginLeft: "unset" }}
              >
                Create Tag
              </MainButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Tags;
