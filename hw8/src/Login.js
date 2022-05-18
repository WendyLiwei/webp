import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
const Login = () => {
    return (
        <div className="login">
            <h2>CGU Login</h2>
        <TextField label="username" required></TextField>
        <br/>
         <TextField label="password" type="password" required></TextField>
        <br/>
        <Button variant="contained" color="secondary" onClick={()=>{window.alert('Success!');}} >Log in</Button>
        </div>
    );
}
 
export default Login;