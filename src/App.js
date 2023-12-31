//import{Component} from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/cardlist/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const[searchField, setSearchField] = useState('');// gives us [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilterMonsters] = useState(monsters);
  const[stringField, setStringField] = useState('');
  
  console.log('rendered');

  useEffect(()=>{
    //console.log('effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=> setMonsters(users)
    );
  }, []);

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
    //console.log('effect fired')
  },[monsters, searchField])


const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

const onStringChange = (event) => {
  setStringField(event.target.value)
}


  return(
  <div className="App">
  <h1 className="app-title">{title}</h1>
 
  <SearchBox 
  className = 'monsters-search-box'
  onChangeHandler = {onSearchChange} 
  placeholder = 'search monsters'/>
  <br />
<SearchBox 
  className = 'title-search-box'
  onChangeHandler = {onTitleChange} 
  placeholder = 'set title'/>

  {/* <SearchBox 
  onChangeHandler = {onStringChange} 
  placeholder = 'set String'/> */}


{<CardList  monsters={filteredMonsters}/>}
</div>)
}

/* class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:""
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((users)=> this.setState(()=> {
    return {monsters:users}
  },
  ));
}

onSearchChange =(event) => {
         
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchField}; 
      }
    )
    
  }
  
render(){
    //console.log('render from APPJS');
    const { monsters, searchField} = this.state;
    const{onSearchChange}  = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });
     
    //return (
      
    //);
  }
  
} */

export default App;
