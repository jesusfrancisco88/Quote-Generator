


const fetchQuote = async () => {
  try {
    const timeStamp = new Date().getTime();
    const url = `https://quote-garden.onrender.com/api/v3/quotes?time=${timeStamp}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data[Math.floor(Math.random() * data.data.length)]);
    return data.data[Math.floor(Math.random() * data.data.length)];    
  } catch (error) {
    throw new Error(`Error Message: ${error.message}`)
  }
}


export const quoteGen = async ( element ) => {
  element.innerHTML = `<span class='loading-message'>Loading...</span>`;

  //* HTML/CSS //*
  const button = document.createElement('button');
  button.innerText = 'random'
  button.classList.add('button');

  const quote = document.createElement('blockquote');
  quote.classList.add('quote')

  const author = document.createElement('h2');
  author.classList.add('author');

  const category = document.createElement('p');
  category.classList.add('category')



  //* Render //*
  const renderQuote = ( data ) => {
    quote.innerHTML = `"${data.quoteText}"`;
    author.innerHTML = `${data.quoteAuthor}`;
    category.innerHTML = `${data.quoteGenre}`;

    element.replaceChildren(quote,author,category, button);
  }
  
  //* Button
  button.addEventListener('click', function() {
    element.innerHTML = `<span class='loading-message'>Loading...</span>`;

    fetchQuote()
    .then( data => renderQuote(data) )
    .catch( error => console.error(error.message) );
  })

  fetchQuote()
  .then( data => renderQuote(data) )
  .catch( error => console.error(error.message) );
}