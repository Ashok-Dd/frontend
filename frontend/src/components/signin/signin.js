import { Input, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'
import { api } from '../actions/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangePassword } from '../change password/changepassword';

export const SignIN = () => {


const [Email,setEmail]=useState()
const [Password,setPassword]=useState()


const Signin=async()=>{
    await axios.post(api+"/signin",{Email,Password})
        .then((res)=>{
            if(res.data.message){
              sessionStorage.auth=JSON.stringify(res?.data?.values)
                alert("login sucessfully")
            } else {
                alert("user not found")
                
                window.location.href="/signup"
            }
        })
        .catch((e)=>console.log(e))
    }
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'whitesmoke', 
  }}
>
  <form
    style={{
      width: '30%',
      backgroundColor: 'white',
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
            Email address
          </FormLabel>
          <Input
             type='email'
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            _hover={{ borderColor: '#63b3ed' }}
            _focus={{
              borderColor: '#3182ce',
              boxShadow: '0 0 0 2px rgba(49, 130, 206, 0.5)',
            }}
          />
          <FormHelperText
            style={{
              color: '#718096',
              fontSize: '0.9em',
            }}
          >
            We'll never share your email.
          </FormHelperText>
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
            Password
          </FormLabel>
          <Input
            type='password'
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            _hover={{ borderColor: '#63b3ed' }}
            _focus={{
              borderColor: '#3182ce',
              boxShadow: '0 0 0 2px rgba(49, 130, 206, 0.5)',
            }}
          />
          <Link to = {'/changepassword'}>Forgot password?</Link>
          <FormHelperText
            style={{
              color: '#718096',
              fontSize: '0.9em',
            }}
          >
            Make sure your password is strong.
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          onClick={Signin}
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
            marginBottom:'20px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2b6cb0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
        >
          Sign In
        </Button>
        <p style={{textAlign:'center' }}>Don't have an account ? <Link to ={"/signup"} style={{color:'blue',backgroundColor:'lawngreen', padding:'8px 15px', borderRadius:'5px'}}>Signup</Link></p>
      </form>
    </div>
  );
};


 

