import $ from "https://code.jquery.com/jquery-4.0.0.module.js"

$(function() {
    $('#testForm').submit(function(e) {
        $.ajax({
        url: '/api/issues/apitest',
        type: 'post',
        data: $('#testForm').serialize(),
        success: function(data) {
            $('#jsonResult').text(JSON.stringify(data));
        },
        error: function(err){
            console.log("Sorry there was an error");
        }
        });
        e.preventDefault();
    });
    $('#testForm2').submit(function(e) {
        $.ajax({
        url: '/api/issues/apitest',
        type: 'put',
        data: $('#testForm2').serialize(),
        success: function(data) {
            $('#jsonResult').text(JSON.stringify(data));
        }
        });
        e.preventDefault();
    });
    $('#testForm3').submit(function(e) {
        $.ajax({
        url: '/api/issues/apitest',
        type: 'delete',
        data: $('#testForm3').serialize(),
        success: function(data) {
            $('#jsonResult').text(JSON.stringify(data));
        }
        });
        e.preventDefault();
    });
});