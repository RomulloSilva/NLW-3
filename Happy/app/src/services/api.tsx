import axios from 'axios';

const api = axios.create({
    /*Para conseguir esse numéro dentro da execução do expo.
    consegue visualizar esse camino o IP de sua máquina.*/
    baseURL: 'http://192.168.100.8:3333',
});

export default api;