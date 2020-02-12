import React, { Component } from "react";
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
      errorMessage: ""
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error message={this.state.errorMessage} />;
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    )
  }
}

export default News;