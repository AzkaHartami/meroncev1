import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const jewelBeads = [
  {
    name: "Necklace",
    description: "Chic necklace with sparkling beads.",
    price: 10000,
    photoName: "beads/necklace.jpg",
    soldOut: false,
  },
  {
    name: "Ring",
    description: "Dazzling ring with exquisite design.",
    price: 3000,
    photoName: "beads/ring.jpg",
    soldOut: false,
  },
  {
    name: "Bracelet",
    description: "Stylish bracelet adorned with charms.",
    price: 8000,
    photoName: "beads/bracelet.jpg",
    soldOut: false,
  },
  {
    name: "Strap phone",
    description: "Trendy strapphone with sleek design.",
    price: 15000,
    photoName: "beads/strap.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Meronce Manik</h1>
    </header>
  );
}

function Menu() {
  const beads = jewelBeads;
  const numBeads = beads.length;

  return (
    <main className="menu">
      <h2>Our product</h2>

      {numBeads > 0 ? (
        <>
          <p>
            Aesthetic jewerly using beads that make your look more prettier than
            before. With good quality products make your wish come true.
          </p>

          <ul className="beads">
            {beads.map((bead) => (
              <Bead beadObj={bead} key={bead.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our products. Please come back later :)</p>
      )}

      {}
    </main>
  );
}

function Bead({ beadObj }) {
  console.log(beadObj);
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(beadObj.price);

  return (
    <li className={`bead ${beadObj.soldOut ? "sold-out" : ""}`}>
      <img src={beadObj.photoName} alt={beadObj.name} />
      <div>
        <h3>{beadObj.name}</h3>
        <p>{beadObj.description}</p>

        {}

        <span>{beadObj.soldOut ? "OUT OF STOCK" : formattedPrice}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00 in
          our operational hours.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  const whatsappNumber = "+6282286718080";
  const whatsappMessage = "Hello, I'd like to place an order.";

  // Function to handle the button click and open WhatsApp link
  const handleOrderButtonClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="order">
      <p>
        You can make an order during our operational hours from {openHour}:00 to{" "}
        {closeHour}:00 via WhatsApp.
      </p>
      <button className="btn" onClick={handleOrderButtonClick}>
        Order
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
