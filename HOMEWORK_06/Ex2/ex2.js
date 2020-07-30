$(document).ready(function(){
    $("#select").change(function(){
        var sq_num=$(this).val();
        $(".sq_b").html('');
        for (let i=0;i<sq_num;i++) {
           $(".sq_b").append('<div class="sq"></div>');
        }
    })
})