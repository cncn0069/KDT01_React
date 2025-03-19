


let clickTrue = false;


export default function TailButton({caption,color,onClick}) {
  

  return (
      <div className={`flex justify-center items-center w-full p-2 border-2 mr-2 rounded-2xl ${color} hover:cursor-pointer hover:bg-orange-300 rounded-2xl`} onClick={onClick}>{`${caption}`}</div>
  )
}
