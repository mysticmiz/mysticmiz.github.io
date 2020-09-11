function openChat(){
documen.getElementsById('.chatbox").style.display='block';
$(.btn-chat').hide();
}
function closeChat(){
documen.getElementsById('.chatbox").style.display='none';
$(.btn-chat').show();
$('.form').submit(function(){
var text-$(this).find("textarea[name='msg']").val();
alert(text);
)};