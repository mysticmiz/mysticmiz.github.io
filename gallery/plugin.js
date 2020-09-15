
 let thumbnails = document.getElementsByClassName('thumbnail')  
   
let activeImages = document.getElementsByClassName('active')

   for (var i=0; i < thumbnails.length; i++){
 
  thumbnails[i].addEventListener('mouseover', function(active){
  console.log(activeImages)
  
  if (activeImages.length > 0){
          activeImages[0].classlist.remove('active')
		   }
			this.classlist.add('active'){
			document.getElementsById('featured').src = this.src
  
	
	)}
	let buttonRigt = document.getElementById('slideRight');
	let buttonLeft = document.getElementById('slideLeft');
	
	buttonLeft.addEventListener('click', function(){
		document.getElementById('slider').scrollRight -= 180
		
	})
	
	buttonRight.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft   = 180;
	
		
	})