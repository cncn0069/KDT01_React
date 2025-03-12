import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";



function MyClock() {
    return (
        <>
        <div className="w-20 hover:rotate-20"><MyClockImage /></div>  
        <div className=""><MyClockTime /></div>
            
        </>
    )
}

export default MyClock;