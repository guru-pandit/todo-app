import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

function Todo(props) {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
