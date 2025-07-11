import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link as MuiLink,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData({
      ...signupData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📦 Form submitted:", signupData);

  // Validation
  if (signupData.password !== signupData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!signupData.terms) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  const userToSend = {
    username: signupData.name,
    email: signupData.email,
    password: signupData.password
  };

  console.log("📤 Sending to backend:", userToSend);

  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToSend)
    });

    console.log("📥 Response status:", response.status);

    const data = await response.json();
    console.log("📥 Response data:", data);

    if (response.ok) {
      alert('Signup successful! Please log in.');
      navigate('/');
    } else {
      alert(data.message || 'Signup failed.');
    }

  } catch (error) {
    console.error('❌ Signup error:', error);
    alert('An error occurred during signup.');
  }
};

  const handleSkip = () => {
    navigate('/h');
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/bg9.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 420,
          width: '100%',
          p: 4,
          borderRadius: 3,
          backgroundColor: 'rgba(255,255,255,0.95)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 2 }}
        >
          Join thousands of food lovers and explore recipes made with love!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Full Name"
            name="name"
            value={signupData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Email Address"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Password"
            name="password"
            type="password"
            value={signupData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={signupData.confirmPassword}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={signupData.terms}
                onChange={handleChange}
                name="terms"
                sx={{
                  transform: 'scale(0.9)',
                  padding: '4px',
                }}
              />
            }
            label="I agree to the Terms & Conditions"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.85rem' }, mt: 1 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#C2185B',
              '&:hover': {
                backgroundColor: '#D81B60',
              }
            }}
          >
            SIGN UP
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleSkip}
            sx={{
              mt: 1.5,
              borderColor: '#C2185B',
              color: '#C2185B',
              '&:hover': {
                backgroundColor: '#ffe4f1',
                borderColor: '#D81B60',
              }
            }}
          >
            Skip Signup
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <MuiLink
              component={RouterLink}
              to="/"
              underline="hover"
            >
              Log In
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupPage;