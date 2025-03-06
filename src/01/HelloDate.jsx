function HelloDate() {

    let date = new Date();

    let day = date.getDate();
    let year = date.getFullYear();
    let month = String(date.getMonth()+1).padStart(2,"0");

    let fullDay = year + "-" + month + "-" + day;

    const tStyle = {
        backgroundColor : "aliceblue",
        padding : "5px",
        fontSize : "large",
    }


    return (
            <span style={tStyle}>{fullDay}</span>
    )
}

export default HelloDate;