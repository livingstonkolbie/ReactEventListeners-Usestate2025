

function EventListeners() {

    // these types of functions (NOT FUNCTIONAL COMPONENTS) will be made above the return statement and inside the functional components
    function handleClick() {
        console.log("I'm Clicked")
    }

    function imgHover() {
        console.log("You have hovered the image!")
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>Event Listeners</h1>
            </div>
            <div className="col-12">
                {/* Dont attach the "()" to the function name, it will auto run */}
                {/* Event Listeners are now going to be attached to HTML elements (camelCased) */}
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" />
            </div>
            <div className="col-12">
                <button onClick={handleClick}>Click Me!</button>
            </div>
        </div>
    )
}

export default EventListeners