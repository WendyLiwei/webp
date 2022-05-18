import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Avatar,
  Button,
  Card
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { purple } from '@mui/material/colors';
const Login = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
};

    return (
        <div style={{ padding: 200 }}>
        <Grid align='center'>
        <Avatar sx={{ bgcolor: purple[200] } }><FavoriteBorderIcon /></Avatar></Grid>
            <h2>Sign in CSIE@CGU</h2>
            <Grid
              justify={'center'}
              alignItems={'center'}
              padding={'10px 20px'}
              height={'50px'}
            >    
            <Grid item xs={12}>
                <TextField fullWidth color="secondary" margin="normal" label="Email Address"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth color="secondary" margin="normal" label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        label={'Remember me'}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        defaultChecked color="secondary"
                    />
                }
                label="Remember me"
            />
            </Grid>
              <Grid item xs={12}>
              <Button color="secondary" onClick={()=>{window.alert('Success!');}} >Sign in</Button>
              </Grid>
            </Grid>

        </div>
      );
    };
    
 
export default Login;