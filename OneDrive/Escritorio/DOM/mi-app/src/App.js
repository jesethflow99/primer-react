import './App.css';
import	{Testimonio} from "./componentes/testimonio.js"

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>Este es el titulo de la aplicacion</h1>
      <Testimonio 
      imagen="https://media.vogue.mx/photos/5ea380c6a9c5e800087bd464/master/pass/Libros-que-recomienda-Emma-Watson.jpg"
      nombre="Emma Watson"
      cargo="Actriz"
      empresa="Warner Bros"
      Testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore."
      />

<Testimonio 
      imagen="https://mx.web.img3.acsta.net/pictures/19/07/07/21/07/4203148.jpg"
      nombre="Miranda Cosgrove"
      cargo="Actriz"
      empresa="Nickelodeon"
      Testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore."
      />

<Testimonio 
      imagen="https://m.media-amazon.com/images/M/MV5BMjQ1NDM3MjgxNF5BMl5BanBnXkFtZTgwNTExMzYzODE@._V1_.jpg"
      nombre="janete mccarthy"
      cargo="Actriz"
      empresa="Nickelodeon"
      Testimonio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel vero quam dolorum, recusandae ratione praesentium iste possimus eligendi, soluta provident ullam doloribus molestias aperiam, sed maiores veniam eaque dolore."
      />
 
    </div>
  );
}

export default App;
