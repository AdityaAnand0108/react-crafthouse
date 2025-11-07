import {memo} from "react";

function Navbar({num}) {
    console.log("Child has been rendered")
    return (
        <>
            <h1> Hi my name is Aditya and the number right now is greater than {num}</h1>
        </>
    )
}

export default memo(Navbar)