import React from 'react'

export default function BoxOfficeRecode({ props }) {
    console.log(props.audiAcc);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4">
                {props.rank}
            </th>
            <td className="px-6 py-4">
                {props.movieNm}
            </td>
            <td className="px-6 py-4">
                {props.salesAmt}
            </td>
            <td className="px-6 py-4">
                {props.audiCnt}
            </td>
            <td className="px-6 py-4">
                {props.salesAcc}
            </td>
            <td className="px-6 py-4">
                {props.audiAcc}
            </td>
            <td className="px-6 py-4">
                {props.rankInten}
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