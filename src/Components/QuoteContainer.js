import React from 'react';
import '../Quote.css';
import Quote from './Quote'
import quotes from '../Models/QuotesDB'

class QuoteContainer extends React.Component{

  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }
 
  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };



render(){
  return (
    <Quote
    displayColor={this.randomColor}
    handleClick={this.handleClick}
    {...this.state}
    >

    </Quote>
  );
}
}

export default QuoteContainer;
