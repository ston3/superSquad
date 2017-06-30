import characters_json from '../data/characters.json';

export function createCharacter(id) {
    let character = characters_json.find(cha => cha.id === id);
    return character; 
}
