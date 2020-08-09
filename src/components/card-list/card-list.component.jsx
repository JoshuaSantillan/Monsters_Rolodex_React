import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'
// will dusplay using grid css
// also in control of generating the monsters inside the grid

export const CardList = props => (
  <div className = 'card-list'>
     {props.monsters.map(monster => (
          <Card key ={monster.id} monster = {monster} /> // whatever it returns, return to all elements it contains
     ))}    
     </div>   

);