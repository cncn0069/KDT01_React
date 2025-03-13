import React, { useEffect, useState } from 'react'
import TailButton from '../UI/TailButton';
import BorderBox from '../UI/borderBox';

export default function TrafficMain() {
    const [tdata, setTdata] = useState();
    const [bigButton, setBigButton] = useState();
    const [smallButton, setSmallButton] = useState();
    const [searchData, setSearchData] = useState();


    const getFecth = async () => {

        const API_KEY = import.meta.env.VITE_Traffic_API_KEY;
        let BASE_URL = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey="

        let url = BASE_URL + API_KEY;

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.data);
        //    console.log(tdata);


    }

    //if 제거 하면 오류남
    //처음 값이 한번 바뀌나..?

    useEffect(() => {
        if (tdata != undefined) {
            //대분류 가져오기
            let categori = [...new Set(tdata.map(item => item["사고유형대분류"]))];
            setBigButton(categori.map(item => <TailButton key={item} caption={item} color={'bg-blue-400'} onClick={() => handleOnclick(item)} />));

            //대분류
            //setBig(categori);
            //{caption, color,onClick}
        }
    }, [tdata]);
    

    const handleOnclick = (categori) => {

        let categoriFilter = tdata.filter(item => item["사고유형대분류"] == categori);
        // let categori = [...tdata["data"].map(item => item["사고유형중분류"])]

        setSmallButton(categoriFilter.map(item => <TailButton key={item["경상자수"]} caption={item["사고유형중분류"]} color={'bg-blue-400'} onClick={() => handleOnclick2(item)} />));

    }

    const handleOnclick2 = (filterData) => {
        setSearchData(<div className='grid grid-cols-4'>
            <div className='flex mr-2'>
                <BorderBox caption={"경상자수"} />
                <div className='flex justify-center items-center'>{filterData["경상자수"]}</div> 
            </div>
            <div className='flex mr-2'>
                <BorderBox caption={"사고건수"} />
                <div className='flex justify-center items-center'>{filterData["사고건수"]}</div> 
            </div>
            <div className='flex mr-2'>
                <BorderBox caption={"사망자수"} />
                <div className='flex justify-center items-center'>{filterData["사망자수"]}</div> 
            </div>
            <div className='flex mr-2'>
                <BorderBox caption={"중상자수"} />
                <div className='flex justify-center items-center'>{filterData["중상자수"]}</div> 
            </div>
        </div>
        );
    }

    useEffect(() => {

    }, [bigButton])

    useEffect(() => {
        getFecth();
    }, []);
    return (
        <div className='flex-col w-full gap-1'>
            <div className='flex justify-between items-center'>
                <div>{bigButton && <span className='text-4xlx'>교통사고 대분류</span>}</div>
                <div className='flex pr-2'>{bigButton}</div>



            </div>
            <div className='flex justify-between'>
                <div>{smallButton && <span className='text-4xlx'>교통사고 중분류</span>}</div>
                <div className='flex pr-2'>{smallButton}</div>
            </div>
            <div>
                {searchData}
            </div>


        </div>
    )
}
