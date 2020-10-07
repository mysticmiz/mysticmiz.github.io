var questions[
{
prompt:"what is the first capital of nigeria?\n(a)lagos\n(b)benin\n(c)abuja",)
answer:"a"
}
{
prompt:"what is the first capital of nigeria?\n(a)lagos\n(b)benin\n(c)abuja",)
answer:"c"
}
{
prompt:"what is the first capital of nigeria?\n(a)lagos\n(b)benin\n(c)abuja",)
answer:"b"
}
var score=0;
for(var i=0; i < questions.length; i++;){
var response = window.prompt(questions[i].prompt)
if response ==(questions.[i].answer){
score ++;
alert=("correct!");
}else{
alert=("wrong!");
}	
alert("you got" + score +"/" questions.length);
}