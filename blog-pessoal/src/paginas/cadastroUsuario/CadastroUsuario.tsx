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
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='txt2'>Faça seu cadastro!</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal'  type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal'   type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                    
                        <Button  type='submit' variant='contained' className='btCadastrar'>
                                    Cadastrar
                        </Button>
                        <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' className='btCancelar'>
                                    Cancelar
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

