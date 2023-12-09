import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Fab } from "@mui/material";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let date=new Date().toLocaleDateString('en-US',options)

function Note(props) {
  return (
    <div className="note">
      <p>{date}</p>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab
        onClick={function () {
          props.deleteNote(props.id);
        }}
      >
        <DeleteIcon />
      </Fab>
      <Fab
        onClick={function () {
          props.editContent(props.id,props.title,props.content);
        }}
      >
        <EditIcon />
      </Fab>
    </div>
  );
}

export default Note;
