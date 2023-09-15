
import './index.css'



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

console.log(pizzaData)
export default function App() {
  return (<div className='container'>
    <Header />
    <Menu />
    <Footer />
  </div>)
}

function Header() {
  return <header className='header'>
    <h1 > Fast React Pizza Co.</h1>

  </header>
}

function Menu() {
 const pizzas=pizzaData;

  const numPizza=pizzas.length;
  return <main className='menu'>
    <h2>Our menu</h2>
   {numPizza > 0 ? (
    <>
      <p>Pizza's roots can be traced back to Naples, Italy, in the 18th century. It was initially a simple dish consisting of flatbread topped with ingredients like tomatoes, cheese, olive oil, and garlic.</p>

<ul className='pizzas'>
{pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>)}

</ul>
    </>
   ):<p>We are still working on our menu .Please return later on</p>}
    {/* <Pizza name="Pizza Spinaci" price={10} photoName='pizzas/spinaci.jpg'  ingredients='Tomato, mozarella, spinach, and ricotta cheese'/>
    <Pizza name="Pizza Prosciutto" price={12} photoName='pizzas/prosciutto.jpg'  ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'/> */}

  </main>
}

function Pizza({pizzaObj}) {
  //console.log(props)
  return (<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
    <div>
      <h3 >{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      {/* {pizzaObj.soldOut ? (
        <span>SOLD OUT</span> 
      ): (<span>{pizzaObj.price}</span>)} */}
      <span>{ pizzaObj.soldOut ? 'SOLD OUT' :pizzaObj.price}</span>
    </div>

  </li>)
}

function Footer() {
  const hour = new Date().getHours();
  const openHour =9;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log('isopen', isOpen)

  return <footer className='footer'>{isOpen ? (
    <Order closeHour={closeHour} openHour={openHour} />
  ):<p>we are happy to welcome you between {openHour}:0 and {closeHour}:0 </p>}</footer>
}

function Order({openHour,closeHour}){
  return <div className='order'>
  <p>We're open from {openHour} to {closeHour}. Come vist us or order online</p> 
  <button className='btn'>Order</button>
</div>
}
