const { h, Component } = require('ink');
const TextInput = require('ink-text-input');

class TodoInput extends Component {
  constructor(props) {
    super(props);

		this.state = {
			value: ''
    };
  }

	handleChange(value) {
		this.setState({
			value
    });
	}

  render() {
		return (
			<div>
				TODOを入力してください:
				<TextInput
					value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.props.addItem}
				/>
			</div>
		);
	}
}

exports.TodoInput = TodoInput;
