import { memo } from "react"


const CounterDisplay = ({ value, objValue }) => {

    console.log("re-renders")

    return (
        <>
            <h2>Counter: {value}</h2>
            {objValue?.map((item, i) =>
                <h2 key={i} >Object Value: {item?.name}</h2>
            )}
        </>
    )
}

export default memo(CounterDisplay)