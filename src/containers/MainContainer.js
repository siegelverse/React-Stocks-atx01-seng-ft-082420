import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const stocksUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  constructor() {
    super()
  
    this.state = {
      stocks: [],
      portfolioStocks: [],
      searchTerm: ""
    }
  }

  componentDidMount = () => {
    fetch(stocksUrl)
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        stocks 
      })
      
    })
  }
  purchaseStock = (stock) => {
    console.log("bought stock", stock)
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  sellStock = (soldStock) => {
    console.log("stock sold", soldStock)
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(stock => stock.id != soldStock.id)
    })
  }

  handleSearch = (e) => {
    let {value} = e.target
    this.setState({
      searchTearm: value,
      filteredStocks: this.state.stocks.filter(stock => stock.name.includes(this.state.searchTerm))
    })
  }

  render() {
  
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>

          <div className="row">
            <div className="col-8">
                <StockContainer stocks={this.state.searchTerm.length > 0 ? this.state.filteredStocks : this.state.stocks} pStocks={this.state.portfolioStocks} sellStock={this.sellStock} purchaseStock={this.purchaseStock}/>
            </div>
            
            <div className="col-4">  
                <PortfolioContainer stocks={this.state.stocks} pStocks={this.state.portfolioStocks} sellStock={this.sellStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
