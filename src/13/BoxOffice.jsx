import React, { useEffect, useRef, useState } from 'react'
import BoxOfficeRecode from './BoxOfficeRecode';

export default function BoxOffice() {

  const [boxTags, setBoxTags] = useState();

  const [showText, setShowText] = useState("");

  const selDate = useRef();

  const [maxDate,setMaxDate] = useState();


  //일일 박스 오피스 정보 가져오기

  const getFetchData = async () => {
    const base = import.meta.env.VITE_Movie_API_URL;
    const key = import.meta.env.VITE_Movie_API_KEY;
    let url = base + "key=" + key + "&targetDt=";
    //어제하루 불러오는데는 한번이면 충분
    //날짜가 바뀐다면..? 흠...
    //const [yesterday, setYeserday]

    //let timeData = new Date();

    // let tagetDate = (String)(timeData.getDate() - 1).padStart(2, 0);
    // let tagetMonth = (String)(timeData.getMonth() + 1).padStart(2, 0)
    // let tagetYear = timeData.getFullYear();

    


    let tagetDt = [...(selDate.current.value).split("-")].concat("");
    tagetDt = tagetDt[0]+tagetDt[1]+tagetDt[2];


    url = url + tagetDt;
    const resp = await fetch(url);
    const data = await resp.json();


    let boxList = data.boxOfficeResult.dailyBoxOfficeList;

    setBoxTags(boxList.map(item => <BoxOfficeRecode key={item.movieCd} props={item} onClick={() => handleClick(item)} />));


  }

  const handleOnChange = ()=>{
    getFetchData();
  }

  const handleClick = (movieInfo) => {

    // setShowText(<tr className='flex justify-center items-center'>
    //                 <td colSpan={7} className='flex bg-amber-200 justify-center items-center'>
    //                   {/* <div>{movieInfo.rankOldAndNew}</div>
    //                   <div>{movieInfo.showRange}</div>
    //                   <div>{movieInfo.movieNm}</div>
    //                   <div>{movieInfo.scrnCnt}</div>
    //                   <div>{movieInfo.showCnt}</div> */}
    //                   {movieInfo.rankOldAndNew}
    //                   </td></tr>);

    //함수로 <div>도 저장할 수 있다는것..!! 이때에 저장되는 div는 무슨 형일까?
    setShowText(
      <tr>
        <td colSpan={7} className='bg-gray-200 text-center' >
          <div className='flex justify-center items-center gap-2'>
            <div>{movieInfo.rankOldAndNew}</div>
            <div>{movieInfo.showRange}</div>
            <div>{"영화이름 : " + movieInfo.movieNm}</div>
            <div>{"상영한 스크린 수 :  " + movieInfo.scrnCnt}</div>
            <div>{"상영 횟수 : " + movieInfo.showCnt}</div>
          </div>

        </td>
      </tr>
    );
    console.log(showText)
  }

  //처음 한번
  useEffect(() => {
    let timeData = new Date();
    let tagetDate = (String)(timeData.getDate() - 1).padStart(2, 0);
    let tagetMonth = (String)(timeData.getMonth() + 1).padStart(2, 0)
    let tagetYear = timeData.getFullYear();

    selDate.current.value = tagetYear + "-" + tagetMonth + "-" + tagetDate;
    setMaxDate(tagetYear + "-" + tagetMonth + "-" + tagetDate);   

    getFetchData();

  }, [])




  return (
    <div>
      <div><div className='text-end'>날짜기준 : <input ref={selDate} onChange={handleOnChange} max={maxDate} className='text-end' type="date" id="date" name="date"></input></div></div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm rtl:text-center text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                속성
              </th>
              <th scope="col" className="px-6 py-3">
                영화명
              </th>
              <th scope="col" className="px-6 py-3">
                매출액
              </th>
              <th scope="col" className="px-6 py-3">
                관객수
              </th>
              <th scope="col" className="px-6 py-3">
                누적 매출액
              </th>
              <th scope="col" className="px-6 py-3">
                누적 관객수
              </th>
              <th scope="col" className="px-6 py-3">
                증감율
              </th>
            </tr>
          </thead>
          <tbody>
            {boxTags}
          </tbody>
          <tfoot>
            {showText}
            {/* <tr>
          <td colSpan={7} className='bg-amber-200'>
            test
          </td>
        </tr> */}
          </tfoot>
        </table>

      </div>
    </div>

  )
}
