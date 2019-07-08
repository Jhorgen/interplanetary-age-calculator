import { CalculateAge } from "./solar-calc.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();

    $('.lifeOutput').text(' ');
    const month = $('#monthInput').val();
    const day = $('#dayInput').val();
    const year = $('#yearInput').val();
    let planet = $( "#selectPlanet option:selected" ).val();
    const complete = month + '-' + day + '-' + year
    const userDate = new CalculateAge(complete, planet);

    $('.output').text(Math.round(userDate.calculatePlanet())+ ' ' + 'years old!');

    $('#lifeExpectancy').click(function(){
      $('.lifeOutput').text(Math.round(userDate.calculateLifeExpectancy()) + ' ' + 'years left to live.');

    });
  });
});
