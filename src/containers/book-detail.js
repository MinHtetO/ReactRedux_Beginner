import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){

        if(!this.props.book){
            console.log("Fucking No Book is selected");
            return <div>No Book is Selected</div>
        }
        return (
        <div>
                Title:: {this.props.book.title}<br/>
                Pages:: {this.props.book.pages}
                </div>
            );
    }
}

function mapStateToProps(state){
    return {
        book:state.selectedBook
    };
}

export default connect(mapStateToProps)(BookDetail);
