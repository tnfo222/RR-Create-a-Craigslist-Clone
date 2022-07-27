// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Gallery from './Components/Gallery'
import Directory from './Components/Directory'
import Searchbar from './Components/Searchbar'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Gallery postings={postings}/>
        <Directory />
        <Searchbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
