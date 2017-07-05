import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends  Component{
    render(){
        return(
            <div>
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4>Your Hero Squad</h4>
                    </li>
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li key={hero.id}
                                    className="collection-item">
                                    <div>
                                        {hero.name}
                                        <div className="secondary-content" >
                                        <i  className="material-icons"
                                            onClick= {()=> this.props.removeCharacterById(hero.id)}>
                                            clear
                                        </i>  
                                    </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);