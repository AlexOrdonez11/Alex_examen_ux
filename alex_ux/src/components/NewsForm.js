import React, { Component } from 'react';

class NewsForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      Source: '',
      Info: '',
      Informed: '0'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddNoticia(this.state);
    this.setState({
      title: '',
      Source: '',
      Info: '',
      Informed: '0'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Source"
              className="form-control"
              value={this.state.Source}
              onChange={this.handleInputChange}
              placeholder="Source"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Info"
              className="form-control"
              value={this.state.Info}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default NewsForm;
