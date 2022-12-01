import React, {useState, useEffect} from 'react';





const ReviewImage = (props) => {


const Image = {

    float: 'left',
    width:  '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg")'
}

return (

  <div style={Image}></div>
)

}




export default ReviewImage;