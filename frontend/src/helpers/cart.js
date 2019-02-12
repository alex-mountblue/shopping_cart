export async function viewCart() {
  const response = await fetch('http://localhost:3001/cart');
  return response.json();
}

export async function addToCart(payload) {
  console.log(payload);
  const url = 'http://localhost:3001/cart';
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  }
  let result = await fetch(url, options);
  // result = await result.json();
  console.log(result);
}

export async function updateCart(payload) {
  const url = 'http://localhost:3001/cart';
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  }
  let result = await fetch(url, options);
  // result = await result.json();
  console.log(result);
}

export async function removeItem(payload) {
  console.log('removeItem', payload);
  const url = 'http://localhost:3001/cart';
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  }
  let result = await fetch(url, options);
  // result = await result.json();
  console.log(result);
}
