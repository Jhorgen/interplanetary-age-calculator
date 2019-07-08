import { CalculateAge } from "./solar-calc.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const result = new CalculateAge();

$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();
    const month = $('#monthInput').val();
    const day = $('#dayInput').val();
    const year = $('#yearInput').val();
    let planet = $( "#selectPlanet option:selected" ).val();
    // console.log(planet);
    const complete = month + '/' + day + '/' + year
    const result = new CalculateAge(complete, planet);
    console.log(result.calculatePlanet());
    $('.output').text(result.calculatePlanet());
  });
});
