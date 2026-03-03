import TeamCard from "./team-card";
import { team } from "@/constant/team";

const TeamSection = () => {
    return(
        <>
        <div className="bg-transparent w-full h-auto">
            <h1 className="font-semibold text-xl w-full mb-5">Our Team</h1>
            <div className="gap-3 grid w-full sm:w-150 sm:grid-cols-2 lg:w-250 lg:grid-cols-4">
                {team.map((item) => (
                    <TeamCard key={item.id} name={item.name} link={item.link}
                    desc={item.desc} username={item.username} img={item.img}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default TeamSection;