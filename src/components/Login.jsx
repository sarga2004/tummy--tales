import React, { useState } from 'react';
import {
  Box, Button, Checkbox, Divider, FormControl, FormControlLabel,
  Grid, Link as MuiLink, MenuItem, Paper, Select, TextField, Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    role: 'user'  // default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        alert('Login successful!');

        localStorage.setItem("user", JSON.stringify({
          email: data.email,
          username: data.username,
          role: data.role
        }));

        // Redirect based on role
        if (data.role === 'admin') {
          navigate('/admin');  // admin dashboard
        } else {
          navigate('/h');  // normal user homepage
        }
      } else {
        alert(data.message || 'Login failed.');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
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
        padding: 2,
      }}
    >
      <Paper elevation={6} sx={{ maxWidth: 400, width: '100%', p: 4, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: '"Playfair Display", serif', color: '#333' }}
          >
            Login
          </Typography>
          <Typography variant="body2">
            Explore delicious stories and flavors from every corner of the world.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Email Address"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
                  <EmailIcon sx={{ color: '#bbb', mr: 1 }} />
                </Box>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: <LockIcon sx={{ color: '#bbb', mr: 1 }} />
            }}
          />

          {/* ✅ Add role dropdown */}
          <FormControl fullWidth margin="normal">
            <Select
              name="role"
              value={loginData.role}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <MuiLink href="#" underline="hover">Forgot Password?</MuiLink>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#C2185B',
              '&:hover': { backgroundColor: '#ff85c1' }
            }}
          >
            LOGIN
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleSkip}
            sx={{
              mt: 1,
              borderColor: '#ff69b4',
              color: '#ff69b4',
              '&:hover': {
                backgroundColor: '#ffe4f1',
                borderColor: '#ff85c1',
              }
            }}
          >
            Skip Login
          </Button>
        </form>

        <Box display="flex" alignItems="center" my={2}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ mx: 2, color: '#999' }}>or</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Typography align="center" sx={{ mb: 1 }}>Sign in with</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <FacebookIcon sx={{ color: '#3b5998' }} />
          <GoogleIcon sx={{ color: '#db4437' }} />
          <TwitterIcon sx={{ color: '#1da1f2' }} />
        </Box>

        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Don't have an account?&nbsp;
            <MuiLink component={RouterLink} to="/s" underline="hover">
              Sign Up
            </MuiLink>
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoginPage;
