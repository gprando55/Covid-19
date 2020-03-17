const axios = require('axios');

class App {
  constructor() {
    this.infos = axios.get(`https://thevirustracker.com/free-api?global=stats`);

    this.dadosTela = document.getElementById('')

    this.registreDados();
  }

  registreDados() {
    this.dadosTela.onload()
  }
}

new App();






// const axios = require('axios');

// class Ap {
//   static async getInfo() {
//     const response = await axios.get(`https://thevirustracker.com/free-api?global=stats`);
    
//     let {
//       total_cases, 
//       total_recovered,
//       total_unresolved,
//       total_deaths,
//       total_new_cases_today,
//       total_new_deaths_today,
//       total_active_cases,
//       total_serious_cases
//     } = response.data.results[0]


//       console.log(total_active_cases)
    

//     // console.log(response.data.results[0]);
//   }
// }

// Api.getInfo();
