export default function MyDiv3({z1,z2,z3}) {
    return (
        <>
            <div className="w-8/10 h-8/10 bg-violet-300 text-white text-2xl p10 justify-start items-center flex">
                <div className="w-full text-left mb-10">
                    {`${z1} >${z2} > ${z3}`}
                </div>
            </div>
        </>

    )
}
