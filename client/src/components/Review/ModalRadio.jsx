import React, { useState, useEffect } from 'react';


const ModalRadio = (props) => {

  const [rating, setRating] = useState(null);
  const buttonData = [
    ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  ];

  const mapBtnNames = () => {

    if (props.name === 'SizeRating') {
      return buttonData[0];
    } else if (props.name === 'WidthRating') {
      return buttonData[1];
    } else if (props.name === 'ComfortRating') {
      return buttonData[2];
    } else if (props.name === 'QualityRating') {
      return buttonData[3];
    } else if (props.name === 'LengthRating') {
      return buttonData[4];
    } else if (props.name === 'FitRating') {
      return buttonData[5];
    }
  }

  var btnData = mapBtnNames();

  useEffect(() => {

    if (props.set !== undefined) {
      props.set(props.name, Number(rating));
    }
  },[rating]);

  return (

    <div style={{textAlign: 'left', padding: '5px 0px'}}>

      <label className="labelModal">{props.title}</label>
      <div style={{marginTop: '5px', backgroundColor: '#f5f4f2'}}>
      <div className="col-1-5" style={{textAlign: 'center', padding: '0px 5px'}}>
          <input type="radio" name={props.name} value={1} onClick={(e) => setRating(e.target.value)} required/>
          <p>{btnData[0]}</p>
      </div><aside className="col-1-5" style={{textAlign: 'center', padding: '0px 5px'}}>
          <input type="radio" name={props.name} value={2} onClick={(e) => setRating(e.target.value)} required/>
          <p>{btnData[1]}</p>
      </aside><aside className="col-1-5" style={{textAlign: 'center', padding: '0px 5px'}}>
          <input type="radio" name={props.name} value={3} onClick={(e) => setRating(e.target.value)} required/>
          <p>{btnData[2]}</p>
      </aside><aside className="col-1-5" style={{textAlign: 'center', padding: '0px 5px'}}>
          <input type="radio" name={props.name} value={4} onClick={(e) => setRating(e.target.value)} required/>
          <p>{btnData[3]}</p>
      </aside><aside className="col-1-5" style={{textAlign: 'center', padding: '0px 5px'}}>
          <input type="radio" name={props.name} value={5} onClick={(e) => setRating(e.target.value)} required/>
          <p>{btnData[4]}</p>
      </aside>
      </div>



    </div>


  )
}


export default ModalRadio;




//// Old stuff I want to keep

/* <div>
            <div className="col-1-2">
              {props.chars.length > 0 && <div><label className="labelModal">{props.chars[0]}<span>Hello</span></label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[0]}Rating`}/></div></div>}
            </div><aside className="col-1-2">
              {props.chars.length > 1 && <div><label className="labelModal">{props.chars[1]}</label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[1]}Rating`}/></div></div>}
            </aside>
          </div>
          <div>
            <div className="col-1-2">
              {props.chars.length > 2 && <div><label className="labelModal">{props.chars[2]}</label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[2]}Rating`}/></div></div>}
            </div><aside className="col-1-2">
              {props.chars.length > 3 && <div><label className="labelModal">{props.chars[3]}</label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[3]}Rating`}/></div></div>}
            </aside>
          </div>
          <div>
            <div className="col-1-2">
              {props.chars.length > 4 && <div><label className="labelModal">{props.chars[4]}</label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[4]}Rating`}/></div></div>}
            </div><aside className="col-1-2">
              {props.chars.length > 5 && <div><label className="labelModal">{props.chars[5]}</label>
              <div style={{textAlign: 'left'}}><StarRating size={30} set={setChar} name={`${props.chars[5]}Rating`}/></div></div>}
            </aside>
          </div> */