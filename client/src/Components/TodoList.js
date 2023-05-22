import {React } from 'react';
import { List } from '@mui/material';
import {ListItem} from '@mui/material';
import {ListItemSecondaryAction} from '@mui/material';
import {ListItemText} from '@mui/material';
import {Checkbox} from '@mui/material';
import {IconButton} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

const TodoList = ({ todos, updateTodo, deleteTodo}) => {

  const listItems = todos.map((todo) => 
  (<ListItem style={{ textDecoration : todo.isDone ? 'line-through' : 'none' }} key={todo.description} dense button>
    <ListItemText primary={todo.description} />
        <Checkbox checked={todo.isDone} onChange={() => updateTodo(todo)}/>
         <ListItemSecondaryAction><IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <DeleteForever />
            </IconButton></ListItemSecondaryAction>
        </ListItem>
      ));
  return (
 <List>
   {listItems}
  </List>
  )
};

export default TodoList;