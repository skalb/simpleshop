$(document).ready(function() {
  filepicker.setKey("AD6J0uh3SRyiHewFxBI4Iz");

  $("#upload").on('click', function() {
    filepicker.pickAndStore({mimetype:"image/*"}, {location:"S3"}, function(inkBlobs){
      $('#photo').attr('src', inkBlobs[0].url);
    });
  });
});