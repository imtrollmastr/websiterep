let password = prompt("Enter your password:");

if (password === "yomamaobama") {
  alert("Welcome Johann!");
  window.location.href = "openadmin.htm";
} else {
  location.reload();
}