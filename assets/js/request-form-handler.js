$(document).ready(function () {
  $("#carSearchForm").on("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    // Input field values
    const yourName = $('input[placeholder="Enter Your Name"]').val();
    const email = $('input[placeholder="Enter your email"]').val();
    const contactNumber = $('input[name="phone"]').val();
    const brandName = $("select.select").val();
    const carModel = $(
      'input[placeholder="Enter car model (e.g. 3-Series)"]'
    ).val();
    const carCondition = $(
      'input[placeholder="Enter condition (New/Used)"]'
    ).val();
    const mileage = $(
      'input[placeholder="Enter mileage (e.g. 3000 Miles)"]'
    ).val();
    const year = $('input[placeholder="Enter year (e.g. 2023)"]').val();
    const priceRange = $(
      'input[placeholder="Enter price range (e.g. $5,000 - $10,000)"]'
    ).val();

    // Print values to console
    console.log("Your Name:", yourName);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Brand Name:", brandName);
    console.log("Car Model:", carModel);
    console.log("Car Condition:", carCondition);
    console.log("Mileage:", mileage);
    console.log("Year:", year);
    console.log("Price Range:", priceRange);
  });
});
