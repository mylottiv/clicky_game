import React, {useContext} from 'react';
import {Tile, GameContext} from '../components';

function CurrentTiles() {

    const currentTiles = useContext(GameContext).currentTiles;

    const TileComponents = currentTiles.map((image, i) => <Tile key={`tile-${i}`} image={image}/>)

    return (
        <div className='row'>
            <div className='col'>
                {TileComponents.slice(0,4)}
            </div>
            <div className='col'>
                {TileComponents.slice(4, 8)}
            </div>
            <div className='col'>
                {TileComponents.slice(8, 12)}
            </div>
        </div>
    )
}

export default CurrentTiles;