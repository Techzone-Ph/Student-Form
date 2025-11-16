document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fieldsOrder = ["fname", "mid", "lname", "age"];
  const fields = {
    fname: /^[A-Za-z]+$/,
    mid: /^[A-Za-z]+$/,
    lname: /^[A-Za-z]+$/,
    age: /^[0-9]{1,2}$/
  };
  const errorMsgs = {
    fname: "Letters only",
    mid: "Letters only",
    lname: "Letters only",
  };

  fieldsOrder.forEach((id, i) => {
    const el = document.getElementById(id);
    const error = document.createElement("small");
    error.style.cssText = "color:red; display:block; margin-top:3px;";
    el.after(error);

    const validate = () => {
      if (id === "age") el.value = el.value.replace(/\D/g, "").slice(0, 2);
      if (fields[id].test(el.value.trim())) {
        el.style.border = "1px solid #ccc";
        error.textContent = "";
        return true;
      } else {
        el.style.border = "2px solid red";
        error.textContent = errorMsgs[id];
        return false;
      }
    };

    el.addEventListener("input", validate);

    el.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (validate()) {
          const next = fieldsOrder[i + 1];
          if (next) document.getElementById(next).focus();
        } else el.focus();
      }
    });

    el.addEventListener("blur", () => {
      if (!validate()) el.focus();
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    for (const id of fieldsOrder) {
      const el = document.getElementById(id);
      if (!fields[id].test(el.value.trim())) {
        el.focus();
        el.style.border = "2px solid red";
        el.nextElementSibling.textContent = errorMsgs[id];
        return;
      }
    }
    alert("Form submitted successfully!");
    form.reset();
    fieldsOrder.forEach(id => {
      const el = document.getElementById(id);
      el.style.border = "1px solid #ccc";
      el.nextElementSibling.textContent = "";
    });
  });
});
