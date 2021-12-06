/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";
import axios from "axios";
import './DetailStyle.css';
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/


const PersonaDetail = (props) => {


   const remove = (_id) => {
      axios.get(`http://localhost:3000/juegos/delete/${_id}`)
        .then(function(response) {
          this.setState({
            filtered: response
          })
        }).catch(function(error) {
          console.log(error)
        })
    } 



return(
   <div className="row cuerpo">
      <div className="col s12 m7 blue-grey darken-1">
         <div className="card">
            <div className="card-content blue-grey darken-2">
               <h4>Nombre: {props.detailJuego.nombre} </h4>
               <p>Tipo: {props.detailJuego.tipo} </p>
               <p> Paltaforma: {props.detailJuego.plataforma}</p>
               <p>Empresa de desarrollo: {props.detailJuego.empresa}</p>
               
            </div>
                  <div className="card-action blue-grey darken-4">
                     <a href="#!">Fecha:  {props.detailJuego.fecha_registro}   Y   Id: {props.detailJuego._id}</a>                 
                     <button type="submit" onClick={remove.bind(this, props.detailJuego._id)} className="waves-effect waves-light btn" >x</button>
                  </div>
         </div>
      </div>
      
   </div>
  
          
)
}
/*---------------------------------------------------------------------------*/
export default PersonaDetail;
/*---------------------------------------------------------------------------*/