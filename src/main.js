import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Map} from './map.js';


$(document).ready(function() {
  let map = new Map();
  map.CreateMap();

});
