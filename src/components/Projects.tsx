// src/components/Projects.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const projectsData = [
  { title: 'Project 1', description: 'Description for Project 1' },
  { title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <Card key={index} variant="outlined">
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
