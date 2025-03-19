import React from 'react'
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

export default function BoxOfficeRecode({ props ,onClick}) {

    const changeLocale = (number)=>{
        return parseInt(number).toLocaleString();
    }
    
    let rankNum = props.rankInten;
    console.log(props.rankInten);



    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-right" 
        onClick={onClick}>
            <th scope="row" className="px-6 py-4 text-center">
                {props.rank}
            </th>
            <td className="px-6 py-4 text-center">
                {props.movieNm}
            </td>
            <td className="px-6 py-4">
                {changeLocale(props.salesAmt)}
            </td>
            <td className="px-6 py-4">
                {changeLocale(props.audiCnt)}
            </td>
            <td className="px-6 py-4">
                {changeLocale(props.salesAcc)}
            </td>
            <td className="px-6 py-4">
                {changeLocale(props.audiAcc)}
            </td>
            {/* <>로 묶어 주어야 했다는 점... <div>로 안묶으면 서로 다른 객체가 되어서 colmn으로 정렬 되어 버렷던 점 */}
            <td className="px-6 py-4">
                {rankNum == "0" ? <div className='text-center'>-</div> :  
        rankNum > 0 ? <div className='flex justify-center items-center'><GoArrowUp className='text-blue-600'/>{rankNum}</div> : <div className='flex justify-center items-center'><GoArrowDown className='text-red-600'/>{Math.abs(rankNum)}</div>}
            </td>
        </tr>
    )
}
{/* <div role='순위'>{props.rank}</div>
      <div role='영화명'>{props.movieNm}</div>
      <div role='매출액'>{props.salesAmt}</div>
      <div role='관객수'>{props.audiCnt}</div>
      <div role='누적 매출액'>{props.salesAcc}</div>
      <div role='누적 관객수'>{props.audiAcc}</div>
      <div role='순위 증감'>{props.rankInten}</div> */}