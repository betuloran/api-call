import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    debugger; // Kodun çalışmasını kontrol etmek için bir duraklama noktası
    console.log(term); // API'den dönen sonuçlar
    const result = await searchImages(term); //Arama işlevini çağırır (bir API çağrısı yapar)
    setImages(result)
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;