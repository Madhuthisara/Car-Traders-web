const input = document.querySelector("#phone");
const errorMsg = document.querySelector("#phone-error");

const iti = window.intlTelInput(input, {
  initialCountry: "auto",
  nationalMode: false,
  autoPlaceholder: "polite",
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io/json?token=<YOUR_TOKEN>")
      .then((resp) => resp.json())
      .then((resp) => {
        const countryCode = resp?.country || "lk";
        callback(countryCode);
        setTimeout(() => {
          const dialCode = iti.getSelectedCountryData().dialCode;
          input.value = `+${dialCode} `;
        }, 100);
      })
      .catch(() => {
        callback("lk");
        setTimeout(() => {
          const dialCode = iti.getSelectedCountryData().dialCode;
          input.value = `+${dialCode} `;
        }, 100);
      });
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Validate on blur
input.addEventListener("blur", () => {
  const isValid = iti.isValidNumber();

  if (input.value.trim() === "" || !isValid) {
    errorMsg.classList.remove("d-none"); // show error
  } else {
    errorMsg.classList.add("d-none"); // hide error
  }
});
