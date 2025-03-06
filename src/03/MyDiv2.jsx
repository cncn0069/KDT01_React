import MyDiv3 from "./MyDiv3";

export default function MyDiv2({t1,t2,t3}) {



    return (
        <>
            <div className="w-8/10 h-8/10 bg-amber-300 text-white text-2xl p10 justify-start items-center flex">   
                <div className="w-full text-left m-0 mb-30">
                   <span>{`${t1} > ${t2}`}</span>
                </div>
                <MyDiv3 z1={t1} z2={t2} z3={t3}/>
            </div>
        </>

    )
}
//