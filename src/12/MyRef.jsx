import React, { useEffect, useRef, useState } from 'react'
import TailButton from '../UI/TailButton';
import { PiLinkBreakLight } from 'react-icons/pi';

export default function MyRef() {
    let cVal = 0;
    const [sVal, setVal] = useState(0);
    const rVal = useRef(0);

    const x1 = useRef();
    const x2 = useRef();
    const select = useRef();
    const result = useRef();

    useEffect(() => {
        x1.current.focus();

    }, []);

    const handleInit = ()=>{
        x1.current.value = "";
        x2.current.value = "";
        result.current.value = "";
    }

    const handleOnChange = () => {
        cVal++;
        console.log(cVal);
    };

    const handleOnclick = () => {
        let sel = select.current.value;

        let x_1 = x1.current.value;
        let x_2 = x2.current.value;

        if(x_1 == '' || x_2 == '' )
        {
            alert("값을 입력하세요.")
            return;
        }

        switch (sel) {
            case "+":
                result.current.value = parseInt(x_1) + parseInt(x_2);
                break;
            case "-":
                result.current.value = parseInt(x_1) - parseInt(x_2);
                break;
            case "/":
                result.current.value = parseInt(x_1) / parseInt(x_2);
                break;
            case "*":
                result.current.value = parseInt(x_1) * parseInt(x_2);
                break;
            default:
                alert("+ - * / 중에서 선택");
                break;
        }
    };

    return (
        <div className='flex justify-center items-center bg-gray-400 p-10'>

            <input type="text" ref={x1} onClick={handleInit} id="large-input" className="block w-2/10 p-4 mr-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <form className="max-w-sm mx-auto" >
                <select ref={select} id="operaion" className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mr-2 h-15 w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                </select>
            </form>
            <input type="text" ref={x2} id="large-input" className="block w-2/10 p-4 mr-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <TailButton caption={'='} onClick={handleOnclick} color={'w-2/10 h-15 mr-2 bg-orange-500 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} />
            <input type="text" ref={result} id="large-input" className="block w-2/10 p-4 mr-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />

        </div>
    )
}


// let cVal = 0;
//     const [sVal, setVal] = useState(0);
//     const rVal = useRef(0);

//     const handleOnclickComb = ()=>{
//         cVal++;
//         console.log(cVal);
//     };

//     const handleOnclickState = ()=>{
//         setVal(sVal + 1);
//         console.log(sVal);
//     };

//     const handleOnclickRef = ()=>{
//         rVal.current = rVal.current+1;
//         console.log(rVal);
//     };

//     return (
//         <div>
//             <div className='grid grid-cols-3 justify-items-center items-center text-center'>
//                 <div>
//                     컴포넌트변수
//                     <TailButton caption={"컴포넌트 변수"} color={'bg-blue-200'} onClick={handleOnclickComb}/>
//                 </div>
//                 <div>
//                     State변수
//                     <TailButton caption={"state 변수"} color={'bg-blue-200'} onClick={handleOnclickState}/>
//                 </div>
//                 <div>
//                     Ref변수
//                     <TailButton caption={"ref 변수"} color={'bg-blue-200'} onClick={handleOnclickRef}/>
//                 </div>
//             </div>
//         </div>
//     )