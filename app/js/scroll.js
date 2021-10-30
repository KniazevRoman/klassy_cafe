// --- Scroll to top button --- //
export const initScrollToTop = () => {
    $(document).ready(function() {
        $('#scroll-up').click(function() {
            document.documentElement.scrollTop = 0;
        });
    });
    
    $(document).scroll(function() {
        if(document.documentElement.scrollTop >= 700 && document.querySelector('#scroll-up').classList.contains('d-none')) {
            $('#scroll-up').addClass('d-block');
            $('#scroll-up').removeClass('d-none');
        } else if(document.documentElement.scrollTop < 700 && document.querySelector('#scroll-up').classList.contains('d-block')) {
            $('#scroll-up').addClass('d-none');
            $('#scroll-up').removeClass('d-block');
        }
    });
}
