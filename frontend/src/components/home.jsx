import React from 'react';
import '../App.css';

export default function({ add }) {
  return (
    <div className="col space-top">
      <div className="card-deck px-4">
        <div className="card">
          <img src="../bulb.jpg" className="img-fluid card-images" alt="..." />
          <div className="card-body">
          </div>
          <div className="card-footer">
            <h5 className="card-title">Some kinda bulb</h5>
            <p>$200</p>
            <button name="bulb" value="200" className="btn btn-outline-primary" onClick={add}>Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src="../tv.jpg" className="img-fluid card-images" alt="..." />
          <div className="card-body">
          </div>
          <div className="card-footer">
            <h5 className="card-title">Nice TV</h5>
            <p>$100</p>
            <button name="tv" value="100" className="btn btn-outline-primary" onClick={add}>Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src="../touch.jpg" className="img-fluid card-images" alt="..." />
          <div className="card-body">
          </div>
          <div className="card-footer">
            <h5 className="card-title">Cool touch</h5>
            <p>$50</p>
            <button name="touch" value="50" className="btn btn-outline-primary" onClick={add}>Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src="../speaker.jpg" className="img-fluid card-images" alt="..." />
          <div className="card-body">
          </div>
          <div className="card-footer">
            <h5 className="card-title">Heavy sounds</h5>
            <p>$300</p>
            <button name="speaker" value="300" className="btn btn-outline-primary" onClick={add}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
