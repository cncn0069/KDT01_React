import React, { useEffect, useRef, useState } from 'react'
import TailCard from '../../UI/TailCard'
import TailButton from '../../UI/TailButton'

export default function Gallery() {
    const searchValue = useRef();

    const [keyWord, setKeyWord] = useState("");

    const [tdata, setTdata] = useState([]);

    const [tags, setTags] = useState();

    const handleOnclick = ()=>{

        //검색창의 검색어를 가져옴
        if(searchValue.current.value == "")
        {
            alert("검색어를 입력하세요.");
            searchValue.current.focus();
        }else{
            setKeyWord(searchValue.current.value);
        }
        

    }

    const handleOnclick2 = ()=>{

        //검색창의 검색어를 가져옴
    searchValue.current.value = "";
    setTags([]);


    }

    const getFecth = async ()=>{
        const API_KEY = import.meta.env.VITE_Traffic_API_KEY;
        const SEARCH_KEY = encodeURIComponent(keyWord);

        let URL = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey="
        + API_KEY
        + "&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword="
        + SEARCH_KEY
        + "&_type=json";
        console.log(URL);
        const resp = await fetch(URL);
        const data = await resp.json();
        console.log(data);

        setTdata(data.response.body.items.item);
        console.log(tdata);
    }

    useEffect(()=>{
        setTags(tdata.map(item=> <TailCard key={item.galContentId} imgurl={item.galWebImageUrl} title={item.galTitle} subtitle={item.galPhotographyLocation} kws={item.galSearchKeyword} />))
    },[tdata]);


    //keyWord의 값이 변하면
    useEffect(()=>{  
        if(setKeyWord != null && !(keyWord == ""))
        {
            getFecth();
        }
    },[keyWord]);

    

    return (
        <div className='w-full mb-5 h-screen'>
            <div className='flex items-center justify-center w-full p-5 shadow-sm mb-5'>
                <form class="flex items-center w-2/3 mr-3">
                    <div className="relative w-full">
                        <input ref={searchValue} type="text" id="simple-search" className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-1 p-2.5  dark:bg-gray-700
                         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         placeholder="검색할 단어를 입력하세요." required />
                    </div>

                </form>
                <div className='flex w-1/3'>
                    <TailButton caption={"확인"} color={"bg-blue-500"} onClick={handleOnclick}/>
                    <TailButton caption={"취소"} color={"bg-blue-500"} onClick={handleOnclick2}/>
                </div>

            </div>
            <div className='grid grid-cols-3 gap-2 h-full mb-30'>
                {tags}
            </div>

                
            </div>
    )
}
// "galContentId": "2988721",
// "galContentTypeId": "17",
// "galTitle": "태종대유원지",
// "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg",
// "galCreatedtime": "20230519164047",
// "galModifiedtime": "20230519164107",
// "galPhotographyMonth": "202206",
// "galPhotographyLocation": "부산광역시 영도구 동삼동",
// "galPhotographer": "한국관광공사 송재근",
// "galSearchKeyword": "태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
// /https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ed%83%9c%ec%a2%85%eb%8c%80&_type=json