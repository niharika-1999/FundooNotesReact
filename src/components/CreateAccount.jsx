import React from 'react';
import '../css/style.css'
import { Typography, TextField, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export class CreateAccount extends React.Component {
    render() {
        return (
            <div className="outerBox">
                <div className="outerPadding">
                    <div>
                        <span className="fundooNotesRainbow">fundooNotes</span>
                    </div>
                    <div className="createAccountDiv">
                        <span className="createAccount">Create your fundooNotes Account</span>
                    </div>
                    <form>
                        <div className="inputBox">
                            <div className="firstAndLast">
                                <div className="firstName">
                                    <TextField
                                        required
                                        className="firstNameBox"
                                        label="First name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div className="lastName">
                                    <TextField
                                        required
                                        className="lastNameBox"
                                        label="Last name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div className="emailId">
                                <TextField
                                    required
                                    className="emailIdBox"
                                    fullWidth
                                    label="Email Id"
                                    size="small"
                                />
                            </div>
                            <div className="password">
                                <div className="firstPassword">
                                    <TextField
                                        type="password"
                                        required
                                        className="firstPasswordBox"
                                        label="Password"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                                <div className="confirmPassword">
                                    <TextField
                                        type="password"
                                        required
                                        className="confirmPasswordBox"
                                        label="ConfirmPassword"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div className="showPasswordMsg">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary" 
                                        />
                                    }
                                    label={
                                        <Typography style={{ fontSize: "14px" }}>
                                            Show password
                                        </Typography>
                                    }
                                />
                                <div className="signUp">
                                    <Button variant="contained">Sign Up</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}