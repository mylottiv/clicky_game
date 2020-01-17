import React from 'react';
import {Title, LastGuess, ScoreCard} from '../components';

function Header() {
    return (
        <div className='jumbotron align-text-center'>
            <Title />
            {/* <LastGuess /> */}
            <ScoreCard />
        </div>
    )
}

export default Header;