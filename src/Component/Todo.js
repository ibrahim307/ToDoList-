import React, { Component } from "react";
import "../Component/Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      items: [],
      active:true,
      toggle: false
    };
  }

  onChange(event) {
    this.setState({
        // pour recuperer le value de l'input
      userInput: event.target.value
    });
  }

  addTodo(event) {
    this.setState({
      //    pour qu'il remet la zone de text vide apres la click sur le boutton
      userInput: "",
      // pour faire une copie du tableau items et push le userInput a la fin du nouveau tab
      // title:c'est le text qu'on l'a saisi
    //   active:dans ce cas actvie c'est pour changer l'etat de l'element 
    // toujours on envoie un objet qui contient le valeur(key) de l'input et un state(key) pour qu'apres on fais le condition
    //  par rapoort le state ede chaque element
      items: [{ title: this.state.userInput,active:true }, ...this.state.items]
    });
  }

// on peut changer index par n'importe qu'elle argument "itemindex"
  deleteTodo(index) {
    
    // filtrer tout les elements qui ont des index different de i est les laisser afficher 
    this.setState({
      items: this.state.items.filter((el,i)=>i!==index)
    });
  }

  istoggle(indexItem) {
    this.setState({
        // si l'index de l'element donnéé(index) est egale a l'index de map (i) alors ont doit changer l'etat de l'element
        // el.active=!el.active si i===indexItem il fais rien sion on recois l'inverse de state...pour changer completed par undo
      items:this.state.items.map((el,i)=>{if(i===indexItem){el.active=!el.active}return el}
    )
  })
  }

  render() {
    return (
      <div>
        <div className="container-form">
          <h1 className="first-title">To-Do App!</h1>
          <h2 className="second-title">Add new To-do</h2>
          <input
            className="input-text"
            type="text"
            placeholder="Enter new text"
            // pour gerer le valeur de l'input et l
            value={this.state.userInput}
            onChange={event => this.onChange(event)}
          />
          <button
            className="add-boutton" 
            onClick={event => this.addTodo(event)}
          >
            Add
          </button>
        </div>
        <h2 className="titre">Let's get some work done!</h2>
        <hr className="short-ligne" />
        <div>
            {/* ici on a mapper pour acceder a chaque fois a un element precis pour qu'on change sont etat
            par exemple pour changer le contenu de boutton si active est true et faire le ligne-througth  */}
          {this.state.items.map(((el,index) => (
            //   key pur eviter l'erruer dans le console
            <div key={index}>
              <button className="completed-button" onClick={() => this.istoggle(index)}>
                   {/* ici si active est "true" donc le contenu de boutton est automatiquement "completed"
                   donc on a pas besoin de le changer mais si il est "false" on le change a "undo"  */}
                {el.active ? "Complete" : "Undo"}
              </button>
              <button className="delete-button" onClick={() => this.deleteTodo(index)}>delete</button>
               {/* el.title si on le fais pas il affiche pas les element parcequ'on a fais un objet qui contient title qui contient l'element */}
               {/* si active est "true" on fais rien si il est "false" donc le contenu est "undo" est on doit faire le line-through */}     
              <span className={el.active?null:"completed"}>{el.title}</span>
            </div>
          )))}
        </div>
      </div>
    );
  }
}

export default Todo;
