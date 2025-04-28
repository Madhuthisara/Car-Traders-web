// Dummy data array
const cars = [
  {
    name: "Mercedes Benz Car",
    status: "Used",
    price: "$45,620",
    img: "assets/img/car/01.jpg",
    model: "2023",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: "10.15km / 1-litre",
  },
  {
    name: "Yellow Ferrari 458",
    status: "New",
    price: "$90,250",
    img: "assets/img/car/02.jpg",
    model: "2023",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: "10.15km / 1-litre",
  },
  {
    name: "BMW M5 Competition",
    status: "Used",
    price: "$78,900",
    img: "assets/img/car/03.jpg",
    model: "2022",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "9.5km / 1-litre",
  },
  {
    name: "Audi R8 Spyder",
    status: "New",
    price: "$150,000",
    img: "assets/img/car/04.jpg",
    model: "2024",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "8.2km / 1-litre",
  },
  {
    name: "Tesla Model S",
    status: "New",
    price: "$85,500",
    img: "assets/img/car/05.jpg",
    model: "2023",
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "450km / full charge",
  },
  {
    name: "Lamborghini Aventador",
    status: "Used",
    price: "$120,000",
    img: "assets/img/car/06.jpg",
    model: "2021",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "7.5km / 1-litre",
  },
  {
    name: "Ford Mustang GT",
    status: "Used",
    price: "$55,000",
    img: "assets/img/car/07.jpg",
    model: "2020",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "8.4km / 1-litre",
  },
  {
    name: "Porsche 911 Carrera",
    status: "New",
    price: "$110,500",
    img: "assets/img/car/08.jpg",
    model: "2024",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: "10.9km / 1-litre",
  },
  {
    name: "Toyota Supra GR",
    status: "Used",
    price: "$49,800",
    img: "assets/img/car/09.jpg",
    model: "2022",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "11.2km / 1-litre",
  },
];

// Car list eka render karana function
const carList = document.getElementById("car-list");

cars.forEach((car) => {
  const carCard = `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="car-item">
        <div class="car-img">
          <span class="car-status">${car.status}</span>
          <img src="${car.img}" alt="${car.name}" />
        </div>
        <div class="car-content">
          <h4 class="car-name">
               ${
                 car.name.length > 20
                   ? car.name.substring(0, 18) + "..."
                   : car.name
               }
              ${
                car.name.length > 20
                  ? `<span class="tooltip">${car.name}</span>`
                  : ""
              }
          </h4>
          <ul class="car-list">
            <li>Transmission: ${car.transmission}</li>
            <li>Mileage: ${car.mileage}</li>
            <li>Model: ${car.model}</li>
            <li>Fuel: ${car.fuel}</li>
          </ul>
          <div class="car-footer">
            <span class="car-price">${car.price}</span>
            <a href="#" class="theme-btn">Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
  carList.innerHTML += carCard;
});
