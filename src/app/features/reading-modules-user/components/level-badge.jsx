

const LevelBadge = ({level}) => {
    return(
        <>
        <div className="flex items-center justify-between select-none">
            <p className="bg-rose-200 text-rose-700 px-4 py-1 rounded-md font-semibold text-xs">{level}</p>
        </div>
        </>
    )
}

export default LevelBadge;