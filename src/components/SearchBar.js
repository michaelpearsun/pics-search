import React, { Component } from 'react'
import SearchHistory from './SearchHistory';


export class SearchBar extends Component {  
    constructor(props) {
        super(props)
    
        this.state = {
            term: '',
             history: [

             ]
        }
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.term);
        this.setState({history: this.state.history.concat({term: this.state.term})});
        console.log('onSubmit', this.props.onSubmit(this.state.term));
    }

    render() {
        console.log('state', this.state.term);
        console.log('onChange', this.onChange);
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
                <div>
                    <SearchHistory searchQuery={this.state.history}/>
                </div>
            </div>
        )
    }
}

export default SearchBar
