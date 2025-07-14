import { useState } from "react"

function State() {

    // 1st way to call state
    // const result = useState('No');
    // console.log(result[0]) // gives me the data being saved
    // console.log(result[1]) // gives me a function to update the data being saved

    // ACTUAL way to call state
    // "useState" variable is a way to track data, but If "React" sees this variable get updated, it will RE-RENDER this FUNCTION COMPONENT
    const [result, setResult] = useState('No')
    // left side shows the DATA being stored
    // right side is a function to change/manipulate the DATA
    console.log(result)

    function changeAnswer() {
        setResult('Yes')
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>State</h1>
                <h3 onClick={changeAnswer}>Is State Important?</h3>
            </div>
            <div className="col-12">
                <h4>{result}</h4>
            </div>
        </div>
    )
}

export default State