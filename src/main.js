import '.././style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoTIFF from 'ol/source/GeoTIFF';
import WebGLTileLayer from 'ol/layer/WebGLTile';

// Initialize the base map layer
const osmLayer = new TileLayer({
  source: new OSM(),
});

// Initialize the GeoTIFF layer
const geoTiffLayer = new WebGLTileLayer({
  source: new GeoTIFF({
    sources: [
      {
        url: `fl_radiance_2015_01_01.tif`, // CORS proxy URL
      },
    ],
  }),
});

// Create the map
const map = new Map({
  target: 'map',
  layers: [
    osmLayer,
    geoTiffLayer,
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
