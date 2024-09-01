import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

function App() {
  // state to store activities
  const [activitiesData, setActivitiesData] = useState([]);

  // load activities from local storage on component mount
  useEffect(() => {
    // retrieve from local storage
    const storedActivityValue =
      JSON.parse(localStorage.getItem("activitiesData")) || [];
    setActivitiesData(storedActivityValue); // update state with stored activities
  }, []);

  // function to add new activity
  const addActivity = (activity) => {
    const updatedActivities = [...activitiesData, activity];
    setActivitiesData(updatedActivities);
    localStorage.setItem("activitiesData", JSON.stringify(updatedActivities));
  };

  // function to delete an activity by index
  const deleteActivity = (index) => {
    const updatedActivities = activitiesData.filter((_, i) => i !== index);
    setActivitiesData(updatedActivities);
    localStorage.setItem("activitiesData", JSON.stringify(updatedActivities));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fitness Challenge Tracker
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Form onAddActivity={addActivity} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Dashboard
            activitiesData={activitiesData}
            onDeleteActivity={deleteActivity}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
