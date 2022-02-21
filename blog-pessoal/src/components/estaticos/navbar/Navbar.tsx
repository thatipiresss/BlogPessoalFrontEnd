import React from "react";
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";

function Navbar(){
    return (
        <>
            <AppBar position="static" className= "bckg">
                <Toolbar variant="dense"> 
                    <Box style={{ cursor: "pointer"}}>
                        <Typography variant ="h5" color= "inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{cursor: "pointer"}}>
                        <Typography variant ="h6" color= "inherit">
                            Home
                        </Typography>
                        </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                        </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Cadastrar tema
                        </Typography>
                        </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
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