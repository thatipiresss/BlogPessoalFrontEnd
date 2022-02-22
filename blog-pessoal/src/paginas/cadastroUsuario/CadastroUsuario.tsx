import React from 'react';
import './CadastroUsuario.css';
import Container from '@mui/material/Container';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import {Link } from 'react-router-dom';

function CadastroUsuario(){
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className= 'caixa'>
           
            <Grid item xs={6}>
                <Box margin={5}>
                <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='txt1'>Faça seu cadastro!</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal'  type='password' fullWidth />
                        <TextField id='senha' label='confirmar senha' variant='outlined' name='confirmar senha' margin='normal'   type='password' fullWidth />
                        <Box marginTop={2} textAlign='left'>
                            <Link to='/home' className='text-decorator-none'>
                            
                                <Button type='submit' variant='contained' style={{ borderColor: "green", backgroundColor: "green", color: "white" }}>
                                    Cadastre-se
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
                
            </Grid>
            <Grid item xs={6} className='imagem2'></Grid>

        </Grid>
    );
}

export default CadastroUsuario;

