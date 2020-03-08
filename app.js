const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ** ForEach **

//Using For Loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//Using ForEach with ES5 function

companies.forEach(function(company) {
  console.log(company);
});

//Using ForEach ES6 arrow function

companies.forEach(company => console.log(company));

// ** filter **

// USing for Loop

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//Using Filter ES6

const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);

//ShortHAnd

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Get Companies for Retail

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

//get last 10 years to start

const lastTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(lastTenYears);

// Map

const testMap = companies.map(company => company.name);

const testMap = companies.map(
  company => `${company.name} [${company.start}- ${company.end}]`
);

console.log(testMap);

// Sort companies by company years

// Using normal Conditional method

const sortCompanies = companies.sort(function(a, b) {
  if (a.start > b.start) {
    return 1;
  } else {
    return -1;
  }
});

// Using Ternary Operator

const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortCompanies);

// sort The ages

const sortages = ages.sort((a, b) => a - b);

console.log(sortages);

//Reduce Method

// for Loop

let ageSum = 0;

for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

// Reduce Method

const ageSum = ages.reduce((total, sum) => total + sum, 0);

console.log(ageSum);

// Get comapnies total no of years

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
