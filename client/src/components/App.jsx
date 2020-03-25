import React from "react";
import ReviewList from './ReviewList.jsx'
import $ from 'jquery';
import SetRating from './SetRating.jsx';
import styled from 'styled-components';

// import Header from '../styles.jsx';


const Header = styled.h3`
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: Math.floor(Math.random() * 100) + 1,
      reviews: [],
    };
  }

  componentDidMount() {
    // this.getReviews();
    this.getReviewsByRestaurant(this.state.restaurant);
  }

  // getReviews() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/reviews',
  //     success: (content) => {this.setState({reviews: content})},
  //     error: (err) => (console.log('error from get request: ', err))
  //   })
  // }


  getReviewsByRestaurant(id) {
    $.ajax({
      method: 'GET',
      url: `/api/restaurants/${id}/reviews`,
      success: (content) => {this.setState({reviews: content})},
      error: (err) => (console.log('error from get request: ', err))
    })
  }

  postReview(review) {
    $.ajax({
      method: 'POST',
      url: `/api/restaurants/${review.restaurant_id}/newreview`,
      // contentType: 'application/json',
      data: review,
      success: () => {this.getReviewsByRestaurant(this.state.restaurant)},
      error: (err) => (console.log('error from post request: ', err))
    })
  }

  render() {
    return (
      <div>
        <Header>Recommended Reviews</Header>
        <SetRating restaurant={this.state.restaurant} postReview={this.postReview.bind(this)}/>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
};

export default App;
