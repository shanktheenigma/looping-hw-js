// if the temperature is < 0, print "Freezing"
// if 0–20 → Cold
// if 21–30 → Warm
// if > 30 → Hot

let temperature = 40;

switch (true) {
  case temperature < 0:
    result = "Freezing"
    break;

  case temperature <= 20:
    result = "Cold"
    break;

  case temperature <= 30:
    result = "Warm"
    break;

  default:
    result = "Hot"
    break;
}

console.log(result);
