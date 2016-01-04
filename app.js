/**
 * Created by mark on 1/4/16.
 */
console.log("test");
$(document).ready(function(){
    init();
});
function init () {
    console.log("jquery is great success");
}
    $.ajax('data.json').then(function (response) {
        for (var i = 0; i < response.length; i++) {
            var $content = '';

            var id = response[i].id;
            var gender = response[i].gender;
            var first_name = response[i].first_name;
            var last_name = response[i].last_name;
            var email = response[i].email;

            //console.log(id, gender, first_name, last_name, email);
         $content = 'Id: '+ id + '<br/>' + 'Gender: '+ gender +'<br/>' + 'First name: ' + first_name + '<br/>'+ 'Last name: ' + last_name + '<br/>' + 'Email: '+ email + '<br/>';

         $('.people').append('<p>'+$content+'</p>').hide().fadeIn();
        }
    });
