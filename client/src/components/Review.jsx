import React from "react";
import User from "./User.jsx";
import stars1 from "../../../public/assets/stars-1.png";
import stars2 from "../../../public/assets/stars-2.png";
import stars3 from "../../../public/assets/stars-3.png";
import stars4 from "../../../public/assets/stars-4.png";
import stars5 from "../../../public/assets/stars-5.png";
import Buttons from "./Buttons.jsx";
import styled from 'styled-components';

 const Date = styled.span`
  color: #666;
  text-align: left;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.28571em;
  vertical-align: top;
`;

const Comment = styled.div`
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.28571em;
  
`;

const ReviewContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  box-sizing: border-box;
  vertical-align: center;
`;

const ReviewDiv = styled.div`
  width: 608px;
  margin: 18px;
`;

const ReviewEntry = (props) => {

  let dateStrings = props.review.date.slice(0,10).split('-');
  let postDate = `${dateStrings[1]}/${dateStrings[2]}/${dateStrings[0]}`;

  let rating = stars1;
  if (props.review.rating === 5 ) {
    rating = stars5;
  } else if (props.review.rating === 4) {
    rating = stars4;
  } else if (props.review.rating === 3) {
    rating = stars3;
  } else if (props.review.rating === 2) {
    rating = stars2;
  }

  return (
    <ReviewContainer className="column review">
      <User review={props.review}/>
      <ReviewDiv className="list">
        <span>
          <img src={rating}/>
        </span>
        <Date>  {postDate}</Date>
        <Comment className="comment">{props.review.comment}</Comment>
        <Buttons />
      </ReviewDiv>
    </ReviewContainer>
  )
}




export default ReviewEntry;