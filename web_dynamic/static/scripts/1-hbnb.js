$(function() {
    const mylist = {};
    $('input[type="checkbox"]').on('change', function () {
        if ($(this).is(':checked')) {
          mylist[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
          delete mylist[$(this).attr('data-id')]
        }
        $('.amenities h4').text(Object.values(mylist).join(', '));
      });
});