import { Input, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import axios from 'axios'
import { api } from '../actions/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const SignUp=()=>{

    const [Email,setCreateEmail]=useState()
    const [Section,setCreateSection]=useState()
    const [Name,setCreateName]=useState()
    const [PhoneNumber,setCreatePhoneNumber]=useState()
    const [Branch,setCreateBranch]=useState()
    const [Password,setCreatePassword]=useState()
    
    
    const Signup = async () => {
        if (!Name || !Branch || !Section || !Email || !PhoneNumber || !Password) {
            alert("Please fill all the required fields.");
        }else{
    await axios.post(api + "/signup", { Name, Branch, Section, Email, PhoneNumber, Password })
            .then((res) => {
              console.log(res);
              
                if (res.data.error) {
                    alert(res.data.error); 
                } else {
                    alert("Register Successful");
                   
                }
            })
            .catch((e) => console.log(e));
    }
    
  }
    return (
        <>
        <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'whitesmoke', // Gradient background
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
            Name
          </FormLabel>
          <Input
            type='text'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreateName(e.target.value)}
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
            Branch
          </FormLabel>
          <Input
            type='text'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreateBranch(e.target.value)}
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
            Section
          </FormLabel>
          <Input
            type='text'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreateSection(e.target.value)}
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
            Email
          </FormLabel>
          <Input
            type='email'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreateEmail(e.target.value)}
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
            Phone Number
          </FormLabel>
          <Input
            type='tel'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreatePhoneNumber(e.target.value)}
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
            Password
          </FormLabel>
          <Input
            type='password'
            style={{
              borderColor: '#3182ce',
              padding: '10px',
            }}
            onChange={(e)=>setCreatePassword(e.target.value)}
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
            marginBottom:'20px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2b6cb0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
          onClick={Signup}
        >
          Sign Up
        </Button>
        <p style={{textAlign:'center' }}>Already have an account ? <Link to ={"/signin"} style={{color:'blue',backgroundColor:'lawngreen', padding:'8px 15px', borderRadius:'5px'}}>Signin</Link></p>
      </form>
    </div>
        </>
    )
}