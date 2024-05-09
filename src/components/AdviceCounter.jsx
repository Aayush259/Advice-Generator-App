import { useState } from "react";

function AdviceCounter() {

    let [adviceCount, setAdviceCount] = useState(1);

    return (
        <>
        <header id="adviceCount">
            <h1>Advice #{adviceCount}</h1>
        </header>
        </>
    )
}

export default AdviceCounter;