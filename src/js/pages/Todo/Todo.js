import React, { Component } from 'react';
import './styles.scss';


class Todo extends Component {
  constructor(props) {
    console.log('--- Todo : constructor ---');
    super(props);
    this.state = {
      dialogue: 'Hi',
    };
    this.sayInput = React.createRef();
    this.clickHandle = this.clickHandle.bind(this);
  }
  componentDidMount() {
    console.log('--- Todo : componentDidMount ---');
  }
  clickHandle() {
    const sayInputValue = this.sayInput.current.value;
    this.setState({ dialogue: sayInputValue });
    this.sayInput.current.value = '';
  }
  render() {
    console.log('--- Todo : render ---');
    return (
      <div>
        <h1>Todo List</h1>
        <div className="card wrapper-say">
          <div className="card-body">
            <h5 className="card-title">Say Hi</h5>
            <h6 className="card-subtitle mb-2 text-muted">pleace say hi</h6>
            <div className="card-text">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="say something"
                  ref={this.sayInput}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary btn-say"
                    type="button"
                    onClick={this.clickHandle}
                  >say
                  </button>
                </div>
              </div>
            </div>
            <div className="Dialogue">
              {this.state.dialogue}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
