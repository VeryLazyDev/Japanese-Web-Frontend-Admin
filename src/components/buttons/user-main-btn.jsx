// import { soundEffects } from "@/constant/user-home-modules";

const UserMainBtn = ({ title, style, onClick, sfx }) => {
    const playAudio = () => {
        if (!sfx) return;
        const audio = new Audio(sfx);
        audio.volume = 0.2;
        audio.play();
    };

    return (
        <>
            <button
                onClick={playAudio}
                className={`${style} mt-4 rounded-lg h-9 text-xs font-semibold cursor-pointer hover:scale-102 active:scale-96 transition-transform duration-100`}
            >
                {title}
            </button>
        </>
    );
};

export default UserMainBtn;
