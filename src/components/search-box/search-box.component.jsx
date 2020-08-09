import React from 'react'
import "./search-box.style.css"

export const SearchBox = ({placeholder,handleChange}) => (
    <input 
    className = 'search'
    type ='search' 
    placeholder = {placeholder} // make it dynamic
    //  can console .log a second param below because  second agument to call state right away since it is asyncronous <--- spelling?
    onChange = {handleChange}
/>
);

