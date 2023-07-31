import{Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: {firstName:'Yihua', lastName:'Zhang'}, company: 'ZTM' //key value pair
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I Work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              () => {
              return {
                name: {firstName:'Jeevan', lastName:'Bhar'},
              }
            },
            () => {
              console.log(this.state);
            }
            );
            //console.log(this.state);//Instead of this
          }}
          
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
