const {h, render, Component } = require('ink');
const { TodoInput } = require('./components/TodoInput');
const { TodoList } = require('./components/TodoList');

class Todo extends Component {
  constructor() {
		super();

		this.state = {
      todoList: ['sample1', 'sample2'],
      inputMode: false
		};
  }

  addItem(text) {
    this.setState({
      todoList: [...this.state.todoList, text],
      inputMode: false
    });
  }

  changeInputMode(deleteItemIndexs){
    const nextTodoList = this.state.todoList.filter((_, index) => !deleteItemIndexs.includes(index.toString()));
    this.setState({
      todoList: nextTodoList,
      inputMode: true
    })
  }

  render() {
    return(
      <div>
        { this.state.inputMode?
          <TodoInput addItem={this.addItem.bind(this)} />
        :
          <TodoList
            todos={this.state.todoList}
            changeInputMode={this.changeInputMode.bind(this)}
          />
        }
      </div>
    );
  }

};

render(<Todo/>);
