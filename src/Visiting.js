import React from 'react';
import axios from 'axios';
import Pdf from 'react-to-pdf';


class Visiting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name : "" , Designation : "" , Periods : "" , Amount : "" , Result : "" , submited : false};
  
     
    }
    
  
    nameHandler = event =>{
        this.setState({Name : event.target.value});
    }
    designationHandler = event =>{
        this.setState({Designation : event.target.value});
    }
    periodsHandler = event =>{
        this.setState({Periods : event.target.value});
    }
    amountHandler = event =>{
        this.setState({Amount : event.target.value});
    }
  
    submitHandler = event =>{
        event.preventDefault();
        this.setState({Result : (this.state.Periods)*(this.state.Amount)});
        this.setState({submited : true});
        axios.post("http://localhost:3001/form_test/add" , {Name : this.state.Name , Designation : this.state.Designation , Periods : this.state.Periods , Amount : this.state.Amount , Result : (this.state.Periods)*(this.state.Amount)}).then((res)=>{
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
            
          <h1 style={{textAlign : "center"}}><b>Pay Bill for Visiting Teachers</b></h1>
          <br/><br/>
          <div style={{textAlign : "center"}}>
          <label>Name </label>
          <input type="text" value={this.state.Name} onChange={this.nameHandler} />

          <label> Designation </label>
          <select onChange={this.designationHandler}>
              <option value="None">None</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Assistant/Associate Professor">Assistant/Associate Professor</option>
              <option value="Professor">Professor</option>
          </select>
          

          <label> Periods </label>
          <input type="number" placeholder="1,2,3...etc" value={this.state.Periods} onChange={this.periodsHandler} />

          <label> Enter Amount : Rs </label>
          <select type="number" onChange={this.amountHandler}>
              <option value="0">0</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
          </select>
          <label> </label>
          <button onClick={this.submitHandler} type="button">Submit</button>
          <br/><br/><br/><br/>
          <h2>------------------------------------------------------------------------</h2>
          <h2>Govt Murray College Sialkot</h2>
          <h2>------------------------------------------------------------------------</h2>
          </div> </form>
        
          </div>
            : (
              <PDF Name={this.state.Name} Designation={this.state.Designation} Periods={this.state.Periods} Amount={this.state.Amount} Result={this.state.Result} />
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
                <h1>Pay Bill For Visiting Teachers</h1>
                <p><b>Name : </b> {props.Name}</p>
                <p><b>Designation : </b> {props.Designation}</p>
                <p><b>Periods : </b> {props.Periods}</p>
                <p><b>Amount : </b> {props.Amount}</p>
                <p><b>Result : </b> {props.Result}</p>
                <h2>Govt Murray College Sialkot</h2>
            </div>
        
        </div>
        <Pdf targetRef={ref} filename="PayBill.pdf">
        {({toPdf})=> <button onClick={toPdf}>Capture as PDF</button> }
        </Pdf>
        
        </>
    );
}
  export default Visiting;