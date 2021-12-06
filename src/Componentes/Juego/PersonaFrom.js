
import React ,{Component} from "react";
import axios from "axios";
import './FormStyle.css';
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
class PersonaForm extends Component{
    
    constructor (props){
        super(props);
        this.state={}
    }

    submitNuevaPersona(event){
      event.preventDefault()
      axios.post('http://localhost:3000/juegos', {
            nombre: this.refs.nombre.value,
            tipo: this.refs.tipo.value,
            empresa: this.refs.empresa.value,
            plataforma: this.refs.plataforma.value,
            exclusivo: this.refs.exclusivo.value,

      }).then( (respuesta) => { console.log(respuesta) } )
          .catch( error => console.log( error )  )
    }

    render(){
        return(
<div className="row formulario">
  

    <form className="col m6 m-a " onSubmit={this.submitNuevaPersona.bind(this)}>
    <h5 className="center">Agregar nuevo Juego</h5>
    

      <div className="row">
        <div className="input-field col s6">
          <input id="nombre" ref="nombre" placeholder="Nombre del juego" />
        </div>
        <div className="input-field col s6">
          <input id="tipo" ref="tipo" placeholder="Tipo de juego"/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input id="empresa" ref="empresa" placeholder="Empresa desarrolladora"/>
        </div>
        <div className="input-field col s6">
          <input id="plataforma" ref="plataforma" placeholder="Plataforma en la que se juega"  />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input id="exclusivo" ref="exclusivo" placeholder="Exclusividad de plataforma" />
        </div>
        <div className="input-field col s2">
          <button name="action"type="submit" className="waves-effect waves-light btn">Registrar</button>
        </div>
      </div>

    </form>


  

  </div>
        )
    }

}
/*---------------------------------------------------------------------------*/
export default PersonaForm;
/*---------------------------------------------------------------------------*/
