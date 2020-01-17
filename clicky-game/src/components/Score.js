import React, {useContext} from 'react';
import {GameContext} from '../components';

function Score() {

    const score = useContext(GameContext).score;

    return (
        <span>Score: {score}</span>
    )
}

export default Score;