import React from 'react';

export default class TodolList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      newList: ''
    };
    this.writeTodoList = this.writeTodoList.bind(this)
    console.log(this.state);
  }

  componentDidMount() {
    console.log('componentDidMount');

  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
  }

  writeTodoList()
  {
    console.log(this);
    console.log(this.state);
    // const newList = this.state.todoList.concat(value);
    this.setState(prevState => ({
      todoList: prevState.todoList.concat(prevState.newList)
    }));
  }
  
  handleChange(e)
  {
    this.setState({
      newList: e.target.value
    })
  }

  render() {
    return (
      <div>
      <h1>
        TodolList
      </h1>
      {this.state.todoList.map((todo, index) => 
        <li key={index}> {todo} </li>
      )}
      <input type="text" value={this.state.newList} onChange={ this.handleChange.bind(this) }  ></input>
      <button onClick={this.writeTodoList}>
        추가하기
      </button>
      </div>
    )
  }
}
