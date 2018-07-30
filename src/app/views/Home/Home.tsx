import './Home.scss';

import * as React from 'react';
const { connect } = require('react-redux');

import { IStore } from 'app/redux';
import { ITodoState, ITodo, TodoActions } from '../../redux/todo';

interface IHomeProps {
  todo: ITodoState;
  findAll?: () => void;
}

@connect(
  ({ todo }: IStore) => ({ todo }),
  (dispatch) => ({
    findAll: () => dispatch({ type: TodoActions.findAll.default() })
  })
)
export default class Home extends React.Component<IHomeProps, {}> {
  componentDidMount() {
    this.props.findAll();
  }

  public render() {
    return (
      <section className="Home">
        {this.renderTodos()}
      </section>
    );
  }

  renderTodos = (): JSX.Element[] =>
    this.props.todo.entities ? this.props.todo.entities.map(this.renderTodo) : null

  renderTodo = (todo: ITodo, index: number) =>
    <li key={'todo' + index}>{todo.title}</li>
}
