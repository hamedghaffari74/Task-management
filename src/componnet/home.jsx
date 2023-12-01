import { Box, Button, Typography, Modal, TextField, span } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, setDone } from "../Store/Slice/taskSlice";
import { useTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const Home = () => {
  const [newTask, setNewTask] = useState(null);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.task?.listTask);

  const theme = useTheme();
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTasks = () => {
    dispatch(addTask({ title: newTask, id: null, done: null }));
  };

  const handleDelete = (task) => {
    dispatch(deleteTask(task));
  };
  const handleCheckBox = (e,task) => {
     dispatch(setDone({task, checked: e.target.checked}));
  };
  return (
    <div className=" min-h-[70vh] ">
      <Box
        sx={{
          minHeight: "20rem",
          width: "23rem",
          margin: " 10rem auto ",
          bgcolor: "#ffebee",
          alignItems: "center",
          padding: ".7rem",
        }}
      >
        <span>please enter a task</span>
        <TextField
          sx={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            paddingBottom: 0,
            marginTop: 1,
            fontWeight: 500,
          }}
          required
          id="outlined-required"
          label="Required"
          defaultValue={newTask}
          onChange={handleChange}
        />
        <Button
          sx={{
            display: "flex",
            marginTop: ".5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="contained"
          onClick={addTasks}
        >
          Add Task
        </Button>
        {todoList?.map((task, index) => (
          <Box
            key={task.id}
            sx={{
              // bgcolor: "theme.palette.blue.main",
              color: "text.secondary",
              border: 3,
              borderRadius: 2,
              px: 2,
              fontWeight: "fontWeightBold",
              zIndex: "tooltip",
              boxShadow: 6,
              my: 2,
              height: 45,
              display: "flex",
            }}
          >
            <DeleteIcon
              sx={{ marginTop: ".35rem", marginLeft: -1 }}
              onClick={() => handleDelete(task)}
            />

            <Typography
              fontFamily={theme.typography.fontFamily.Arial}
              sx={{ marginTop: ".4rem", fontSize: "1rem", fontStyle: "Bold" }}
            >
              {index+1 + "." + task.title}
            </Typography>
            <Checkbox
              onClick={(e) => handleCheckBox(e,task)}
              sx={{ marginLeft: "auto" }}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Home;
