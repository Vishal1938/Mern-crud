import {Box,TextField,Button,styled, Typography, useScrollTrigger} from '@mui/material'
import { useEffect, useState,useContext} from 'react';

import { API } from '../service/api';
import {DataContext} from '../../context/DataProvider'

import {useNavigate} from 'react-router-dom'

const Component=styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image=styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const wrapper=styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;}

`;

const Text=styled(Typography)`
     color: #878787;
     font-size:12px;
`;

const LoginButton=styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`;

const SignupButton=styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const loginInitialValues={
    username:'',
    password:''
};

const signupInitialValues={
    name:'',
    username:'',
    password:'',
};



const Login=()=>{

    const [login,setLogin]=useState(loginInitialValues);
    const [signup,setSignup]=useState(signupInitialValues);
    const [account,toggleAccount]=useState('login');
    const [error,showError]=useState('');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    
    const imageURL=''; 

    useEffect(()=>{
        showError(false);
    },[login])

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const toggleSignup=()=>{
        account==='signup'? toggleAccount('login'):toggleAccount('signup');
    }

    const loginUser=async ({isUserAuthenticated})=>{
        let response=await API.userLogin(login);
        if(response.isSuccess){
            showError('');

            sessionStorage.setItem('accessToken',`Bearer${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
            setAccount({name:response.data.name,username:response.data.username});
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        }else{
            showError('Something went Wrong! please try again later');
        }
    }

    const signUser=async ()=>{
        let response=await API.userSignup(signup);
        if(response.isSuccess){
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        }else{
            showError('Something went wrong!please try again');
        }
    }
    return (
        <Component>
            <Box>
               <Image src={imageURL} alt="blog"/>
               {
                 account==='login'?
              <wrapper>
            <TextField variant='standard' value={login.username} onChange={(e)=>onValueChange(e)} name='username' label='Enter Username'/>
            <TextField variant='standard' value={login.password} onChange={(e)=>onValueChange(e)} name='psssword' label='Enter Password'/>
           
            <LoginButton variant='contained' onClick={()=>loginUser()}> Login</LoginButton>
            <Text style={{ textAlign :'center'}}>OR</Text>
            <SignupButton onClick={()=>toggleSignup()} style={{marginBottom :50 }}>Create an account</SignupButton>
            </wrapper>:
             <wrapper>
             <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='name' label='Enter Name '/>
             <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label='Enter Username '/>
             <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='password' label='Enter Password '/>
 
             <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
             <Text style={{ textAlign :'center'}}>OR</Text>
            <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an account</LoginButton>
             </wrapper>
           }
            </Box>
        </Component>

    )

}

export default Login;