import React, {createContext, useState, useReducer, useEffect} from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {

    const tileReducer = (state, action) => {
        switch(action.type){
            case 'shuffle': 
                const bank = action.payload;
                const newTiles = [];
                do {
                    let randomDraw = Math.floor(Math.random() * bank.length);
                    if (!newTiles.find(tile => tile === bank[randomDraw])) {
                        newTiles.push(bank[randomDraw]);
                        console.log(bank[randomDraw], newTiles)
                    }
                }
                while (newTiles.length < bank.length);
                return newTiles;
            default:
                return state;

        }
    }

    const [tileBank, setTilesBank] = useState([
        "https://picsum.photos/id/1004/5616/3744",
        "https://picsum.photos/id/1008/5616/3744",
        "https://picsum.photos/id/1024/1920/1280",
        "https://picsum.photos/id/1015/6000/4000",
        "https://picsum.photos/id/1006/3000/2000",
        "https://picsum.photos/id/1001/5616/3744",
        "https://picsum.photos/id/1000/5626/3635",
        "https://picsum.photos/id/1011/5472/3648",
        "https://picsum.photos/id/1025/4951/3301",
        "https://picsum.photos/id/1016/3844/2563",
        "https://picsum.photos/id/1003/1181/1772",
        "https://picsum.photos/id/1005/5760/3840"
    ])

    const [score, setScore] = useState(0);

    const [hiScore, setHiScore] = useState(0);

    const [currentTiles, dispatch] = useReducer(tileReducer, []);

    const [selectedTile, setSelectedTile] = useState('');

    const [lastTile, setLastTile] = useState('');

    useEffect(() => {
        console.log('new selected tile', selectedTile, 'last tile', lastTile);
        if (selectedTile !== '') {
            if (selectedTile === lastTile) {
                console.log('oops');
                setScore(0);
                setLastTile('')
            }
            else {
                setScore(score + 1);
                setLastTile(selectedTile);
            }
        }
        setSelectedTile('');
        dispatch({type: 'shuffle', payload: tileBank});
    }, [selectedTile]);

    useEffect(() => {
        if (score >= hiScore) {
            setHiScore(score);
        }
    }, [score])

    const value = {score, setScore, hiScore, setHiScore, currentTiles, dispatch, tileBank, selectedTile, setSelectedTile, lastTile, setLastTile}

    return (
        <GameContext.Provider value={value}>
            {props.children}
        </GameContext.Provider>
    )
}

