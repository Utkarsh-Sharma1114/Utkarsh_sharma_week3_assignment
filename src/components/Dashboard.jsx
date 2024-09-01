import React from "react";
import {
  Paper, // mui component for creating a paper-like container with elevation
  Typography, // mui component for text styling
  List, // mui component for displaying a list of items
  ListItem, // mui component for individual items in a list
  ListItemText, // mui component for displaying text within a ListItem
  IconButton, // mui component for clickable icons
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// ActivityDashboard component displays a list of activities with an option to delete each item.
function Dashboard({ activitiesData, onDeleteActivity }) {
  // activities = Array of activity objects to display  and onDeleteActivity = function to call when activity deleted
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Activity Log
      </Typography>
      <List>
        {activitiesData.map((activity, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDeleteActivity(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`Date: ${activity.date}`}
              secondary={`Steps: ${activity.stepsCount}, Calories: ${activity.caloriesBurn}, Workout Time: ${activity.workoutTiming} mins`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Dashboard;
