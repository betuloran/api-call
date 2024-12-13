import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';

function App() {
  const handleSubmit = (term) => {
    debugger; // Kodun çalışmasını kontrol etmek için bir duraklama noktası
    console.log(term);
    searchImages(term); //Arama işlevini çağırır (bir API çağrısı yapar)
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;