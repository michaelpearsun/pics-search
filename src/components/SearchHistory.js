import React, { Component } from 'react'

export class SearchHistory extends Component {
    constructor(props) {
        super(props)
    
    }

    
    render() {
        console.log(this.props.searchQuery);
        
        return (
            <div>
                Search History: {this.props.searchQuery.map(term => <div>{term.term}</div> )}
            </div>
        )
    }
}

export default SearchHistory
