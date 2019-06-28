import { CalculateDay } from "./solar-calc.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();
    const month = $('#monthInput').val();
    const day = $('#dayInput').val();
    const year = $('#yearInput').val();
    var planet = $( "#selectPlanet option:selected" ).val();
    console.log(planet);
    const complete = month + '/' + day + '/' + year
    const result = new CalculateDay(complete, planet);
    console.log(result);
    $('.output').text(result.returnResult());
  });
});
