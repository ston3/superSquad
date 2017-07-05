import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component{
   strength(){
      let strength = 0;
      this.props.heroes.forEach(hero => strength += hero.strength);
      return strength;
   }
   speed(){
      let speed = 0;
      this.props.heroes.map(hero => speed += hero.speed );
      return speed;
   }

   intelligence(){
      let intelligence = 0;
      this.props.heroes.map(hero => intelligence += hero.intelligence );
      return intelligence;
   }

   render(){
      return(
         <div>
            <ul className="collection with-header">
               <li className="collection-header">
                  <h4>Your Hero Squad</h4>
               </li>
               <li className="collection-item">
                  <b>Overall Strength: </b>
                  {this.strength()}
               </li>
               <li className="collection-item">
                  <b>Overall Speed: </b>
                  {this.speed()}
               </li>
               <li className="collection-item">
                  <b>Overall Intelligence: </b>
                  {this.intelligence()}
               </li>
            </ul>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      heroes: state.heroes
   }
}

export default connect(mapStateToProps,null)(SquadStats);