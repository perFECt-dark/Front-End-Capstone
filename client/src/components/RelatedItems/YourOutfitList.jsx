import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitCard';
import AddProductCard from './AddProductCard';

function YourOutfitList({ productId, grabInfo }) {
  const [outfitIds, setOutfitIds] = useState(JSON.parse(window.localStorage.getItem('outfits')) || []);
  function handleAddProduct() {
    if (outfitIds.indexOf(productId) === -1) {
      const temp = [...outfitIds, productId];
      window.localStorage.setItem('outfits', JSON.stringify(temp));
      setOutfitIds(current => [...current, productId]);
    }
  }
  function handleDeleteId(oldProductId) {
    const temp = outfitIds.filter((id) => id !== oldProductId);
    console.log('This is temp in delete function', temp);
    window.localStorage.setItem('outfits', JSON.stringify(temp));
    setOutfitIds(temp);
    console.log('This it outfitIds at the end of delete function', outfitIds);
    console.log('This it temp at the end of delete function', temp);
  }

  const [index, setIndex] = useState(0);
  function updateIndex(newIndex, goingRight) {
    console.log('Right button called', index);
    if (goingRight) {
      setIndex((index + 0.25));
    } else {
      setIndex((index - 0.25));
    }
  }

  return (
    // <section className="card-row">
    //   <div className="card-grid">
    //     <section>
    //       <div className="card-title">
    //         Your Outfit
    //       </div>
    //       {console.log('These are the outfitIds in the return', outfitIds)}
    //       {console.log('This is what is in localStorage.outfits', window.localStorage.getItem('outfits'))}
    //       <AddProductCard addToOutfits={handleAddProduct} />
    //       { outfitIds.length > 0
    //         && outfitIds.map((someCardId) => (
    //           <YourOutfitCard
    //             yourOutfitId={Number(someCardId)}
    //             grabInfo={grabInfo}
    //             handleDeleteId={handleDeleteId}
    //           />
    //         ))}
    //     </section>
    //   </div>
    // </section>
    <section className="row">
      <div className="grid">
        <div className="card-title">
          Your Outfit
          <button className="add-the-product" onClick={handleAddProduct}>Add Current Product</button>
        </div>
        <div className="col-5">
          {index !== 0
            && <button className="carousel-buttons" onClick={() => {updateIndex(index, false)}}>←</button> }
        </div><aside className='col-90'>
        <div className="related-products-carousel">
          <div className="inner" style={{ transform: `translateX(-${index * 100}%)` }}>
          {console.log('These are the outfitIds in the return', outfitIds)}
          {console.log('This is what is in localStorage.outfits', window.localStorage.getItem('outfits'))}
          { outfitIds.length > 0
            && outfitIds.map((someCardId) => (
              <YourOutfitCard
                yourOutfitId={Number(someCardId)}
                grabInfo={grabInfo}
                handleDeleteId={handleDeleteId}
                setIndex={setIndex}
              />
            ))}
          </div>
        </div>
        </aside><aside className='col-5'>{index < ((outfitIds.length * 0.25) - 1)
            && <button className="carousel-buttons" onClick={() => {updateIndex(index, true)}}>→</button> }</aside>
      </div>
    </section>
  );
}

YourOutfitList.propTypes = {
  productId: propTypes.string.isRequired,
  grabInfo: propTypes.func.isRequired,
};

export default YourOutfitList;
