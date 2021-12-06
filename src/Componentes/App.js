/*---------------------------------------------------------------------------*/
/*estilos*/
import './App.css';
/*---------------------------------------------------------------------------*/
/*dependencias de los componentes*/
import React, {Component} from 'react';
import axios from 'axios';
import PersonaList from './Juego/PersonaList';
import PersonaDetail from './Juego/PersonaDetail';
import PersonaForm from './Juego/PersonaFrom';
/*---------------------------------------------------------------------------*/
/*Refactorar*/
class App extends Component {

  constructor(props){
    super(props);
  /*Los componentes que se van a trabajar*/
    this.state ={
      juegos: [],
      juegosActual: {},
    }
  /*vincular la funcion de actualizar el componente*/
    this.actualizarJuegoActual = this.actualizarJuegoActual.bind(this)
  }
  /*Llamar a la API Rest*/
  componentDidMount(){
    const url = "http://localhost:3000/juegos"
    axios.get(url)
          .then((respuesta) => { this.setState ({ juegos: respuesta.data })
            console.log(respuesta.data)
          })
          .catch((error) => { console.log ( error ) })
  }

  /*Funcion para saber el estado de la persona actual (Detalle)*/
  actualizarJuegoActual(juego){
      //Actualizar el estado:
      this.setState({
        juegosActual: juego
      })
  }

  /*Renderizar la estructura HTML que viene del return*/
  render(){
    return (
      <div className="container-fluid">
          <div className="row abs">
              <div className="col s12">
                <nav>
                  <div className="nav-wrapper blue-grey darken-4">
                    <a href="#!" className="brand-logo right">Galeria de juegos!</a>
                  </div>
                </nav>
              </div>
          </div>
  
          <div className="row abs2">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s3" >
                  <PersonaList 
                    list={ this.state.juegos } 
                      updateJugeo={ this.actualizarJuegoActual }
                    />
              </div>
              {/* Se llama al objeto persona donde se van a mostrar los seleccionados*/}
              <div className="col s9 abs">
                  <PersonaDetail
                    detailJuego={ this.state.juegosActual }
                  />
              </div>
          </div>
  
          <div className="abs">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s12"><PersonaForm /></div>
          </div>
      </div>
    );
  }

}
/*---------------------------------------------------------------------------*/
/*Exportación*/
export default App;
/*---------------------------------------------------------------------------*/
