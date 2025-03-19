import React from 'react'
import TailCation from './TailCation'

export default function TailCard({ title, subtitle, imgurl, kws }) {

    kws = kws.split(",");
    kws = kws.map(item => item.trim());
    kws = kws.map(item => <TailCation key={item} caption={item} />);

    return (
        <div className='w-full'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" className=''>
                    <img className="rounded-t-lg h-56 w-100" src={imgurl} alt="" />
                </a>
                <div className="p-5">
                    <a href="#" className=''>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                    <div>
                        {kws}
                    </div>
                </div>
            </div>




        </div>
    )
}


