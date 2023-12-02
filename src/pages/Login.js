import React from 'react';
import Navbar from '../components/Navbar';
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
  } from '@mui/material';
  import { Link } from 'react-router-dom';

export default function Login(){
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <>
        <Navbar />
        <div style={{ padding: 30 }}>
        <Paper>
            <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            >
            <Grid item xs={12}>
                <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={'Keep me logged in'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label="Keep me logged in"
                />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth> 
                    <Link to='/home'>
                        Login
                    </Link>
                </Button>
            </Grid>
            </Grid>
        </Paper>
        </div>
        </>
    )
}