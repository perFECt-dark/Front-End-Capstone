import React, {useState, useEffect} from 'react';





const ReviewImage = (props) => {

  var url = 'url("' + props.photo.url + '")'

const Image = {

    float: 'left',
    width:  '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundImage: url
}

return (

  <div style={Image}></div>
)

}




export default ReviewImage;