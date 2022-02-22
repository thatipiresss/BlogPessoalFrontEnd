import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Compartilhe sua pequena conquista diária!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Postagens</Button>
                    </Box>
                </Grid>
                <Grid xs={6} style={{backgroundImage: `url(https://i2.wp.com/multarte.com.br/wp-content/uploads/2020/09/logomarca-palmeiras3.jpg?resize=600%2C600&ssl=1)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#f1f2f6", margin: '0'}}></Grid>
                
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;