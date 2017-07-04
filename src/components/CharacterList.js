import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h4>Characters</h4>
                <ul className="collection">
                   {this.props.characters.map(character => {
                       return (
                            <li  className ="collection-item"  key = {character.id}>
                                <div >
                                    {character.name}
                                    <div className="secondary-content" >
                                        <i  className="material-icons"
                                            onClick= {()=> this.props.addCharacterById(character.id)}>
                                            done
                                        </i>  
                                    </div>
                                </div>
                            </li> 
                       )
                   })} 
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        characters : state.characters
    };
}
export default connect(mapStateToProps, { addCharacterById})(CharacterList);