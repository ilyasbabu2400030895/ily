import './App.css';

function App() {
  const images = Array.from({ length: 9 }, (_, i) => `/${i + 1}.jpeg`);

  return (
    <div className="container">
      <h1>Image Grid</h1>
      <div className="grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index + 1}`} className="grid-image" />
        ))}
      </div>
    </div>
  );
}

export default App;
