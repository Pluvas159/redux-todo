import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>
          Add #{this.props.length + 1}
        </button>
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    
    this.props.onSubmit(this.state.text);
    this.setState({text: ''});
  }
}

const mapStateToProps = state => ({
  length: state.todos.length
})

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(actions.addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);