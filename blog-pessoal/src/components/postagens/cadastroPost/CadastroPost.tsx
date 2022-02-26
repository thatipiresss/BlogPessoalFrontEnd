import React from 'react';
import {Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText} from '@material-ui/core';
import './CadastroPost.css';

function CadastroPost(){

    return(
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'> Form</Typography>
                <TextField value='' id='titulo' label='titulo' variant='outlined' name='titulo'></TextField>
                <TextField value='' id='texto' label='texto' variant='outlined' name='texto'></TextField>
                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                    <Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper'>
                        <MenuItem value=''>Descrição Postagem</MenuItem>
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type='submit' variant='contained' color='primary'>
                        Finalizar                       
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost;