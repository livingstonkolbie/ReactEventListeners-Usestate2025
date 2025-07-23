import { useState } from "react"

function ComplexState() {

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Complex State</h1>
            </div>
            {/* <ComplexArray /> */}
            <ComplexObjects />
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

function ComplexObjects() {

    const [contact, setContact] = useState({
        firstName: "Zach",
        lastName: "Von",
        phone: "+1 (555) 555-5555",
        email: "zach.dubroc@mscoding.org",
        isFavorite: false,
        age: 32
    })

    function toggleFavorite() {
        // "..." spread operator does the same as arrays.
        // "...prevContact" grabs entire object being stored in State variable
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <div className="col-12">
            <h2>Complex Objects</h2>
            <div className="row">
                <div className="col-4">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <ComplexObjectsFav fav={contact.isFavorite} handleClick={toggleFavorite} />
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </div>
        </div>
    )
}

function ComplexObjectsFav({fav, handleClick}) {
    console.log(fav)
    console.log(handleClick)

    let favorite = fav ? "favoriteTrue" : "favoriteFalse"

    return (
        <div className="">
            <div onClick={handleClick} className={`text-center ${favorite}`}>X</div>
        </div>
    )
}

export default ComplexState