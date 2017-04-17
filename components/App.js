import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json()).then(filters => this.setState({ filters: filters }));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json()).then(fruit => this.setState({ fruit: fruit }));
  }

  updateFilter(ev) {
    console.log('update filter to: ', ev.target.value);
    this.setState({ currentFilter: ev.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }
}
