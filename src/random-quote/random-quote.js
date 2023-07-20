


const fetchQuote = async () => {
  try {
    const timeStamp = new Date().getTime();
    const url = `https://quote-garden.onrender.com/api/v3/quotes?time=${timeStamp}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data[Math.floor(Math.random() * data.data.length)];    
  } catch (error) {
    throw new Error(`Error Message: ${error.message}`)
  }
}





export const quoteGen = async ( element ) => {




  
  fetchQuote()
  .then(data => console.log(data.quoteText))
  .catch(error => console.error(error.message));
}