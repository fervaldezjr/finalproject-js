let cursosDisp = document.getElementById('portfolio');
let DATA_URL = 'http://localhost:3000/cursos';

async function getData() {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    return data;
};

getData()
.then(data => cursosDisp.innerHTML = data.map((curso) => `
    <img src=${curso.portada} />
`).join(''))
.catch(err => console.log('errors: ' + err.message));