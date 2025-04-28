// request-form-handler.js
$(document).ready(function () {
  $("#carSearchForm").on("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    // Select field values
    const carCondition = $("select").eq(0).val();
    const brandName = $("select").eq(1).val();
    const carModel = $("select").eq(2).val();
    const year = $("select").eq(3).val();
    const mileage = $("select").eq(4).val();
    const price = $("select").eq(5).val();
    const bodyType = $("select").eq(6).val();

    // Input field values
    const yourName = $('input[type="text"]').val();
    const contactNumber = $('input[type="tel"]').val();
    const email = $('input[type="email"]').val();

    // Print to console
    console.log("Car Condition:", carCondition);
    console.log("Brand Name:", brandName);
    console.log("Car Model:", carModel);
    console.log("Year:", year);
    console.log("Mileage:", mileage);
    console.log("Price Range:", price);
    console.log("Body Type:", bodyType);
    console.log("Your Name:", yourName);
    console.log("Contact Number:", contactNumber);
    console.log("Email:", email);
  });
});
