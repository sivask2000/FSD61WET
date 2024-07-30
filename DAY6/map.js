// URL containing the data
const url = 'https://restcountries.com/v3.1/all';

// Function to fetch data from the URL
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to perform the required operations
async function processCountries() {
  const countries = await fetchData();
  if (!countries) return;

  // 1. Get all the countries from Asia continent/region using Filter method
  const asianCountries = countries.filter(country => country.region === 'Asia');
  console.log('Asian Countries:', asianCountries);

  // 2. Get all the countries with a population of less than 2 lakhs using Filter method
  const smallPopulationCountries = countries.filter(country => country.population && country.population < 200000);
  console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

  // 3. Print the following details name, capital, flag, using forEach method
  countries.forEach(country => {
    const name = country.name?.common || 'N/A';
    const capital = country.capital?.[0] || 'N/A'; // Ensure there's at least one capital
    const flag = country.flags?.png || 'N/A'; // Ensure there's a URL for the flag image
    console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
  });

  // 4. Print the total population of countries using reduce method
  const totalPopulation = countries.reduce((total, country) => total + (country.population || 0), 0);
  console.log('Total Population:', totalPopulation);

  // 5. Print the country that uses US dollars as currency
  const usdCountries = countries.filter(country => country.currencies && country.currencies.USD);
  console.log('Countries using USD as currency:', usdCountries);
}

// Call the function to process the countries
processCountries();
