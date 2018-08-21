const { h, Component } = require('ink');
const { List, ListItem } = require('ink-checkbox-list');

exports.TodoList = ({todos, changeInputMode}) => {
  return(
    <List
      onSubmit={changeInputMode}
    >
      {todos.map((data, index) => {
        return (
          <ListItem
            value={index.toString()}
          >{data}</ListItem>);
      })}
    </List>
  );
};
