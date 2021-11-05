import './App.css';
import Navbar from './components/Navbar';
import BG_IMAGE from './assets/cf_bg.jpg';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <main className="col-lg-12">
            <div
              className="p-md-5 mb-4 text-white rounded"
              style={{
                backgroundImage: `url(${BG_IMAGE})`,
                height: '400px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
