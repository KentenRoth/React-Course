import React from "react"
import SearchBar from "./SearchBar"

const unsplash_key = process.env.REACT_APP_UNSPLASH_KEY
const unsplash_skey = process.env.REACT_APP_UNSPLASH_SKEY

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(unsplash_key)
        console.log(unsplash_skey)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App
