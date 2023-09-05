import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Note = ({ note }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <p>{Note.text}</p>
      </CardContent>
    </Card>
  );
};

export default Note;
