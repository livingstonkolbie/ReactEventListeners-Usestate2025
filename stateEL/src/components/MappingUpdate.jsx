import React from "react"
 
function MappingUpdate() {
 
    //! React doesn't look at local arrays. Bc of that it isn't Re-rendering our HTML Page
    // const thingsArray = ['Thing 1', 'Thing 2'];
 
    //* a "useState" Variable.
    const [things, setThings] = React.useState(['Thing 1', 'Thing 2'])
   
 
 
    //! OLD
    // function addItem() {
    //     const newThingText = `Thing ${thingsArray.length + 1}`
    //     thingsArray.push(newThingText)
    //     console.log(thingsArray)
    // }
 
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
 
 
        setThings(prevState => [...prevState, newThingText]);
    }
 
    const thingsElement = things.map(
    (thing) => {
        return <p>{thing}</p>
    }
    )
 
    return (
        <div className="row">
            <div className="col-12">
                <h1>Mapping Update</h1>
                <button onClick={addItem}>Add Item</button>
                {thingsElement}
            </div>
        </div>
    )
}

export default MappingUpdate