import React,{useState} from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styles={
    width:'200px',
    margin:'20px auto'
}
const Game=()=>{
    const [board,setBoard]=useState(Array(9).fill(null))
    const [xisNext,setXisNext]=useState(true)
    const winner=calculateWinner(board)

    const handleClick=(i)=>{
        const boardCopy=[...board]
        if(winner || boardCopy[i])
        return
        boardCopy[i]=xisNext ? 'X' : 'o'
        setBoard(boardCopy);
        setXisNext(!xisNext)

    }
    const jumpTo=()=>{

    }
    const renderMoves=()=>(
      <button onClick={()=>setBoard(Array(9).fill(null))}>START GAME
    </button>
    )
    return(
        <>
        <Board  squares={board}
        onClick={handleClick}/>
        <div style={styles}>
            <p>{winner ? 'Winner: ' + winner:'Next Player: ' + (xisNext ? 'X' : 'o')}</p>
            {renderMoves()}
        </div>

        </>
    )
}
export default Game