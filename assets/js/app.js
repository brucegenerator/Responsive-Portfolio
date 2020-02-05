var mode = 1;

$('.dark').on('click', ()=>invt(mode))
function invt(x) {
    $('html')[0].style.filter = `invert(${x})`;
    $('body')[0].style.filter = `invert(${x})`;
    // $('.wrapper').css('filter', `invert(${x})`);
    $('.container').css('filter', `invert(${x})`);
    $('.work-section').css('filter', `invert(${x})`);
    // $("#masthead").css('filter', `invert(${x})`);
    $('.work').css('filter', `invert(${x})`);
    if (mode === 0) {
        mode = 1; 
        $('.dark').text('Dark Mode')
    } else {
        mode = 0; 
        $('.dark').text('Light Mode')
    }
}