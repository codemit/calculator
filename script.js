

  var result = document.getElementById('demo')
  var prozentValue = document.getElementById('prozent')
  var grundWertValue = document.getElementById('grundWert')
////////////////////////////Wert JS codes//////////////////////////////
window.setInterval(function wert () {
    if (prozentValue.value === '' && grundWertValue.value === '') {
      document.getElementById('demo').innerHTML = "Please enter the Value first!";
      document.getElementById('demo').style.color = "rgb(152, 6, 6)";
    } else {
      document.getElementById("demo").innerHTML = (prozentValue.value * grundWertValue.value) /100;
      document.getElementById('demo').style.color = "black";
    }
  }, 100 );
 ////////////////////////////// Prozent JS codes////////////////////////////
  var wertValue = document.getElementById('wertValue');
  var grundWertValueA = document.getElementById('grundWertA');
window.setInterval(
  function prozent() {
    if (wertValue.value == '' && grundWertValueA.value == '') {
      document.getElementById('demoA').innerHTML= "Please enter the Value first!";
      document.getElementById('demoA').style.color = "rgb(152, 6, 6)";

    } else {
      document.getElementById("demoA").innerHTML = ((wertValue.value * 100) / grundWertValueA.value) + " %";
      document.getElementById('demoA').style.color = "black";
    }
  }, 100 );
//////////////////////////Grundwert JS codes////////////////////////////////
  var wertValueA = document.getElementById('wertValueA');
  var prozentValueA = document.getElementById('prozentValueA');
window.setInterval(
  function grundWert() {
    if (wertValueA.value == '' && prozentValueA.value == '') {
        document.getElementById('demoB').innerHTML= "Please enter the Value first!";
        document.getElementById('demoB').style.color = "rgb(152, 6, 6)";
    } else {
      document.getElementById("demoB").innerHTML = (wertValueA.value * 100) / prozentValueA.value ;
      document.getElementById('demoB').style.color = "black";
    }
  }, 100);
  //////////////////////////Tempreture Convertor////////////////////////////////
    var inputValueF = document.getElementById('tempValueF');
    var inputValueC = document.getElementById('tempValueC');

    function cels() {
      if (inputValueF.value == '') {
        document.getElementById('temp').innerHTML= "Please add the Value first!";
      } else {
        return document.getElementById('temp').innerHTML = (inputValueF.value - 32)/ 1.8 + " C°";
        document.getElementById('demoA').style.color = "black";
      }
    }


    function fahr() {
      if (inputValueC.value == '') {
        document.getElementById('temp').innerHTML= "Please add the Value first!";
      } else {
      return document.getElementById('temp').innerHTML = (inputValueC.value * 1.8 ) + 32 + " F°";
    }
  }

window.setInterval(
  function audio() {
    let auflosung = document.getElementById('auflosung');
    let sHz = document.getElementById('sHz');
    let kanal = document.getElementById('aKanal');
    let zeitMin = document.getElementById('zeitMin');
    let zeitSec = document.getElementById("zeitSec");
    let bitResult, byte, kb, mb, gb, zeit, minute, sec;
    minute = zeitMin.value * 60;
    sec = zeitSec.value * 1;
    zeit = sec + minute;
    bitResult = (auflosung.value * sHz.value * kanal.value) * zeit;
    byte = bitResult / 8;
    kb = byte / 1024;
    mb = kb / 1024;
    gb = mb / 1024;
    document.getElementById('byte').innerHTML = Math.floor(byte * 100.0) / 100.0 + ' Byte';
    document.getElementById('kb').innerHTML = Math.floor(kb * 100.0) / 100.0 + ' Kibi';
    document.getElementById('mb').innerHTML =Math.floor(mb * 100.0) / 100.0 + ' Mibi';
    document.getElementById('gb').innerHTML =Math.floor(gb * 100.0) / 100.0 + ' Gibi';
  }, 100);

window.setInterval(
    function bild() {
      let hohe = document.getElementById('hohe').value;
      let breite = document.getElementById('breite').value;
      let dpi = document.getElementById('dpi').value;
      let farbT = document.getElementById('farbT').value;
      let pixelanzahl, hohePx, breitePx, bildgrosse, bkb, bmb;
      hohePx = hohe * dpi;
      breitePx = breite * dpi;
      pixelanzahl = hohePx * breitePx;
      bildgrosse = pixelanzahl * farbT;
      bbyte = bildgrosse / 8;
      bkb = bbyte / 1024;
      bmb = bkb / 1024;
      document.getElementById('pixelanzahl').innerHTML = pixelanzahl + ' Pixel';
      document.getElementById('bb').innerHTML = bildgrosse + ' bit';
      document.getElementById('bbbyte').innerHTML = bbyte + ' Byte';
      document.getElementById('bkb').innerHTML = bkb + ' KiBi';
      document.getElementById('bmb').innerHTML = bmb + ' MiBi';

    }, 100 );
