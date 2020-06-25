
$(document).ready(function($){
    $('.filter-item').on('click', function () {
        $('.filter-list .active').removeClass('active');
        $(this).addClass('active');
        var type = $(this).data('type');
        $('.all').hide();
        $('.'+type).show();
    });
});