import HelloDate from "./HelloDate";
    let name = undefined;
     name = "2";

function Hello(){
    return(
        <h1>
            {name == undefined? "이름이 존재하지 않습니다." : `${name}님 안녕하세요`}

        </h1>
        
    )
}

export default Hello;