import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//Importação para customizar icones.
//import Leaflet from 'leaflet';
import mapMarkerImg from '../Images/Local.svg';
import '../styles/pages/orphanatos-map.css';
import mapIcon from '../utils/mapIcon';
//Conexão com o BD.
import api from '../services/api';
//Só as infos que vou usar na página.
interface Orphanages {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

/*Icone do mapa
const mapIcon = Leaflet.icon({
    iconUrl:  mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2],
})
*/
function OrfanatosMap() {

    const [orphanages, setOphanages] = useState<Orphanages[]>([]);

    //Chamando os orfanatos, para esterem sempre na tela.
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOphanages(response.data);
        })
    }, []);


    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visista :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-23.7090721, -46.7962328]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanages => {
                    return (
                        <Marker
                            //Coloca o icone no mapa na position.
                            key={orphanages.id}
                            icon={mapIcon}
                            position={[orphanages.latitude, orphanages.longitude]}

                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                                {orphanages.name}
                                <Link to={`/orphanages/${orphanages.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrfanatosMap