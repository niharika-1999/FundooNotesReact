import React from 'react';
import '../css/style.css'
import createAccounts from "../assets/createAccounts.png"
import {firstNameValidation,lastNameValidation, emailValidation, passwordValidation} from "./formValidation";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import userPost from "../service/registrationAPI";

export default function Registration() {  

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const [firstNameNotValid, setFirstNameNotValid] = React.useState(false);
    const [lastNameNotValid, setLastNameNotValid] = React.useState(false);
    const [emailNotValid, setEmailNotValid] = React.useState(false);
    const [passwordNotValid, setPasswordNotValid] = React.useState(false);
    const [passwordConfirmationNotValid, setPasswordConfirmationNotValid] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = React.useState(false);
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstNameNotValid(false);
        setLastNameNotValid(false);
        setEmailNotValid(false);
        setPasswordNotValid(false);
        setPasswordConfirmationNotValid(false);
        if (!firstNameValidation.test(firstName)) setFirstNameNotValid(true);
        if (!lastNameValidation.test(lastName)) setLastNameNotValid(true);
        if (!emailValidation.test(email)) setEmailNotValid(true);
        if (!passwordValidation.test(password)) setPasswordNotValid(true);
        if (password === passwordConfirmation) {
            setPasswordConfirmationNotValid(true);
        }
        userPost("users",{
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          });
      };
    const handleClickShowPasswordConfirmation = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation)
    };
    const handleClickShowPasswords = () => {
            setShowPassword(!showPassword);
            setShowPasswordConfirmation(!showPasswordConfirmation);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const headerStyle = { margin: 0 };
    return (
        <div className="imgBox" >
            <div className="outerBox">
                <div className="outerPadding"></div>
                <div>
                    <div>
                        <Grid align='left' className="headingAndSubHeading">
                            <h1 class="rainbow" style={headerStyle}>
                                <span>F</span>
                                <span>u</span>
                                <span>n</span>
                                <span>d</span>
                                <span>o</span>
                                <span>o</span>
                                <span>N</span>
                                <span>o</span>
                                <span>t</span>
                                <span>e</span>
                                <span>s</span>
                            </h1>
                            <br />
                            <Typography variant='h6' gutterBottom><b>Create your FundooNotes Account</b></Typography>
                        </Grid>
                        <form id="form" name="form">
                            <div className="innerImg">
                                <div className="inputBox">
                                    <br />
                                    <div className="names" align="left">
                                        <div className="firstName">
                                            <TextField
                                                required
                                                variant="outlined"
                                                name="firstName"
                                                color='primary'
                                                type='text'
                                                label='First Name'
                                                placeholder="Enter your first name"
                                                size="small"
                                                error={firstNameNotValid}
                                                helperText={firstNameNotValid ? "Invalid First Name" : ""}
                                                onChange={(event) => setFirstName(event.target.value)}
                                            />
                                        </div>
                                        <div className="lastName">
                                            <TextField
                                                required
                                                variant="outlined"
                                                name="lastName"
                                                color='primary'
                                                type='text'
                                                label='Last Name'
                                                placeholder="Enter your last name"
                                                size="small"
                                                error={lastNameNotValid}
                                                helperText={lastNameNotValid ? "Invalid Last Name" : ""}
                                                onChange={(event) => setLastName(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="email" align="left">
                                        <TextField
                                            required
                                            fullWidth
                                            id="full-width-text-field"
                                            variant="outlined"
                                            name="email"
                                            color='primary'
                                            type='email'
                                            label='Email'
                                            placeholder="abc.123@example.com"
                                            autoComplete="email"
                                            size="small"
                                            error={emailNotValid}
                                            helperText={emailNotValid ? "Invalid Email" : "Your mail should consist of letters, numbers and periods"}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <div className="passwords" align="left">
                                        <div className="pass">
                                            <FormControl sx={{ width: '25ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    size="small"
                                                    error={passwordNotValid}
                                                    helperText={ passwordNotValid ? "Invalid password" : "Use 8 or more characters which consist of letters, numbers & symbols"}
                                                    onChange={(event) => setPassword(event.target.value)}
                                                    endAdornment={
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                                size="small"
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                    required
                                                    fullwidth
                                                    name="passwordConfirmation"
                                                    color='primary'
                                                    placeholder="Enter your password"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="confirmPassword">
                                            <FormControl sx={{ width: '25ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={showPasswordConfirmation ? 'text' : 'password'}
                                                    size="small"
                                                    error={passwordConfirmationNotValid}
                                                    helperText={passwordConfirmationNotValid ? "Password does not match" : ""}
                                                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                size="small"
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPasswordConfirmation}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Confirm Password"
                                                    required
                                                    fullwidth
                                                    name="passwordConfirmation"
                                                    color='primary'
                                                    placeholder="Confirm your password"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <span>
                                            Use 8 or more characters which consist of letters, numbers & symbols
                                        </span>
                                    </div>
                                    <br />
                                    <div className="showPassword">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="allowExtraEmails"
                                                    color="primary"
                                                    onClick={handleClickShowPasswords}
                                                    onMouseDown={handleMouseDownPassword}
                                                />
                                            }
                                            label={<span style={{ fontSize: '0.75rem' }}>Show Passwords</span>}
                                        />
                                    </div>
                                    <div className="signInSignUp">
                                        <div className="signIn">
                                            <Button variant="text" id="sign-in-button" component={Link} to="/login" style={{ textTransform: 'none' }} color='primary'><b>Sign in instead</b></Button>
                                        </div>
                                        <div className="create">
                                            <Button type='submit' variant='contained' color='primary' onClick={handleSubmit} ><b>Sign Up</b></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={createAccounts}
                                     width={260} 
                                     height={244} 
                                     style={{ verticalAlign: 'middle' }} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 
