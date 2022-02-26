import React from "react";
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';
import { fontWeight } from "@mui/system";

 
function Navbar(){

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado!')
        history.push('/login')
    }
    return (
        <>
            <AppBar position="static" style={{backgroundImage: `url(https://www.nicepng.com/png/full/333-3332014_palmeiras-simbolos-sociedade-esportiva-palmeiras.png)`, margin: '0',
                backgroundRepeat: 'no-repeat', width: '100%', minHeight: '100%' ,backgroundPosition: 'right', padding: 20, backgroundColor: '#ffffff'}}>
                
                <Toolbar variant="dense"> 
                    <Box className='cursor'>
                        <Typography variant ="h5" style={{color: "#009432", fontWeight: 'bold'}}>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={3} className='cursor'>
                            <Typography variant ="h6" style={{color: "#009432", fontWeight: 'bold'}}>
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to= '/postagens' className='text-decorator-none'>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" style={{color: "#009432", fontWeight: 'bold'}}>
                            Postagens
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to= '/temas' className='text-decorator-none'>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" style={{color: "#009432", fontWeight: 'bold'}}>
                            Temas
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to ='/formularioTema' className='text-decorator-none'>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6"  style={{color: "#009432", fontWeight: 'bold'}}>
                            Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                   
                        <Box mx={2} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" style={{color: "#009432", fontWeight: 'bold'}}>
                            LogOut
                            </Typography>
                        </Box>
                    
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;