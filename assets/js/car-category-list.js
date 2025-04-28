const categories = [
  {
    name: "Sedan",
    img: "assets/img/category/01.png",
    delay: ".25s",
  },
  {
    name: "Compact",
    img: "assets/img/category/02.png",
    delay: ".50s",
  },
  {
    name: "Convertible",
    img: "assets/img/category/03.png",
    delay: ".75s",
  },
  {
    name: "SUV",
    img: "assets/img/category/04.png",
    delay: "1s",
  },
  {
    name: "Crossover",
    img: "assets/img/category/05.png",
    delay: "1.25s",
  },
  {
    name: "Wagon",
    img: "assets/img/category/06.png",
    delay: "1.50s",
  },
  {
    name: "Sports",
    img: "assets/img/category/07.png",
    delay: ".25s",
  },
  {
    name: "Pickup",
    img: "assets/img/category/08.png",
    delay: ".50s",
  },
  {
    name: "Family MPV",
    img: "assets/img/category/09.png",
    delay: ".75s",
  },
  {
    name: "Coupe",
    img: "assets/img/category/10.png",
    delay: "1s",
  },
  {
    name: "Electric",
    img: "assets/img/category/11.png",
    delay: "1.25s",
  },
  {
    name: "Luxury",
    img: "assets/img/category/12.png",
    delay: "1.50s",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const carListContainer = document.querySelector("#category-list");

  categories.forEach((category) => {
    const categoryItem = `
      <div class="col-6 col-md-4 col-lg-2">
        <a href="#" class="category-item wow fadeInUp" data-wow-delay="${category.delay}">
          <div class="category-img">
            <img src="${category.img}" alt="${category.name}" />
          </div>
          <h5>${category.name}</h5>
        </a>
      </div>
    `;

    // Append the category item to the row container
    carListContainer.innerHTML += categoryItem;
  });
});
