


let clickTrue = false;


export default function TailButton({caption,color,onClick}) {
  

  return (
      <div className={`w-27 border-2 ${color} hover:bg-amber-300 hover:cursor-pointer rounded-2xl text-center`} onClick={onClick}>{`${caption}`}</div>
  )
}
