


const FilterBtn = (props) => {
    const {text, onClick, currentFocus} = props;
    const baseStyle = "px-5 h-7 bg-light-bg text-xs mr-2 font-medium text-muted-font rounded-sm cursor-pointer transition-color duration-200"
    const focusStyle = "px-5 h-7 bg-primary text-xs mr-2 font-medium text-black rounded-sm cursor-pointer transition-color duration-200"
    return(
        <>
        <button onClick={onClick} className={currentFocus ? focusStyle:baseStyle}>
            {text}
        </button>
        </>
    )
}


export default FilterBtn;