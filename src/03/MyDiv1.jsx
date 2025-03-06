import MyDiv2 from "./MyDiv2";



export default function MyDiv1() {
    const d1 = "Div1";
    const d2 = "Div2";
    const d3 = "Div3";

    return (
        <><div className="w-8/10 h-8/10 bg-lime-900 text-white text-2xl p10 justify-start items-center flex">
            <div className="w-10 text-left m-0 mb-30">
                myDiv2
            </div>
            <MyDiv2 t1={d1} t2={d2} t3={d3} />
        </div></>

    )
}
// 