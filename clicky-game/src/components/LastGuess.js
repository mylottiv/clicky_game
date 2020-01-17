import React, {useContext} from 'react';
import {GameContext} from '../components';

function LastGuess() {

    const lastGuess = useContext(GameContext).lastGuess;

    return (
        <span>Your last guess was {lastGuess}</span>
    )
}

export default LastGuess;