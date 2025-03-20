import React from 'react'


//category SET 형식으로 중복되지 않게 category만 넣도록하자
//ref useRef
//defalut 기본적으로 선택될 옵션 저장
export default function TailSelectBox({defalutValue, category, ref, onChange}) {
  //옵션 값
 
  let tags = category.map(item => <option key={item} value={item}>{item}</option>);


  return (
      <form className="max-w-sm mx-auto min-h-2 mb-5">
                <select ref={ref} onChange={onChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={defalutValue}>{defalutValue}</option>
                    {tags !=null ?tags:<></>}
                </select>
            </form>

  )
}
