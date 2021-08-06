import React from 'react';
import axios from 'axios';
import Pdf from 'react-to-pdf';


class Salary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name : "" , Designation : "" , Amount : ""  , submited : false};
  
     
    }
    
  
    nameHandler = event =>{
        this.setState({Name : event.target.value});
    }
    designationHandler = event =>{
        this.setState({Designation : event.target.value});
    }
    amountHandler = event =>{
        this.setState({Amount : event.target.value});
    }
  
    submitHandler = event =>{
        event.preventDefault();
        this.setState({submited : true});
        axios.post("http://localhost:3002/form_test2/add" , {Name : this.state.Name , Designation : this.state.Designation , Amount : this.state.Amount}).then((res)=>{
            console.log(res.data)
          }).catch((error)=>{
            
          })
    }
   
    render() {
      return (
    
    <>
        {!this.state.submited ?
             <div>
                <form className="form">
            
          <h1 style={{textAlign : "center"}}><b>Salary To Employees</b></h1>
          <br/><br/>
          <div style={{textAlign : "center"}}>
          <label>Name </label>
          <input type="text" value={this.state.Name} onChange={this.nameHandler} />

          <label> Designation </label>
          <input type="text" value={this.state.Designation} onChange={this.designationHandler} />
          

          <label> Enter Amount : Rs </label>
          <input type="number" value={this.state.Amount} onChange={this.amountHandler} />
          
          <label> </label>
          <button onClick={this.submitHandler} type="button">Submit</button>
          <br/><br/><br/><br/>
          <h2>------------------------------------------------------------------------</h2>
          <h2>Govt Murray College Sialkot</h2>
          <h2>------------------------------------------------------------------------</h2>
          </div> </form>
        
          </div>
            : (
              <PDF Name={this.state.Name} Designation={this.state.Designation} Amount={this.state.Amount} />
          )
      }
      
    </>
      );
    }
  }
const ref = React.createRef();

const PDF = (props) => {
    return(
        <>
        <div style={{width : "100%" , height : "100%" , background : "white" , textAlign : "left"}} ref={ref}>
         
            <div>
                <h1>Salary To Employees</h1>
                <p><b>Name : </b> {props.Name}</p>
                <p><b>Designation : </b> {props.Designation}</p>
                <p><b>Amount : </b> {props.Amount}</p>
                <h2>Govt Murray College Sialkot</h2>
            </div>
        
        </div>
        <Pdf targetRef={ref} filename="Salary.pdf">
        {({toPdf})=> <button onClick={toPdf}>Capture as PDF</button> }
        </Pdf>
        
        </>
    );
}
  export default Salary;