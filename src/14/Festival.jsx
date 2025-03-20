import React, { useEffect, useRef, useState } from 'react'
import TailCard from '../UI/TailCard';

export default function Festival() {
    //값을 받아오기
    const [tdata, setTdata] = useState();

    //옵션 값
    const [option, setOption] = useState();


    //선택한 옵션값으로 만든 태그
    const [tags, setTags] = useState();


    //메뉴에 선택된 값
    const optionValue = useRef();

    const getFecth = async () => {
        let API_KEY = import.meta.env.VITE_Traffic_API_KEY;

        let URL = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey="
            + API_KEY
            + "&pageNo=1&numOfRows=40&resultType=json";

        const resp = await fetch(URL);
        const data = await resp.json();

        setTdata(data.getFestivalKr.item);
        console.log(tdata);
    }
    //처음 시작할 때
    useEffect(() => {
        getFecth();
    }, []);

    //옵션 가져와서 옵션 만들어주기
    useEffect(() => {

        if (tdata != undefined) {

            let selOption = [...new Set(tdata.map(item => item["GUGUN_NM"]))];
            setOption(selOption.map(item => <option value={item}>{item}</option>));
        }
    }, [tdata]);

    //옵션값이 바뀌면
    const handleOnChange = () => {
        //옵션이 선택되면
        if (optionValue.current.value != null) {
            //옵션의 값을 가져와서 GUGUN가 같은 애만 추출
            let selOption = tdata.filter(item => item["GUGUN_NM"] == `${optionValue.current.value}`);
            console.log(selOption);
            setTags(selOption.map(item => <TailCard key={item.UC_SEQ} imgurl={item.MAIN_IMG_THUMB} title={item.TITLE} subtitle={item.TRFC_INFO} kws={item.USAGE_DAY_WEEK_AND_TIME} />));

        }
    };

    return (
        <>
           <h5 className='text-5xl text-center mb-5 text-blue-400 font-bold'>부산 축제 정보</h5>
            <form className="max-w-sm mx-auto min-h-2 mb-5">
                <select ref={optionValue} onChange={handleOnChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>--지역선택--</option>
                    {option}
                </select>
            </form>

            <div className='grid grid-cols-3 gap-2 mb-5'>
                {tags}
            </div>
        </>


    )
}
