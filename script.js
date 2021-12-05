
// function send_cont(){
//  event.preventDefault();
//     var formData1  = $('#contform').serialize(); 
//      $.ajax({
//             type: 'POST',
//             datatype: 'json',
//             url: 'cont_mail.php',
//             data: {
//                 formData1:formData1 
//             },
//             success: function (e) {
//                  window.location = "sendemail.php";
              
//             }
//         }
//     );
// }


 




/////////////  add Student ////////////
$(document).on('click', '.sch_ads_sub', function (event) {
    event.preventDefault();
     var add_std = $('.sch_ads').serialize();
      var flag2 = 0;
    /*var stu_img = localStorage.getItem('stu_img');
    if (stu_img === null || stu_img === undefined || stu_img == "") {
        stu_img = "";
    }*/
    
    $('.sch_ads').find('.mando').each(function () {
        if ($(this).val() == null || $(this).val() == "" || $(this).val() == "default") {
            flag2++;

        }
    });
   /* $('.sch_ads').find('.mando').each(function () {
        if ($(this).val() == "default") {
            flag2++;
        }
    });*/

    
    if (flag2 == 0) {
        var phoneNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    // Phone Number Check
    var inputpn = $('.inputpn').val();
    //var enrolfor = $("select[name='sch_ads_type']").val();
    if ((phoneNumber.test(inputpn) == false) || inputpn.length != 10) {
         alert('Enter Valid Phone Number');
        //swal("", "Enter valid phone Number", "warning");

        return false;
    }
       //$('#please-wait').css('display','block'); 
       $('.sch_ads_sub').attr('disabled','true')  // disable Button
        // show please wait 
        $.ajax({
            type: 'POST',
            datatype: 'json',
            url: 'db/add_std.php',

            data: {
                add_std: add_std
                //stu_img: stu_img
            }
        }).done(function (data) {
            //window.location = "alumini_reg.php";
            window.location = "view_reg.php";
        })
    }
    else {
     alert('Fll All The Details');
        //swal("","Fill all details" , "warning");
    }
});

    //// Filter Cheque
/// === RESIZE IMAGE AND STORE INTO LOCAL STORAGE === ///
function store_img(img_field_id, place_img_to , haveTrueSize) {

    var haveTrueSize = haveTrueSize || false ;
    var place_img_to = place_img_to == 'none' ? false : place_img_to ;

    var file = $('#' + img_field_id)[0].files[0];
    // Ensure it's an image
    if (file.type.match(/image.*/)) {

        // Load the image
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
          var image = new Image();
          image.onload = function (imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                max_size = 544,
                width = 120,
                height =  120;

                // haveTrueSize
                if(haveTrueSize){
                  max_size = 544,
                  width = this.width;
                  height =  this.height;
                }

                if (width > height) {
                  if (width > max_size) {
                    height *= max_size / width;
                    width = max_size;
                  }
                } else {
                  if (height > max_size) {
                    width *= max_size / height;
                    height = max_size;
                  }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');

                // localStorage.setItem(img_field_id, dataUrl.replace('data:image/jpeg;base64,', ''));
                $('#stu_img_base64').val(dataUrl.replace('data:image/jpeg;base64,', ''));
                canvas.setAttribute("class", "stu_img_cls");
                if(place_img_to){
                  $('#' + place_img_to).html(canvas);
                }
              }
              image.src = readerEvent.target.result;
            }
            reader.readAsDataURL(file);
          } else {
            alert('Please Upload An Valid Image File');
          }
        }



/////////////  add Student ////////////
$(document).on('click', '.sch_ami_submit', function (event) {
    event.preventDefault();
     var add_sch_ami = $('.sch_admi').serialize();
      var flag2 = 0;
    /*var stu_img = localStorage.getItem('stu_img');
    if (stu_img === null || stu_img === undefined || stu_img == "") {
        stu_img = "";
    }*/
    
    $('.sch_admi').find('.mando').each(function () {
        if ($(this).val() == null || $(this).val() == "") {
            flag2++;

        }
    });
    $('.sch_admi').find('.mando').each(function () {
        if ($(this).val() == "default") {
            flag2++;
        }
    });

    
    if (flag2 == 0) {

      $('.sch_ami_submit').attr('disabled','true')  // disable Button
        $.ajax({
            type: 'POST',
            datatype: 'json',
            url: 'db/admission_std.php',

            data: {
                add_sch_ami: add_sch_ami
                //stu_img: stu_img
            }
        }).done(function (data) {
           //window.location = "form.php";
           window.location = "view_admission.php";
        })
    }
    else {
     alert('Fll all the details');
        
    }
});