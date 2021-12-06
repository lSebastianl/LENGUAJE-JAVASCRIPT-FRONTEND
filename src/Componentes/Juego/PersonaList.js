/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";

/*---------------------------------------------------------------------------*/
const PersonaList = ( props ) => {
      return(    
      <ul className="collection with-header">
        <li className="collection-header  blue-grey darken-1 white"><h4>Listado de los juegos:</h4></li>
         {
            props.list.map( (item)=>{
               return(
                  <li className="collection-header blue-grey darken-3">
                     <a href="#!"
                        key= { item._id }
                           onClick = { props.updateJugeo.bind(this, item) }
                     >
                        { item.nombre  } / exclusivo: {item.exclusivo}
                     </a>
                   </li>
               )
            })
         }
      </ul>
         
      )
}
/*---------------------------------------------------------------------------*/
export default PersonaList;

/*---------------------------------------------------------------------------*/