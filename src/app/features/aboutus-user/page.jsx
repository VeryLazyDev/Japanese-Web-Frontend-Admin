import TeamSection from "./components/team-section";


const AboutUs = () => {
    return (
        <>
            <div className="bg-transparent w-90 sm:w-150 lg:w-250 mt-15 h-auto flex flex-col justify-center pt-3 pb-10 px-5">
                <section className="bg-transparent w-full h-auto mt-10 mb-10">
                    <h1 className="font-semibold text-xl w-full">About Us</h1>

                    <p className="max-w-180 mt-4 font-normal text-muted-font text-xs"
                    >We are a group of developer friends from Yangon, who also have been studying Japanese.
                        With our knowledge in both Japanese & Web development, we decided to build something to help you with your journey.</p>

                    <p className="max-w-180 mt-2 font-normal text-muted-font text-xs"
                    >
                        As fellow Japanese learners, we spent months hunting down the best resources, only to find ourselves buried in cluttered websites and dry textbooks.
                        We knew there had to be a better way to stay motivated.
                        We decided to take those materials and build exactly what we were looking for: a gamified learning platform wrapped in a clean, UI. </p>

                    <p className="max-w-180 mt-2 font-normal text-muted-font text-xs"
                    >
                        Our goal is to turn the "grind" of language learning into an engaging experience where you can track your growth and level up your skills.
                        We aren’t just building a tool; we’re building the digital study hall we always wanted. </p>
                </section>
                <TeamSection></TeamSection>
            </div>
        </>
    )
}

export default AboutUs;