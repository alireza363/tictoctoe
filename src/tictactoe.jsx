import { useState } from "react"

function Title({turn}) {
    return <p className="border border-b-0 border-gray-400 pl-2 shadow-fuchsia-300 shadow-inner">
        Next Player : <span className="font-bold font-mono text-[22px] text-fuchsia-800">{turn}</span>
    </p>
}

function Square({turn, setTurn}) {
    const [content, setContent] = useState('')
    const contentHandler = () => {
        content || setContent(turn)
        turn == 'x' && content == "" ? setTurn('o') : setTurn('x')
    }
    return <div className={`w-20 h-20 border-r border-b border-gray-400 
    hover:border hover:shadow-inner hover:border-fuchsia-300 text-center font-mono
    text-[3rem] text-fuchsia-800`} onClick={contentHandler}>
        {content}
    </div>
}

function Board({turn, setTurn}) {
    return <div className="border-t border-l border-gray-400">
        <div className="flex">
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
        </div>
        <div className="flex">
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
        </div>
        <div className="flex">
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
        </div>
    </div>
}

export default function Game() {
    const [turn, setTurn] = useState('x')
    return <div className="m-5">
        <Title turn={turn} />
        <Board turn={turn} setTurn={setTurn} />
        {/* <Navigate /> */}
    </div>
}