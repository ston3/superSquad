import React, {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';

class App extends Component {
    render(){
        return(
            <div className="App container">
                <h1>SuperSquad</h1>
                <h2>Hello Stone!</h2>
                <div className="row">
                    <div className="col s6">
                        <CharacterList />
                    </div>
                    <div className="col s6 m6">
                        <HeroList />
                    </div>

                </div>
            </div>
        )
    }
}

export default App;