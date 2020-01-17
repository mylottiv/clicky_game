import React, {useContext} from 'react';
import {GameContext} from '../components';

function Tile(props) {

    const setSelectedTile = useContext(GameContext).setSelectedTile;

    return (
        <button className='card' style={{height: '200px', width: '200px'}} onClick={() => setSelectedTile(props.image)}>
            <img className='img-thumbnail h-100 w-100' src={props.image} />
        </button>
    )
}

export default Tile;