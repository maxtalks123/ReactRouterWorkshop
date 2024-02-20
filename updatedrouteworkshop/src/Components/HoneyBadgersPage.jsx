export default function HoneyBadgersPage({ name, img, description, alt }) {
  return (
    <div className="BadgerCard">
      <ul>
        <li>
          <h2>Our Honey Badger: {name}</h2>
          <p>What our Honey Badger is doing: {description}</p>
          <img src={img} alt={alt}></img>
          <button>Click here</button>
        </li>
      </ul>
    </div>
  );
}
