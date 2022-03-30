
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'
console.log(data);
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        item={item}
      />)
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;
