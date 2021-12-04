import React from "react"

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            userInput = "",
        }
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        
    }

    render() {
        const {userInput} = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="userInput"
                    value={userInput}
                    onChange={this.handleInput}
                    />
                    <button>Search</button>
                </form>

            </div>
        )
    }
}
export default SearchBar;