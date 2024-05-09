import { useState, useEffect } from "react";
import AdviceCounter from "./AdviceCounter";

function Advice() {

    // Initializing state for adviceID and the advice to null.
    let [adviceID, setAdviceID] = useState(null);
    let [advice, setAdvice] = useState(null);

    // Fetching adviceData from API.
    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then((adviceData) => {

            // Setting Advice in state using setAdvice setter.
            setAdvice(adviceData.slip.advice);
            // Setting AdviceID in state using setAdviceID setter.
            setAdviceID(adviceData.slip.id);

        })
        .catch(error => console.log("Error:", error))
    }, []);

    if (advice === null) {
        return (
            <>
            <div id="loader">Loading...</div>
            </>
        )
    }

    return (
        <>
            <div id="advice">
                <AdviceCounter adviceID={adviceID} />
                <p>&ldquo;{advice}&rdquo;</p>
            </div>
            <div id="patternDivider"></div>
        </>
    )
}

export default Advice;