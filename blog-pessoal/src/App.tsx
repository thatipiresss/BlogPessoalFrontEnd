import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //tem também o componente link mas não iremos utiliza-lo
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listaPostagens/ListaPostagens';
import ListaTema from './components/temas/listaTemas/ListaTemas';


import Home from './paginas/home/Home';
  import './App.css';
  import Login from './paginas/login/Login';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTemas from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';


function App() {
  return (
  <Provider store={store}>
    <ToastContainer/>
    <Router>
    <Navbar />
      <Switch>
        <div style = {{minHeight: '100vh'}}>

          <Route  exact path='/'>
            <Login />
          </Route>

          <Route  path='/login'>
            <Login />
          </Route>

          <Route  path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/temas'>
            <ListaTemas />
          </Route>

          <Route path='/postagens'>
            <ListaPostagens />
          </Route>

          <Route exact path='/formularioPostagens'>
            <CadastroPost/>
          </Route>

          <Route exact path='/formularioPostagens/:id'>
           <CadastroPost/>
          </Route>

          <Route exact path='/formularioTemas'>
            <CadastroTemas/>
          </Route>

          <Route exact path='/formularioTemas/:id'>
            <CadastroTemas/>
          </Route>

          <Route exact path='/deletarPostagem/:id'>
            <DeletarPostagem/>
          </Route>

          <Route exact path='/deletarTema'>
            <DeletarTema/>
          </Route>

          <Route exact path='/deletarTemas/:id'>
            <DeletarTema/>
          </Route>

         </div>
      </Switch>
    <Footer />
  </Router>
  </Provider>
);
}

export default App;
