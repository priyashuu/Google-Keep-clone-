import React from "react";
import "../styles/styles.css";
import notes from "./notes";

function Note(props) {
  return (
    <div>
      {notes.map(notes => {
        return (
          <div className="note">
            <h1>{notes.title}</h1>
            <p>{notes.content} </p>
          </div>
        );
      })}
    </div>
  );
}
export default Note;
