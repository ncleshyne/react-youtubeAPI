import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDWwryX5Qdarja4H7tGujnPQzKW_Qs5ck4';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
