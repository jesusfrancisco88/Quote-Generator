import './style.css'
import { quoteGen } from './src/random-quote/random-quote';

document.querySelector('#app').innerHTML = `
  <div>

    <div class="card"></div>

  </div>
`;

const element = document.querySelector('.card');
quoteGen(element);