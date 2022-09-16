let li = document.querySelectorAll('.post-li'); 

for(let i = 0; i < li.length; i++){
    const post_id = $(li[i]).children('.my-posts').attr('id');
    
    $('#'+post_id).on('click', function(){
        document.location.replace('/dashboard/edit/'+post_id);
    });
}