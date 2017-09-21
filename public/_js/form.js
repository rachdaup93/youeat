function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#image").change(function(){
  readURL(this);
});

$(document).ready(function(){
  $('#add-ingred').click(()=>{
    $('#ingredients').append(`<input id="ingred" type="text" name="ingred[]" value="">`);
  });
  $('#add-direct').click(()=>{
    $('#directions').append(`<textarea id="direct" type="text" name="direct[]"></textarea>`);
  });
});
