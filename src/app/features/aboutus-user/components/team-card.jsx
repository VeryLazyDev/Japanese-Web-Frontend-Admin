

const TeamCard = ({ name, desc, link, img, username }) => {
    return (
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <section className="bg-secondary-bg border border-primary-bd rounded-md w-full h-30 p-3  hover:scale-102 transition-all duration-150 cursor-pointer group">
                <div className="bg-atransparent flex w-full h-12 gap-5">
                    <img src={img} alt="" className="bg-black w-12 h-12 rounded-full" />
                    <div className="bg-transparent pt-3">
                        <h1 className="uppercase text-xs font-aux-mono">{name}</h1>
                        <p className="underline text-xs text-muted-font mt-1 group-hover:text-purple-500">{username}</p>
                    </div>

                </div>
                <p className="text-xs text-muted-font capitalize mt-3">{desc}</p>
            </section>
            </a>
        </>
    )
}

export default TeamCard;