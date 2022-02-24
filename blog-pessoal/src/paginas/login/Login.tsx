import React, { useState, useEffect, ChangeEvent }  from 'react';
import { Grid,Box, Typography, TextField, Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history = useHistory();
    const[token, setToken] = useLocalStorage('token');

    const[userLogin, setUserLogin] = useState<UserLogin>(
        //userLogin: Acessar a informação do State -- setUserLogin: Alterar a informação que está no state
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''    
        }
        )

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

   
    useEffect(()=>{
	    if (token != ''){
		history.push('/home')
         }
    }, [token])
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){ 

        e.preventDefault();
        try{
           await login('/usuarios/logar', userLogin, setToken)
            
            alert('Usuário logado!');
        }catch(error){
            alert('Dados inválidos! Verifique se os dados estão corretos, ou, crie seu cadastro!')

        }


    }

    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: "#ffffff", margin: '0'}}>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='txt1'>Entrar</Typography>
                        <TextField value= {userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value= {userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                    
                                <Button type='submit' variant='contained' style={{ borderColor: "green", backgroundColor: "green", color: "white" }}>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;


