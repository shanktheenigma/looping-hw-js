// Login simulation
// Correct username & password → “Login successful”
// Correct username, wrong password → “Incorrect password”
// Otherwise → “User not found”

// let savedUsername = "shankieshank";
// let savedPassword = "4425";

// let inputUsername = "shankieshank";
// let inputPassword = "4425";

// if (savedUsername === inputUsername && savedPassword === inputPassword) {
//   console.log("Login successful!");
// } else if (savedUsername === inputUsername && savedPassword != inputPassword) {
//   console.log("Incorrect password");
// } else {
//   console.log("User not found!");
// }

//look for shorthen version

let savedUsername = "shankeshank";
let savedPassword = "445";

let inputUsername = "shankieshank";
let inputPassword = "4425";

if (savedUsername !== inputUsername) {
  console.log("User not found!");
} else if (savedPassword !== inputPassword) {
  console.log("Incorrect password");
} else {
  console.log("Login successful!");
}
