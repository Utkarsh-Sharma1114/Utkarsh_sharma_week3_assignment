import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function Form({ onAddActivity }) {
  //onAddActivity = function to call data on form submition
  // state variables for form inputs
  const [stepsCount, setStepsCount] = useState("");
  const [caloriesBurn, setCaloriesBurn] = useState("");
  const [workoutTiming, setWorkoutTiming] = useState("");

  // handle form submission
  const handleOnSubmit = (event) => {
    event.preventDefault(); //prevent from defult behaviour
    const newActivity = {
      date: new Date().toLocaleDateString(), // set current date
      //convert to an integer
      stepsCount: parseInt(stepsCount),
      caloriesBurn: parseInt(caloriesBurn),
      workoutTiming: parseInt(workoutTiming),
    };
    onAddActivity(newActivity); // pass new object to the component
    // reset input fields
    setStepsCount("");
    setCaloriesBurn("");
    setWorkoutTiming("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleOnSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Steps Taken"
        variant="outlined"
        type="number"
        value={stepsCount}
        onChange={(event) => setStepsCount(event.target.value)} // update state input changes
        required
      />
      <TextField
        label="Calories Burned"
        variant="outlined"
        type="number"
        value={caloriesBurn}
        onChange={(event) => setCaloriesBurn(event.target.value)}
        required
      />
      <TextField
        label="Workout Time (minutes)"
        variant="outlined"
        type="number"
        value={workoutTiming}
        onChange={(event) => setWorkoutTiming(event.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Activity
      </Button>
    </Box>
  );
}

export default Form;
