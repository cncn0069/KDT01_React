import React, { useEffect, useState } from 'react'
import BoxOfficeRecode from './BoxOfficeRecode';

export default function BoxOffice() {
    const[tags, setTags] = useState();
    const[boxTags, setBoxTags] = useState();


    //일일 박스 오피스 정보 가져오기
    
    const getFetchData = async()=>{
        const base = import.meta.env.VITE_Movie_API_URL;
        const key = import.meta.env.VITE_Movie_API_KEY;
        let url = base +"key=" + key + "&targetDt=";
        //어제하루 불러오는데는 한번이면 충분
        //날짜가 바뀐다면..? 흠...
        //const [yesterday, setYeserday]

        let timeData = new Date();

        let tagetDate = (String)(timeData.getDate()-1).padStart(2,0);
        let tagetMonth = (String)(timeData.getMonth()+1).padStart(2,0)
        let tagetYear = timeData.getFullYear();

        let tagetDt = tagetYear + tagetMonth + tagetDate;
        url = url + tagetDt;

        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data)
        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
         
        setBoxTags(boxList.map(item=><BoxOfficeRecode props={item}/>));

      
    }

    //처음 한번
    useEffect(()=>{
        getFetchData();

    },[])




  return (
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
    </table>
</div>
  )
}
