import React from "react"

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
        }
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

   

    render() {
        const {userInput} = this.state
        return(
            <div>
                <form onSubmit={(e)=>this.props.handleSubmit(e,userInput)}>
                    <input 
                    type="text" 
                    name="userInput"
                    value={userInput}
                    onChange={this.handleInput}
                    />
                    <button type="submit">Search</button>
                </form>

            </div>
        )
    }
}
export default SearchBar;