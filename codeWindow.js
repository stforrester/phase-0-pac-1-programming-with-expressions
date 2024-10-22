// Input values: we could easily imagine asking a user for these values.
const name = "Your name here";
const probabilityOfRain = 0.48;
const temperatureInC = 20;

// Create our message
const message = `Hello, ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;

console.log(message);