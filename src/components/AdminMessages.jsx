import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/admin/messages')
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h5">Contact Messages</Typography>
      {messages.map((msg, index) => (
        <Paper key={index} sx={{ p: 2, mt: 2 }}>
          <Typography><strong>Email:</strong> {msg.email}</Typography>
          <Typography><strong>Message:</strong> {msg.message}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default AdminMessages;
