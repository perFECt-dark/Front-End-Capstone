import React, {useState, useEffect} from 'react';





const ReviewImage = (props) => {

  var url = 'url("' + props.photo.url + '")'

const Image = {

    float: 'left',
    width:  '50px',
    height: '60px',
    backgroundSize: '100% 100%',
    backgroundImage: url
}

return (

  <div style={Image}></div>
)

}




export default ReviewImage;