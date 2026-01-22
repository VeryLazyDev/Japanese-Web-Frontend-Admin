

const LevelBadge = ({level}) => {
    return(
        <>
        <div className="flex items-center justify-between select-none">
            <p className="bg-amber-300 text-amber-800 px-4 py-1 rounded-md font-semibold text-xs">{level}</p>
        </div>
        </>
    )
}

export default LevelBadge;