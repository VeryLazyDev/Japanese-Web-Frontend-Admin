import { MdBolt, MdClose } from "react-icons/md";
import UserMainBtn from "@/components/buttons/user-main-btn";

const SpeedrunPopup = ({close}) => {
    return(<>
        <div className="border-neutral-700 bg-secondary-bg border rounded-lg w-80 h-auto p-5">
            <MdClose size={20} onClick={close} className="text-muted-font cursor-pointer"></MdClose>
            <MdBolt size={40} className="text-amber-400 m-auto"></MdBolt>
            <h1 className="text-center text-primary-font mt-3 w-full">Comprehension Blitz</h1>
            <p className="text-center text-xs text-muted-font mt-2 w-full">Read the passage and answer two quick questions as fast as you can!</p>
            <span className="flex justify-center">
                <UserMainBtn title={"Start Now!"} style={"bg-cyan-200 text-cyan-700 w-40"}></UserMainBtn>
            </span>
            
        </div>
    </>)
}

export default SpeedrunPopup;