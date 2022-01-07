import {generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL, changeDisplayFromPlatform, generateAndDownloadQrCode} from 'qrgenerator';
import {generateForm} from 'formgenerator';
import $ from 'jquery';

function downloadCanvas(){
    let filename = document.querySelector("#lastname").value + " " + document.querySelector("#firstname").value + " " + document.querySelector("#birthdate").value;
    let title = document.querySelector("#lastname").value + " " + document.querySelector("#firstname").value;
    
    generateAndDownloadQrCode(filename, title);

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

