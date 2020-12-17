import React, { Component } from 'react'

export class SearchHistory extends Component {
    constructor(props) {
        super(props)
    
       // this.handleQuery=this.handleQuery.bind(this);
    }

    // handleQuery(props) {
    //     this.setState({ state: props.searchQuery }, () => {})
    //     console.log('history', this.state.history)
    // }
    
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
