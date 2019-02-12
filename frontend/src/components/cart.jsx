import React from 'react';
import '../App.css';

export default function Cart({ items, increase, decrease, remove }) {
  if (!items) {
    return null;
  }
  // console.log(items);
  return (
    <div className="row space-top">
      {items === '' || items.length === 0
        ? <div className="col px-5 bg-light mt-4 text-center">Your Cart is Empty. Shop now and add something</div>
        : (
          <div>
            <List items={items} increase={increase} decrease={decrease} remove={remove} />
            <Total items={items}/>
          </div>
        )
      }
    </div>
  );
}

function List({ items, increase, decrease, remove }) {
  return items.map((item, index) => {
    return (
      <div key={index} className="row px-5 bg-light mt-4">
        <div className="col-2">
          <img src={`./${item.name}.jpg`} alt="" className="img-thumbnail" />
        </div>
        <div className="col-6">
          <span className="text-info"> {item.name} </span>
          <span className="text-info"> ${item.price}</span>
        </div>
        <div className="col-2">
          <p>Quantity</p>
          <p>{item.quantity}</p>
        </div>
        <div className="col-2">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <button id={index} className="btn btn-outline-success" onClick={increase}>+</button>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Quantity" value={item.quantity} readOnly />
            <div className="input-group-append">
              <button id={index} className="btn btn-outline-success" onClick={decrease}>-</button>
            </div>
          </div>
          <button id={index} className="btn btn-outline-danger float-right" onClick={remove}>Delete</button>
        </div>
      </div>
    );
  });
}

function Total({ items }) {
  let total = 0;
  items.forEach((item) => {
    total += +item.price * +item.quantity;
  });
  return (
    <div className="row px-5 bg-light mt-4">
      <div className="ml-auto">
        Grand total $ <span className="font-weight-bold">{total}</span>
      </div>
    </div>
  );
}
