import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //tem também o componente link mas não iremos utiliza-lo
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';


import Home from './paginas/home/Home';
  import './App.css';
  import Login from './paginas/login/Login';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <ListaTema />
          </Route>

          <Route path='/postagens'>
            <ListaPostagem />
          </Route>

          <Route exact path='/cadastroPostagem'>
            <CadastroPost/>
          </Route>

          <Route exact path='/cadastroPostagem/:id'>
           <CadastroPost/>
          </Route>

          <Route exact path='/cadastroTema'>
            <CadastroTema/>
          </Route>

          <Route exact path='/cadastroTema/:id'>
            <CadastroTema/>
          </Route>

          <Route exact path='/deletarPostagem'>
            <DeletarPostagem/>
          </Route>

          <Route exact path='/deletarPostagem/:id'>
            <DeletarPostagem/>
          </Route>

          <Route exact path='/deletarTema/:id'>
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
