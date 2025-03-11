import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/fooddata.json'
import TailButton from '../ui/TailButton';


export default function FoodMain() {
  //맵으로 불러오기 카테고리
  let category = FoodData.map(item => item["운영주체 분류"].replaceAll(" ", ""));
  const [contents, setContents] = useState([]);
  //카테고리 중복 제거
  category = [...new Set(category)];

  //카테고리 수만큼 버튼 생성
  //{caption,color,onClick}

  const handleOnClick = (value) => {
    let fillterFoodData = FoodData.filter(item => item['운영주체 분류'].replaceAll(" ", "") == value);

    setContents(fillterFoodData.map(item => <FoodCard key={item["사업장명"]} res={item} />));
  }
  let categoryButton = category.map(item => <TailButton key={`${item}`} caption={item} color={'bg-blue-600'} onClick={() => handleOnClick(item)} />);








  return (
    //여기서 h를 풀로 안 해줘서 플렉스 박스가 짤렸음
    //TailButton({caption,color,onClick}
    <>
      <div className='flex'>
        {categoryButton}
      </div>
      <div className='grid grid-cols-2 overflow-y-auto gap-2'>
        {contents}
      </div>

    </>
  )
}




















// export default function FoodMain() {
//   //tags 생성
//   const [tags, setTags] = useState([]);
//   //setTags(FoodData.map(item => <FoodCard res={item} />));

//   let category = FoodData.map(item => item["운영주체 분류"].replaceAll(' ', ''));

//   //중복제거
//   category = [...new Set(category)];

//   const buttons = category.map(item => <TailButton key={item} caption={item} color={'bg-blue-400'} onClick={() => { handleOneClick(item) }} />)

//   const handleOneClick = (value) => {
//     let foodcard = FoodData.filter(item => (item["운영주체 분류"].replaceAll(' ', '') == value));
//     setTags(foodcard.map(item => <FoodCard res={item} />));

//   }

//   return (
//     //여기서 h를 풀로 안 해줘서 플렉스 박스가 짤렸음
//     //TailButton({caption,color,onClick}
//     <>
//         <div className='flex flex-row justify-center p-1'>
//           {buttons}
//         </div>
//         <div className='grid grid-cols-2 w-full gap-2 h-full overflow-y-auto'>
//         {tags}
//         </div>
//     </>
//   )
// }