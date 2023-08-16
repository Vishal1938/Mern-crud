import { useNavigate } from "react-router-dom"
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header=()=>{
    const navigate=useNavigate();

    const logout=async()=>navigate('/account')

    return(
        <Component>
            <Container>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Home</Link>
                <Link to='/account'>Home</Link>
            </Container>
        </Component>
        
    )
}

export default Header;