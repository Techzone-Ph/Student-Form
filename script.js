document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fieldsOrder = ["fname", "mid", "lname", "age"];

  const patterns = {
    fname: /^[A-Za-z]+$/,
    mid: /^[A-Za-z]+$/,
    lname: /^[A-Za-z]+$/,
    age: /^\d{1,2}$/
  };

  const messages = {
    fname: "Letters only",
    mid: "Letters only",
    lname: "Letters only",
    age: "1-2 digit number only"
  };


  const createError = el => {
    const error = document.createElement("small");
    error.style.cssText = "color:red; display:block; margin-top:3px;";
    el.after(error);
    return error;
  };


  const validateInput = (el, pattern, msg, errorEl) => {
    if(el.id === "age") el.value = el.value.replace(/\D/g, "").slice(0,2);
    const valid = pattern.test(el.value.trim());

    el.style.backgroundColor = "#fff";

    if(valid) {
      el.style.border = "1px solid #ccc";
      errorEl.textContent = "";
    } else {
      el.style.border = "3px solid #ff0000";
      errorEl.textContent = msg;
    }

    return valid;
  };

  fieldsOrder.forEach((id, index) => {
    const el = document.getElementById(id);
    const errorEl = createError(el);


    el.addEventListener("input", () => validateInput(el, patterns[id], messages[id], errorEl));


    el.addEventListener("keydown", e => {
      if(e.key === "Enter") {
        e.preventDefault();
        if(validateInput(el, patterns[id], messages[id], errorEl)) {
          const next = fieldsOrder[index + 1];
          if(next) document.getElementById(next).focus();
        } else el.focus();
      }
    });


    el.addEventListener("blur", () => { 
      if(!validateInput(el, patterns[id], messages[id], errorEl)) el.focus();
    });
  });


  form.addEventListener("submit", e => {
    e.preventDefault();
    let allValid = true;

    fieldsOrder.forEach(id => {
      const el = document.getElementById(id);
      const errorEl = el.nextElementSibling;
      if(!validateInput(el, patterns[id], messages[id], errorEl)) allValid = false;
    });

    if(allValid) {
      alert("Form submitted successfully!");
      form.reset();
      fieldsOrder.forEach(id => {
        const el = document.getElementById(id);
        el.style.border = "1px solid #ccc";
        el.style.backgroundColor = "#fff";
        el.nextElementSibling.textContent = "";
      });
    }
  });
});
