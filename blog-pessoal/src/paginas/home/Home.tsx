import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { useHistory } from 'react-router';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
    );

    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Compartilhe sua pequena conquista diária!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={2}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Postagens</Button>
                    </Box>
                </Grid>
                <Grid xs={6} className= 'imagem2'></Grid>
                
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;