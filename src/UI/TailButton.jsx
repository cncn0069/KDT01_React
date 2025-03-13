


let clickTrue = false;


export default function TailButton({caption,color,onClick}) {
  

  return (
      <div className={`p-2 border-2 rounded-2xl ${color} hover:bg-amber-300 hover:cursor-pointer rounded-2xl text-center`} onClick={onClick}>{`${caption}`}</div>
  )
}
