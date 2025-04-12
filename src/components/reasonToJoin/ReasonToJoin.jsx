import styles from './ReasonToJoin.module.css';

const cars = [
  {
    id: 1,
    title: "Škoda Kamiq",
    img: "./src/img/1auto.png",
    link: "/nuomojamas-automobilis/482--automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "6l/100km",
    body: "Visureigis",
    price: "30.00 €"
  },
  {
    id: 2,
    title: "VW T-Cross",
    img: "./src/img/2auto.png",
    link: "/nuomojamas-automobilis/419-vw-t-cross-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "6l/100km",
    body: "Visureigis",
    price: "36.00 €"
  },
  {
    id: 3,
    title: "Mercedes-Benz Sprinter",
    img: "./src/img/3auto.png",
    link: "/nuomojamas-komercinis/338-mercedes-benz-sprinter-automobilio-nuoma",
    gear: "Mechaninė",
    seats: 3,
    fuel: "12ltr/100km",
    body: "Komercinis",
    price: "38.00 €"
  },
  {
    id: 4,
    title: "BMW X5",
    img: "./src/img/4auto.jpg",
    link: "/nuomojamas-automobilis/123-bmw-x5-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "8l/100km",
    body: "Visureigis",
    price: "50.00 €"
  },
  {
    id: 5,
    title: "Audi A3",
    img: "./src/img/5auto.jpg",
    link: "/nuomojamas-automobilis/125-audi-a3-automobilio-nuoma",
    gear: "Mechaninė",
    seats: 5,
    fuel: "7l/100km",
    body: "Sedanas",
    price: "40.00 €"
  },
  {
    id: 6,
    title: "Ford Fiesta",
    img: "./src/img/6auto.jpg",
    link: "/nuomojamas-automobilis/126-ford-fiesta-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "6l/100km",
    body: "Hatchback",
    price: "28.00 €"
  },
  {
    id: 7,
    title: "Peugeot 3008",
    img: "./src/img/7auto.jpg",
    link: "/nuomojamas-automobilis/127-peugeot-3008-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "6l/100km",
    body: "Visureigis",
    price: "45.00 €"
  },
  {
    id: 8,
    title: "Volkswagen Golf",
    img: "./src/img/8auto.jpg",
    link: "/nuomojamas-automobilis/128-volkswagen-golf-automobilio-nuoma",
    gear: "Mechaninė",
    seats: 5,
    fuel: "5l/100km",
    body: "Sedanas",
    price: "35.00 €"
  },
  {
    id: 9,
    title: "Renault Clio",
    img: "./src/img/9auto.jpg",
    link: "/nuomojamas-automobilis/129-renault-clio-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "6l/100km",
    body: "Hatchback",
    price: "30.00 €"
  },
  {
    id: 10,
    title: "Tesla Model 3",
    img: "./src/img/10auto.jpg",
    link: "/nuomojamas-automobilis/130-tesla-model-3-automobilio-nuoma",
    gear: "Automatinė",
    seats: 5,
    fuel: "0l/100km",
    body: "Sedanas",
    price: "120.00 €"
  }
];


export function ReasonsToJoin() {
  return (
    <div id="found" className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.carList}>
          {cars.map((car) => (
            <li key={car.id} className={styles.carItem}>
              <div>
                <a className={styles.imgLink} href={car.link}>
                  <img alt={`${car.title} nuoma`} src={car.img} />
                </a>
                <div className={styles.info}>
                  <a className={styles.title} href={car.link}>{car.title}</a>
                  <ul className={styles.iconList}>
                    <li className={styles.iconGear}>{car.gear}</li>
                    <li className={styles.iconSeats}>{car.seats}</li>
                    <li className={styles.iconFuel}>{car.fuel}</li>
                    <li className={styles.iconBody}>{car.body}</li>
                  </ul>
                  <span className={styles.price}>
                    <span>para nuo</span> {car.price}
                  </span>
                  <div className={styles.clear}></div>
                </div>
                <a className={styles.detailsLink} href={car.link}></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}