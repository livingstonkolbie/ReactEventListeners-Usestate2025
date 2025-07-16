import { useState } from "react"

function ComplexState() {

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Complex State</h1>
            </div>
            <ComplexArray />
        </div>
    )
}

function ComplexArray() {

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    const thingsElement = thingsArray.map(
        (thing) => <p>{thing}</p>
    )

    function addItem() {
        const newThingText = <p>Thing {thingsArray.length + 1}</p>

        // '...' = spread operator, what it does = gets the entire array
        // NEW WAY of pushing items into an array (Push Method)
        setThingsArray(prevThingsArray => [...prevThingsArray, newThingText])
    }




    return (
        <div className="col-12">
            <h2>Complex Arrays</h2>
            <button onClick={addItem}>Add Item</button>
            {thingsElement}
        </div>
    )
}

export default ComplexState