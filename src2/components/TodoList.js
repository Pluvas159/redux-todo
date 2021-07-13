import React from 'react';

import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.todos
})

export default connect(
  mapStateToProps,
)(TodoList);