import React from 'react';





const ImageUpload = (props) => {

  var url = 'url("' + props.photo + '")';

  const deleteImg = () => {

    var newArray = [...props.arr];
    newArray.splice(props.index, 1);

    console.log(newArray);
    console.log('Index: ', props.index);

    props.delete(newArray);
  }

const Image = {

    border: '1px solid grey',
    borderRadius: '3px',
    float: 'left',
    width:  '80px',
    height: '120px',
    margin: '5px 5px',
    backgroundSize: '100% 100%',
    backgroundImage: url,
    textAlign: 'right'
}

return (

  <div style={Image}><button className="deleteImg" onClick={deleteImg}> X </button></div>
)

}




export default ImageUpload;