let cursosDisp = document.getElementById('root');
let DATA_URL = '../../server/db.json';

async function getData() {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    return data;
};

getData()
.then(data => cursosDisp.innerHTML = data.cursos.map((curso) => `
<img src=${curso.portada} />
`).join(''))
.catch(err => console.log('errors: ' + err.message));