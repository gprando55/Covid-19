const axios = require('axios');

async function getGlobalDados() {
  try {
    const response = await axios.get(`https://thevirustracker.com/free-api?global=stats`);

    console.log(response.data.results[0]);
  } catch (err) {
    console.log("erro");
  }
}

getGlobalDados();

async function getDadoPais(pais) {
  try {
    const response = await axios.get(`https://thevirustracker.com/free-api?countryTotal=${pais}`);

    console.log(response.data.countrydata[0]);
  } catch (err) {
    console.log("Esse país não existe");
  }
}

getDadoPais("US");
