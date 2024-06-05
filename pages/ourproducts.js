const products = [
    {
      image: 'https://images.unsplash.com/photo-1685354218056-cb10c98b8c88?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 49.99
    },
    {
        image: 'https://images.unsplash.com/photo-1685354218056-cb10c98b8c88?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 49.99
      },
    {
        image: 'https://images.unsplash.com/photo-1685354218056-cb10c98b8c88?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 49.99
    },
    {
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 59.99
    },
    {
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 59.99
      },
      {
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 59.99
      },
      {
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 59.99
      },
      {
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 59.99
      },
      {
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 59.99
      },
    {
      image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
      name: 'Black T-shirt',
      description: '',
      price: 39.99
    },
    {
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      },
      {
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      },
      {
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      }
      ,{
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      },{
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      },
      {
        image: 'https://images.unsplash.com/photo-1620833072816-e879094a1475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Black T-shirt',
        description: '',
        price: 39.99
      },
      
  ];
  
  const productGrid = document.querySelector('.product-grid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productCard.appendChild(img);
  
    const title = document.createElement('h3');
    title.classList.add('product-title');
    title.textContent = product.name;
    productCard.appendChild(title);
  
    const details = document.createElement('div');
    details.classList.add('product-details');
  
    const description = document.createElement('p');
    description.textContent = product.description;
    details.appendChild(description);
  
    const price = document.createElement('p');
    price.textContent = `Price: ₹${product.price.toFixed(2)}`;
    details.appendChild(price);
  
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    details.appendChild(button);
  
    productCard.appendChild(details);
  
    productGrid.appendChild(productCard);
  });