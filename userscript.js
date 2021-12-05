
  function linkclick(e){
    //alert();
    
    var id = $(e).attr('data-id');
    var hr = $(e).attr('href');
    //sk=sk.substr(11);
      //alert(id);
      //alert(sk);

      $.ajax({url:"newgallery.php?id="+id+"&hre="+hr,cache:false,success:function(result){
        //alert();
        //window.location.href();
          $(".tab-content").html(result);
      }});
}


 function linkclickall(e){
    //alert();
    window.location.reload();
    
}


  function imgclick(e){
    //alert();

    var id = $(e).attr('data-id');
    var sk = $(e).attr('src');
    sk=sk.substr(21);
      //alert(id);
      //alert(sk);

      $.ajax({url:"newfile.php?idd="+id+"&src="+sk,cache:false,success:function(result){
        //alert();
          $(".modal-body").html(result);
      }});

      // $('#myModal').modal('show');
}