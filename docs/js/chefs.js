// --- Chefs social links --- //
export const initChefsSocialLinks = () => {
    $(document).ready(function(){
        $('#Brady_Smith_card').click(function() {
            $('#Brady_Smith_socials').slideToggle();
        });
    
        $('#Tom_Eddison_card').click(function() {
            $('#Tom_Eddison_socials').slideToggle();
        });
    
        $('#Willy_Chan_card').click(function() {
            $('#Willy_Chan_socials').slideToggle();
        });
    });
}
