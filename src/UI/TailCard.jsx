import React from 'react'
import TailCation from './TailCation'

export default function TailCard({ title, subtitle, imgurl, kws }) {

    kws = kws.split(",");
    kws = kws.map(item => item.trim());
    kws = kws.map(item => <TailCation key={item} caption={item} />);


    //제목 누르면 복사하기
    const handleOnClip = async ()=>{
        try{
            await navigator.clipboard.writeText(title);
            alert("제목이 복사되었습니다.");
        
        }catch{
            alert("다시 시도하세요.");
        }
    }

    return (
        <div className='w-full'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" className=''>
                    <img className="rounded-t-lg h-56 w-100" src={imgurl} alt="" />
                </a>
                <div className="p-5">
                    <a href="#" className=''>
                        <h5 onClick={handleOnClip} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                    <div>
                        {kws}
                    </div>
                </div>
            </div>




        </div>
    )
}


