const students = ["Tom", "Jerry", "Bob", "lisa", "Jim"];

console.log(students[3]);
console.log(students[1]);

for(let student of students){
  console.log(student);
}

let roster = "These are the students in the list: "

for(let student of students){
  roster += `${student}, `;
}
console.log(roster);


const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};

console.log(`The forcast calls for ${currentWeather.sky} skies and ${currentWeather.weather} with a high temperature of ${currentWeather.temp} degrees.`);
console.log(`${currentWeather.details[0]} ${currentWeather.details[1]} ${currentWeather.details[2]}`);
