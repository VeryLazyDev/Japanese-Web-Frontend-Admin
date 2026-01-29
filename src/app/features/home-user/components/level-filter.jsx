import FilterBtn from "../../home-admin/components/filter-btn"
import { useState } from "react"

const LevelFilter = () => {

    const [focus, setFocus] = useState(0)

    return(
        <>
        <div className="bg-transparent w-full h-auto px-4">
            <FilterBtn onClick={() => setFocus(0)}
            currentFocus={focus === 0} text="N5"></FilterBtn>
            <FilterBtn onClick={() => setFocus(1)}
            currentFocus={focus === 1} text="N4"></FilterBtn>
            <FilterBtn onClick={() => setFocus(2)}
            currentFocus={focus === 2} text="N3"></FilterBtn>
        </div>
        </>
    )
}


export default LevelFilter