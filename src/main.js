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
    var value = $("#selectPlanet[type='select']:checked").val();
    console.log(value);
    const complete = month + '/' + day + '/' + year
    const result = new CalculateDay(complete);
    console.log(result);
    $('.output').text(result.returnResult());
  });
});
