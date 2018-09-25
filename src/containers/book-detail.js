import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

class BookDetail extends React.Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>
				<div>{this.props.book.pages}</div>

			</div>
		);
	}
}

export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(BookDetail);
