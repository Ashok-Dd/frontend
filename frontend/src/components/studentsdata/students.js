// import axios from "axios"
// import { api } from "../actions/api"
// import { useEffect, useState } from "react"
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
// } from '@chakra-ui/react'
// import { Profile } from "../profile/profile"

// export const StudentData = () => {
//     const [data, setData] = useState([])

//     const featchData = async () => {
//         await axios.post(api + "/students")
//             .then((res) => {
//                 setData(res?.data)
//             })
//             .catch((e) => console.log(e))
//     }

//     useEffect(() => {
//         featchData()
//     }, [])

//     return (
//         <>
//             <Profile />
//             <br/>
//             <br/>
//             <TableContainer>
//                 <Table variant='striped' colorScheme='teal'>
//                     <TableCaption>Bootcamp students data</TableCaption>
//                     <Thead>
//                         <Tr>
//                             <Th>Gmail</Th>
//                             <Th>Register</Th>
//                             <Th>Mobile</Th>
//                             <Th>Password</Th>
//                         </Tr>
//                     </Thead>
//                     <Tbody>
//                         {
//                             data?.map((val) => (
//                                 <Tr>
//                                     <Td>{val.Gmail}</Td>
//                                     <Td>{val.Registerno}</Td>
//                                     <Td>{val.Phone}</Td>
//                                     <Td>{val.Password}</Td>
//                                 </Tr>
//                             ))
//                         }
//                     </Tbody>
//                 </Table>
//             </TableContainer>
//         </>
//     )
// }


import {
    Table,
    Thead,
    Tbody,
    // Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { api } from '../actions/api'; 
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Profile } from '../profile/profile';

export const StudentData=()=>{
    const[data,setData]=useState([])
    const fetchData = async()=>{
        await axios.post(api+"/students")
        .then((res)=>{
          setData(res?.data)
        })
        .catch((e)=>console.log(e))
      }
      useEffect(()=>{
        fetchData()
       },[])
const delete1=()=>{

}
    return (
        <>
        <Profile />
            <br />
            
            
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>customers Data</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Password</Th>
        <Th>Branch</Th>
        <Th>Phone Number</Th>
        {/* <Th>Click to delete</Th> */}
      </Tr>
    </Thead>
    <Tbody>
      {
        data?.map((val)=>(
      <Tr>
        <Td>{val.Name}</Td>
        <Td>{val.Email}</Td>
        <Td>{val.Password}</Td>
        <Td>{val.Branch}</Td>
        <Td>{val.PhoneNumber}</Td>
        {/* <Td><button>Delete</button></Td> */}
      </Tr>
        ))
      }
      </Tbody>
  </Table>
</TableContainer>
</>
    )
}