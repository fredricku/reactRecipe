import React from 'react';
import StarsRating from 'react-stars-rating';

class Stars extends React.Component {
  render() {
    return (
      <StarsRating rating={3} classNamename="StarRating" caption="Medium!" size={80}/>
    );
  }
}
export default Stars;
