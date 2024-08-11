import { Input, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'
import { api } from '../actions/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ChangePassword = () => {

    const [Email, setEmail] = useState();
    const [NewPassword, setNewPassword] = useState();
    const [CnfPassword, setCnfPassword] = useState();

    const Changepassword = async () => {
        await axios.post(api + "/changepassword", { Email, NewPassword, CnfPassword })
            .then((res) => {
                if (res.data.message) {
                    alert("Password changed successfully");
                } else {
                    alert("Try again");
                }
            })
            .catch((e) => console.log(e));
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'whitesmoke'
            }}
        >
            <form
                style={{
                    width: '30%',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <FormControl
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <FormLabel
                        style={{
                            color: '#2d3748',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                        }}
                    >
                        Email
                    </FormLabel>
                    <Input
                        type='email'
                        style={{
                            borderColor: '#3182ce',
                            padding: '10px',
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <FormLabel
                        style={{
                            color: '#2d3748',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                        }}
                    >
                        New Password
                    </FormLabel>
                    <Input
                        type='password'
                        style={{
                            borderColor: '#3182ce',
                            padding: '10px',
                        }}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </FormControl>

                <FormControl
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <FormLabel
                        style={{
                            color: '#2d3748',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                        }}
                    >
                        Confirm Password
                    </FormLabel>
                    <Input
                        type='password'
                        style={{
                            borderColor: '#3182ce',
                            padding: '10px',
                        }}
                        onChange={(e) => setCnfPassword(e.target.value)}
                    />
                </FormControl>

                <Button
                    type="submit"
                    style={{
                        width: '100%',
                        backgroundColor: '#3182ce',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '1em',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'background-color 0.3s ease',
                        marginBottom: '20px',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2b6cb0'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
                    onClick={Changepassword}
                >
                    Change Password
                </Button>
            </form>
        </div>
    );
};
