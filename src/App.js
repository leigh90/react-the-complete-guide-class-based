// here you import React inorder to render anything to the dom and the component class. 
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// its important to use the capital because smaller case is reserved for elements. eg you could create your own element <Div> that react could render knowing it is different from <div>

// create a class eg 'App' that inherits from the 'Component' class that was imported above fro the react library.
class App extends Component {
  // state is only available to class based components try to use function based componenets as often as possible because having state in many places makes your app unpredictable and difficult to manage as it grows
  // also note that the name state is NOT optional
  state = {
    persons:[
      { name: " Ashley",age:27},
      {name:"Sherlock", age:39},
      {name:"Watson", age:67}

    ],
    otherState: "an example" 
    // otherState will remain untouched when setState is called since it is not changed (see setState method below)
  }
  switchNameHandler = (newName) =>{
    // alert("HeyyA!")
    // console.log("Was Clicked")
    // this.state.persons[0].name = "Ashleigh" DO NOT ATTEMPT CHANGE STATE LIKE THIS REACT WILL REFUSE
    // Ins tead use the 'setState()' method that comes from the component class. It will allow you to update the state property and inform react to update the dom
    this.setState({
      persons:[
        { name: newName,age:290},
        {name:"Sherlock", age:39},
        {name:"Watson", age:87}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max',age:28},
        { name: event.target.value ,age:280},
        { name: 'James',age:26},


      ]
    })
  } 
  // this class has a one method the 'render' method which react will call to render something to the screen. every component has to render or return some html which can be rendered to the dom. you can listen do other things  e.g listen for events, do math etc
  render() {
    return (
      // this is jsx not html it can be written in a js file and be transpiled and understood by the compiler
      <div className="App">
        <h1>Hey you, how you doing?</h1>

        <button onClick={this.switchNameHandler.bind(this,'Ashton')}>Switch Here</button>
        {/* or you could do this */}
        {/* <button onClick={() => this.switchNameHandler('Ashtone')}>Switch Here</button> */}
        {/* What this does is return the function swithnamehandler which is then called *note the parentheses* which returns the value of the function note this has to be done on one line though it can be INEFFICIENT*/}

        {/* switchnamehandler is a class method */}
        {/* the this here refers to the 'App' class */}
        {/* the syntax is this, then the property name in this case state and the the property in this case person array[index].value */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'Max!')} changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
        {/* the click property here is used to pass down the switchname handler class method to the child component which otherwise wouldnt have access to it */}
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    // this jsx is the equivalent of the following code
    );
    // createElement() take a minimum of 3 arguments (the parent element, the property of the element and the child elements)
    // return React.createElement('div', null, React.createElement('p',null, 'noted'))

  }
}

// export the 'App' class as the default export meaninf if you import this file your importing the class
export default App;
