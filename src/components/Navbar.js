import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button color='inherit'>
            <Link to='/home'>
                Home
            </Link>
        </Button>
        <Button color='inherit'>
            <Link to='/fund'>
                Funds
            </Link>
        </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            One stop shop for mutual funds
          </Typography>
            <Button color="inherit">
                <Link to='/login'>
                    Login
                </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}