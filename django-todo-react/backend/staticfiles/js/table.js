$(document).ready(function() {
    $('#uploadFile').change(function() {
        var filename = $(this).val().replace(/.*(\/|\\)/, '');
        $('#filename').html(filename);
    });
    $('#submitInput').click(function() {
        if ($('#uploadFile')[0].files.length != 0) {
            $('#filename').css("color", "#000");
            $('#uploadData').css("display", "table");
        } else {
            $('#filename').css("color", "#e20a16");
            $('#uploadData').css("display", "none");
        }
    });
    $('#resetInput').click(function() {
        $('#uploadFile').val(null);
        $('#filename').html('No File');
        $('#uploadData').css("display", "none");
    });

});