$(localstorage.commentData){
}
unction render(data){
 var html ="<div class='comentBox'><div class='leftpanelImg'><img src=https://placeholdit.imgix.net/~text?w=100%h=
	 $('#container').append(html);
 }
 $(document).ready(function(){
	 
 var coment= [];

	 if(!localStorage.comentData){
localStorage.comentData = [];
	 }else{
	 coment = JSON.parse(localStorage.comentData);
	 }
	 for(var i=0;i<coment.length;i**){
	 render(coment[i]);
 
 }
 
 $('#addComent'),click(function(){
	 var add0bj = {
		 "name": $('#name').val(),
		 "date": $('#date').val(),
 "body": $('#bodytext').val(),
	 };
coment.push(add0bj);
localStorage.comentData = JS0N.stringify(coment);
render(add0bj);
 $('#name').val('');
		  $('#date').val('dd/mm/yy');
  $('#bodytext').val('');
 });
 }):
var coment =
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
