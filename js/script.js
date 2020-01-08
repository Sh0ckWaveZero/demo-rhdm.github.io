// JavaScript Document
var p = {
    0: "100 บาท",
    1: "300 บาท",
    2: "500 บาท",
    3: "1000 บาท",
};

var t = {
    0: "100",
    1: "300",
    2: "500",
    3: "1000",
}

var p_call = {
    0: "100 นาที",
    1: "300 นาที",
    2: "500 นาที",
    3: "1000 นาที",
};

var t_call = {
    0: "100",
    1: "300",
    2: "500",
    3: "1000",
}

var p_net = {
    0: "1 GB",
    1: "5 GB",
    2: "16 GB",
    3: "50 GB",
};

var t_net = {
    0: "1",
    1: "5",
    2: "16",
    3: "50",
}


$(document).ready(function() {

    $("#slider_amirol").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 3,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(1,ui.value); //changed
            }
    });

    $("#slider_calls").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 3,
        step: 1,
        slide: 
            function(event, ui) 
            {
                updateCalls(1,ui.value); //changed
            }
    });

    $("#slider_internet").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 3,
        step: 1,
        slide: 
            function(event, ui) 
            {
                updateInternet(1,ui.value); //changed
            }
    });
    update();
    updateCalls();
    updateInternet();
    // calcualtePrice();
});
        
function update(slider,val) {
    if(undefined === val) val = 0;
    var amount = p[val];
    $('#sliderVal').val(val);
    $('#slider_amirol a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
function updateCalls(slider,val) {
    if(undefined === val) val = 0;
    var amount = p_call[val];
    $('#sliderCallsVal').val(val);
    $('#slider_calls a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function updateInternet(slider,val) {
    if(undefined === val) val = 0;
    var amount = p_net[val];
    $('#sliderInternetVal').val(val);
    $('#slider_internet a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function calcualtePrice(){
    var amount = t[document.getElementById('sliderVal').value];
    var amountIndex = document.getElementById('sliderVal').value;
    var amountCall = t_call[document.getElementById('sliderCallsVal').value];
    var amountCallIndex = document.getElementById('sliderCallsVal').value;
    var amountNet = t_net[document.getElementById('sliderInternetVal').value];
    var amountNetIndex = document.getElementById('sliderInternetVal').value;
    var message ="";
    var title ="";
    if(amount >= 1000) {
        if(amountCallIndex <  amountNetIndex ){
            title = "พบแพ็คเกจที่ต้องการ";
            message = '4G Max Speed\n' ;
        }else{
            title = "พบแพ็คเกจที่ต้องการ";
            message = 'คุยเพลิน\n' ;
        }
    }else if(amount >= 500 ){
        if(amountCallIndex <  amountNetIndex ){
            title = "พบแพ็คเกจที่ต้องการ";
            message = '4G Super Net\n' ;
        }else{
            title = "พบแพ็คเกจที่ต้องการ";
            message = 'โทรคุ้ม เน็ตเยอะ\n' ;
        }
    }else if(amount > 101 ){
        if(amountCallIndex <  amountNetIndex ){
            title = "พบแพ็คเกจที่ต้องการ";
            message = 'Simple Plan\n' ;
        }else{
            title = "พบแพ็คเกจที่ต้องการ";
            message = 'Second\n' ;
        }
    }


      if(message!=''){
        $('#alertModal').find('.modal-title').text(title);
        $('#alertModal').find('.modal-body p').text(message);
        $('#alertModal').modal('show');
      }else{
        $('#alertModal').find('.modal-title').text('ไม่พบข้อมูลแพ็คเกจที่คุณต้องการ');
        $('#alertModal').find('.modal-body p').text(message);
        $('#alertModal').modal('show');
      }
      
    }

