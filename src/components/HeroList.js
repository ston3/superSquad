import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends  Component{
    render(){
        return(
            <div>
                <h4>your hero squad</h4>
                <ul className="collection">
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
                                            done_all
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