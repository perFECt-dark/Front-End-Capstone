import React, { useState, useEffect }from 'react';
import StarRating from '../StarRating';
import ImageUpload from './ImageUpload';


function ReviewModal(props) {

const [summary, setSummary] = useState('');
const [body, setBody] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [uploads, setUploads] = useState(['https://i.ibb.co/jvBxzTQ/bgbrain2.png', 'https://i.ibb.co/GpB2xL2/bgbrain3.png']);

const [toggleUpload, setToggleUpload] = useState(true);

useEffect(() => {

  if (uploads.length < 5) {
    setToggleUpload(true);
  } else {
    setToggleUpload(false);
  }

}, [uploads]);

const addUpload = () => {

  var val = document.getElementById('uploadText').value;
  document.getElementById('uploadText').value = '';

  setUploads(current => [...current, val]);
}


return (

  <div className="ReviewModalBackground" >

    <div className="ReviewModalContainer">
      <div className="titleCloseBtn">
        <button className="closeBtn" onClick={() => props.close(false)}> X </button>
      </div>
      <div className="ReviewModalTitle">
        <h2>Write Your Review</h2>
        <h3>About the {props.title}</h3>
      </div>
      <div className="ReviewModalBody">

        <form>
          <label className="labelModal">Review Summary</label>
          <input type="text"
           required
           placeholder="Example: Best purchase ever!"
           />
          <label className="labelModal">Review Body</label>
          <textarea required
          placeholder="Why did you like the product or not?">
          </textarea>
          <label className="labelModal">Display Name</label>
          <input type="text"
           required
           placeholder="Example: jackson11!"
           />
          <label className="labelModal">Email</label>
          <input type="text"
           required
           placeholder="Example: jackson11@email.com"
           style={{marginBottom: '0'}}
           />
          <div style={{textAlign: 'right', marginBottom:'20px'}}><p>For authentication reasons, you will not be emailed</p></div>
          <div>
            <div className="col-1-2">
              <label className="labelModal">Size</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </div><aside className="col-1-2">
              <label className="labelModal">Width</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </aside>
          </div>
          <div>
            <div className="col-1-2">
              <label className="labelModal">Comfort</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </div><aside className="col-1-2">
              <label className="labelModal">Quality</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </aside>
          </div>
          <div>
            <div className="col-1-2">
              <label className="labelModal">Length</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </div><aside className="col-1-2">
              <label className="labelModal">Fit</label>
              <div style={{textAlign: 'left'}}><StarRating size={30}/></div>
            </aside>
          </div>
          <label className="labelModal">Add Images by URL</label>

        </form>
        <div style={{textAlign: 'left'}}><p><a href="https://imgbb.com/" target="_blank">
            You can upload your pictures here and get a URL!</a></p></div>
          {toggleUpload && <div>
            <div className="col-2-3"><input type="text" id="uploadText"
            required
            placeholder="Example: https://i.ibb.co/XWY0Jtr/bgbrain1.png"
            />
            </div><aside className="col-1-3" style={{textAlign: 'left', paddingLeft: '0px'}}>
              <button className="uploadBtn" onClick={addUpload}>Upload</button>
            </aside>
           </div>}
           <div>
            {uploads.length !== 0 && uploads.map((url, i) =>
              <ImageUpload photo={url} index={i} delete={setUploads} arr={uploads}/>
              )}
           </div>



      </div>
      <div className="ReviewModalFooter"><button onClick={() => alert('This is turned off')}>Submit Review</button></div>

    </div>
  </div>
)

}




export default ReviewModal;