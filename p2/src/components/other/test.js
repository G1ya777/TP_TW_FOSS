import {useEffect, useState} from "react";


function Test() {

    const [state,setState] = useState();
    const handleS = (v) =>  setState(v);

    useEffect(()=> {setState("hello world")},[state])


    return ( <div>
        <h>{state}</h>
    </div> );
}

export default Test;