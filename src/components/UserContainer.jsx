
'use client'

import { useMemo, useState } from "react"
import CounterDisplay from "./CounterDisplay"

const UserContainer = ({ userData }) => {

    const [myName, setMyName] = useState('')
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([
        { type: 'new', name: 'Nihal' },
        { type: 'new', name: 'Shah' },
        { type: 'old', name: 'Ali' },
        { type: 'new', name: 'Zain' },
        { type: 'old', name: 'Humayun' }
    ])

    const filteredArray = useMemo(() => (arr.filter((val) => val.type === 'new')), [])
    const user = useMemo(() => ({ name: 'Ali' }), [])
    // memoizing array before passing as prop so that component doesn't re-render on new reference creation when parent component re-renders

    return (
        <div>
            <h2>{userData?.name}</h2>
            <h2>{userData?.website}</h2>

            <h3>{myName}</h3>

            <input value={myName} onChange={(e) => setMyName(e.target.value)} /> {/* updating name state to check whether counterDisplay re-renders or state change of parent component */}

            <div>
                <CounterDisplay value={count} objValue={filteredArray} />
                <button onClick={() => setCount((prevVal) => prevVal + 1)} >Increment Count</button> {/* updating prop of counterDisplay to re-render it */}
            </div>

        </div>
    )
}

export default UserContainer