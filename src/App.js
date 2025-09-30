import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [kwiaty, setKwiaty] = useState(true);
  const [zwierzeta, setZwierzeta] = useState(true);
  const [samochody, setSamochody] = useState(true);

  const [dane, setdane] = useState([
  {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
  {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
  {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
  {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
  {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
  {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
  {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
  {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
  {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
  {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
  {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
  {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
]);

const funk = () => {
  let down = dane.map(down => {
    down.downloads = down.downloads + 1;
  })
  setdane([...dane, down]);
}
  return (
    <div className="container">
      <h1>Kategorie zdjęć</h1>
      <div className='form-check-inline form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          id='kwiaty'
          checked={kwiaty}
          onChange={() => setKwiaty(!kwiaty)}
        />
        <label htmlFor='kwiaty' className='form-check-label'>Kwiaty</label>
      </div>
      <div className='form-check-inline form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          id='zwierzeta'
          checked={zwierzeta}
          onChange={() => setZwierzeta(!zwierzeta)}
        />
        <label htmlFor='zwierzeta' className='form-check-label'>Zwierzęta</label>
      </div>
      <div className='form-check-inline form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          id='samochody'
          checked={samochody}
          onChange={() => setSamochody(!samochody)}
        />
        <label htmlFor='samochody' className='form-check-label'>Samochody</label>
      </div>

      <div className='zdjecia'>
        {dane
          .filter(dan => 
            (kwiaty && dan.category === 1) ||
            (zwierzeta && dan.category === 2) ||
            (samochody && dan.category === 3)
          )
          .map(dan => (
            <div key={dan.id} className='blok'>
              <img src={`/assets/${dan.filename}`} alt={dan.alt} className='zdjecie'/><br/>
              <h4>
                Pobrań: {dan.downloads}<br/>
                <button type='button' className='btn btn-success' onClick={funk}>Pobierz</button>
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
