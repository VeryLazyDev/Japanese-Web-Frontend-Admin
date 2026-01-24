import { MdBolt, MdClose } from "react-icons/md";
import UserMainBtn from "@/components/buttons/user-main-btn";
import { useEffect } from "react";
import { animate, createScope, spring } from "animejs";
import { soundEffects } from "@/constant/user-home-modules";


const SpeedrunPopup = ({ close }) => {

    useEffect(() => {

        animate('.bolt-icon', {
            scale: [
                { to: 1.5, ease: 'inOut(3)', duration: 200 },
                { to: 1, ease: spring({ bounce: .7 }) }
            ],
            loop: true,
            loopDelay: 200,
        });
    }, [])

    return (<>
        <div
            className="container border-primary-bd bg-secondary-bg border rounded-lg w-80 h-auto p-5">
            <MdClose size={20} onClick={close} className="text-muted-font cursor-pointer"></MdClose>
            <MdBolt size={40} className="text-amber-400 m-auto bolt-icon"></MdBolt>
            <h1 className="text-center text-primary-font font-semibold mt-3 w-full">Comprehension Blitz</h1>
            <p className="text-center text-xs text-muted-font mt-2 w-full">Read the passage and answer two quick questions as fast as you can!</p>
            <span className="flex justify-center">
                <UserMainBtn sfx={soundEffects.startSfx}
                    title={"Start Now!"} style={"bg-cyan-200 text-cyan-700 w-40"}></UserMainBtn>
            </span>

        </div>
    </>)
}

export default SpeedrunPopup;