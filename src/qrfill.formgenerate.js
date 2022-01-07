import {generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL, changeDisplayFromPlatform} from 'qrgenerator';
import {generateForm} from 'formgenerator';
import $ from 'jquery';

function downloadCanvas(){

    var canvas = document.querySelector("canvas").toDataURL("image/png");
    var last_name = document.querySelector("#lastname").value;
    var first_name = document.querySelector("#firstname").value;
    var birthdate = document.querySelector("#birthdate").value;
    /* Anchor Element */
    var a = document.createElement('a');

    /* File Name */
    a.download = last_name + " " + first_name + " " + birthdate + ".png";

    /* Set Canvas as download link href */
    a.href = canvas;

    /* Emulate Click on the link */
    a.click();

    /* Reload the page */
    window.location.reload()

}

document.addEventListener('DOMContentLoaded', function() {
    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    generateForm('form');
    setQrOptionsFromURL();
    initQRCode('qrcode', 'qroutputvalue');
    changeDisplayFromPlatform();
    var form = document.querySelector('form');
    var printBtn = document.getElementById('print-button');
    var downloadBtn = document.getElementById('download-button')
    $(".datepicker").datepicker({
        format: "yyyy-mm-dd",
        startView: 2,
        maxViewMode: 2,
        language: "fr",
        keyboardNavigation: false,
        autoclose: true,
        defaultViewDate: { year: 1980, month: 1, day: 1 }
    });

    form.addEventListener('change', updateQRCode);
    form.addEventListener('keyup', updateQRCode);    

    printBtn.onclick = function() { 
        updateQRCode;
        setTimeout(
            function(){ 
                window.print();
            }, 1000);
        
    }

    downloadBtn.onclick = downloadCanvas;

    //reload the page after clicking print button
    window.onafterprint = function() {
        window.location.reload()
    }

    
    
});//EOF

