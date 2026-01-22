

const UserMainBtn = ({title, style}) => {
    return(
        <>
        <button className={`${style} mt-4 rounded-lg h-9 text-xs font-aux-mono cursor-pointer hover:scale-102 transition-transform duration-100`}>{title}</button>
        </>
    )
}

export default UserMainBtn;