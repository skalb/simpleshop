$(document).ready(function() {
  $('#edit').toggle();
  filepicker.setKey("AD6J0uh3SRyiHewFxBI4Iz");

  var featherEditor = new Aviary.Feather({
       apiKey: 'md7krfw7hnxlnfnd',
       apiVersion: 2,
       tools: 'all',
       appendTo: 'injection_site',
       onSave: function(imageID, newURL) {
           var img = document.getElementById(imageID);
           img.src = newURL;
       },
       onError: function(errorObj) {
           alert(errorObj.message);
       }
   });
   function launchEditor(id, src) {
       featherEditor.launch({
           image: id,
           url: src
       });
      return false;
   }

  $('#edit').on('click', function() {
    launchEditor('photo', $('#photo').attr('src'));
  });

  $("#upload").on('click', function() {
    filepicker.pickAndStore({mimetype:"image/*"}, {location:"S3"}, function(inkBlobs){
      $('#upload').toggle();
      $('#edit').toggle();
      $('#photo').attr('src', inkBlobs[0].url)
      launchEditor('photo', inkBlobs[0].url);
    });
  });

});