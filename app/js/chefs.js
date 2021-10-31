// --- Chefs social links --- //
export const initChefsSocialLinks = () => {
    $(document).ready(function(){
        $('#Brady_Smith_card').click(function() {
            $('#Brady_Smith_socials').slideToggle();
            $('#Brady_Smith_card .badge').toggleClass('open-indicator');
            $('#Brady_Smith_card .badge').toggleClass('close-indicator');
        });
    
        $('#Tom_Eddison_card').click(function() {
            $('#Tom_Eddison_socials').slideToggle();
            $('#Tom_Eddison_card .badge').toggleClass('open-indicator');
            $('#Tom_Eddison_card .badge').toggleClass('close-indicator');
        });
    
        $('#Willy_Chan_card').click(function() {
            $('#Willy_Chan_socials').slideToggle();
            $('#Willy_Chan_card .badge').toggleClass('open-indicator');
            $('#Willy_Chan_card .badge').toggleClass('close-indicator');
        });
    });
}
