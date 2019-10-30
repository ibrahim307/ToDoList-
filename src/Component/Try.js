import React,{Component} from 'react'
import "../Component/Todo.css"
class Try extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                userInput:'',
                items:[],
         }
    }
    onChange=(event)=>{
        this.setState({
            userInput:event.target.value
        })
    }
    addItem=()=>{
        this.setState({
            userInput:'',
            items:[{title:this.state.userInput,active:true}, ...this.state.items]
           
        })
    }
    delete=(indexItem)=>{
        this.setState({
            items: this.state.items.filter((el,i)=>i!==indexItem)
        })
    }
    completeButton=(indexItem)=>{
        this.setState({
            items:this.state.items.map((el,i)=>{if(i===indexItem){el.active=!el.active}return el}
            )
        })
    }
    render() { 
        return ( 
            <div>
                <input type="text" placeholder="Enter new text" onChange={this.onChange} value={this.state.userInput}/>
                <button type="submit" onClick={this.addItem}>Add</button>
               
                    {this.state.items.map(((el,i)=>            
                       <div key={i}>
                         <button onClick={()=>this.completeButton(i)}>{el.active ? "complete" : "undo"}</button>
                         <button onClick={() => this.delete(i)}>delete</button>
                         <span className={el.active?null:"completed"}>{el.title}</span>
                       </div>
                    ))} 
                
            </div>
         );
    }
}
 
export default Try ;