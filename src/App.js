
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
   name:"",
   mobilenumber:'',
   password:'',
   isFriendly:false ,
   dietaryRestrictions:{
     isVegetarian:false,
     isNonVegetarian:false
   },
   gender:'',
   favcolor:'',

  }
  
  }
/*handleChange=(event)=>{
const inputdata =event.target.value
this.setState({
  [event.target.name]:inputdata
            })
console.log(inputdata)

  }*/
  
  handleChange=(event)=> {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}
  handleChangeCheckboxNested=(event)=>{
    const{name,type,checked} = event.target
    if(type === 'checkbox')this.setState({ dietaryRestrictions:{
      [name]:checked
    }})
   
  }
  
 /*handleChange(event) {
        const {name, value} = event.target
       this.setState({  [name]: value})
    }*/

  render(){
    const{name,mobilenumber,password,gender,favcolor}=this.state
    return (
      <div className="App">
          <form class='left'>
            <div class='form-group text-left'>
            <label for='name' id='username'>
            <p><h3>Name:<input type="text" name='name' placeholder="Enter Username" id='name' value={name} onChange={this.handleChange}></input></h3></p> 
           </label>
           </div>
           <div class='form-group text-left'>
            <label for='mobilenumber' id='mobilenumber'>
            <p><h3>Mobile Number:<input type="tel" name='mobilenumber' placeholder="Enter Number" id='mobilenumber' value={mobilenumber} onChange={this.handleChange}></input></h3></p> 
           </label>
           </div>
           <div class='form-group text-left'>
            <label for='password' id='userpassword'>
            <h3>Password:<input type="password" name='password' placeholder="Enter Password" id='userpassword' value={password} onChange={this.handleChange}></input></h3> 
           </label>
           </div>
           <div class='checkbox'>
             <label>
             <h4><input class='modified-checkbox' type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange}></input>isFriendly?</h4>
            </label>
            </div>

            <div class='checkbox'>
             <label>
             <h4><input class='modified-checkbox' type='checkbox' name='isVegetarian' checked={this.state.dietaryRestrictions.isVegetarian} onChange={this.handleChangeCheckboxNested}></input>isVegetarian?</h4>
            </label>
            </div>

            <div class='checkbox'>
             <label>
             <h4><input class='modified-checkbox' type='checkbox' name='isNonVegetarian' checked={this.state.dietaryRestrictions.isNonVegetarian} onChange={this.handleChangeCheckboxNested}></input>isNonVegetarian?</h4>
            </label>
            </div>
            <label>
           <h5> <input class='modified-radio' type='radio' name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange}></input>Male</h5> 
            </label>
           
            <label>
           <h5> <input class='modified-radio' type='radio' name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange}></input>Female</h5> 
            </label>
            <br/>
            <label><h4>Your Favourite color is :
              <select 
              name='favcolor'
              value={favcolor}
              onChange={this.handleChange}> 
              <option value="">--Select--</option>
                <option value='Red'>Red</option>
                <option value='Blue'>Blue</option>
                <option value="Green">Green</option>
                <option value='Yellow'>Yellow</option>
                <option value='Violet'>Violet</option>
              </select>
              </h4>
            </label>
               
               
            
          
          </form>
          <div class=' pl-3'>      
          <h2 class='text-primary pl-3'>Form Data</h2>
                <h4>Entered Name : {name}</h4>
                <h4>Entered Mobile Number : {mobilenumber}</h4>
                <h4>Entered Password : {password}</h4>
                <h4>User is a : {gender}</h4>
                <h4>User's Favourite color is : {favcolor}</h4>
                <h4>User Friendly :{this.state.isFriendly ? 'Yes': 'No'}</h4>
                <h4>User is Vegetarian :{this.state.dietaryRestrictions.isVegetarian ? 'Yes': 'No'}</h4>
                <h4>User is NonVegetarian :{this.state.dietaryRestrictions.isNonVegetarian ? 'Yes': 'No'}</h4>

           </div>

        </div>
    );
  }
 
}

export default App;
