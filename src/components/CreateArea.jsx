import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import EditIcon from "@mui/icons-material/Edit";
import WarningIcon from "@mui/icons-material/Warning";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function handleClick() {
    setIsExpanded(true);
  }

  function addToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={function (event) {
              props.handleChange(event);
            }}
            name="title"
            placeholder="Title"
            value={props.note.title}
          />
        )}
        <textarea
          onClick={handleClick}
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={props.note.content}
        />
        {props.isEdited ? (
          <Fab
            onClick={(event) => {
              if (props.notes.length === 0) {
                props.setIsEdited(false);
              } else {
                console.log(props.notes);
                console.log(props.note);
                props.setNotes((prevNotes) => {
                  // console.log(prevNotes)
                  prevNotes[props.editId].content = props.note.content;
                  prevNotes[props.editId].title = props.note.title;
                  return prevNotes;
                });
                props.setIsEdited(false);
              }
              props.setNote(() => {
                return { title: "", content: "" };
              });
            }}
          >
            <EditIcon />
          </Fab>
        ) : (
          isExpanded && (
            <Zoom in={true}>
              <Fab
                onMouseEnter={
                  (event)=>{
                    if (props.note.title==='' && props.note.content==='') {
                    addToast();
                    }
                  }
                }
                onClick={(event) => {
                  if (props.note.title==='' && props.note.content==='') {
                    addToast();
                  } else {
                    props.addNote();
                  }
                  event.preventDefault();
                }}
              >
                <AddIcon />
              </Fab>
            </Zoom>
          )
        )}
        <div id="snackbar">
          <WarningIcon />
          <p>Please do not leave empty</p>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
