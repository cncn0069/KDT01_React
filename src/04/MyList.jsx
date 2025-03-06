import React from 'react'
import MyListItem from './MyListItem'
import MyListData from './../assets/MyListData.json'



export default function MyList() {

    let check = 1;
    
    let tags=MyListData.map(item => <MyListItem key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content} check={check}/>)


    console.log(tags);

    const data = { "title" : "HTML",
        "imgUrl" : "../../public/img/html.png", 
        "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
      };

  return (
    <div className='w-full grid gap-0.5 grid-cols-2 max-md:grid-cols-1'>
        {tags}
    </div>
  )
}

//