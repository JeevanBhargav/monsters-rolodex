//import { Component } from "react";
import './search-box.styles.css';
const SearchBox = ({className,placeholder, onChangeHandler}) => (
        
        <input 
            className = {`search-box ${className}`}
            type='search' //type = search turns the input box into search box, search box will not appear when we type
            placeholder= {placeholder}
            onChange={onChangeHandler}
        /> 
        )

export default SearchBox;