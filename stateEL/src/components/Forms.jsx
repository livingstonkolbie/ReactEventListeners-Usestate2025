import { useState } from "react"


function Forms() {

    const [formDataAll, setFormDataAll] = useState([])

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        isFriendly: "",
        favColor: ""
    })

    // something is messed up BELOW
    function handleEvent(event) {
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        // this prevents the page from refreshing
        event.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>Forms</h1>
            </div>
            <div className="col-6">
                <form onSubmit={handleSubmit}>

                    <input type="text" placeholder="First Name" name="firstName" onChange={handleEvent} value={formData.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" onChange={handleEvent} value={formData.lastName} />
                    <input type="checkbox" name="isFriendly" value={formData.isFriendly} checked={formData.isFriendly} onChange={handleEvent} />
                    <label htmlFor="isFriendly">Are you friendly?</label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms