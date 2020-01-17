import React, {useContext} from 'react';
import {GameContext} from '../components';

function TopScore() {

    const hiScore = useContext(GameContext).hiScore;

    return (
        <span>High Score: {hiScore}</span>
    )
}

export default TopScore;