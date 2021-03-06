import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class Booklist extends React.Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					onClick={() => this.props.selectBook(book)}
					key={book.title}
					className="list-group-item"
				>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Booklist);
