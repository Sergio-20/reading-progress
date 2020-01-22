let position;
let bodyHeight = document.documentElement.scrollHeight;
let windowHeight = window.innerHeight;
let scrollProgress;


let progress = ( height, color ) => {
	
  let progressBar = document.createElement( "SPAN" );

  progressBar.classList.add( "progress-bar" );

  progressBar.style.backgroundColor = color;
  progressBar.style.height = `${ height }rem`;

  document.body.appendChild( progressBar );
	
};

window.addEventListener( "scroll", function() {
    position = this.scrollY;
   
  //Turn the progress bar width into a value from 0 to 100 
	scrollProgress = ( position / ( bodyHeight - windowHeight ) ) * 100;
		document.querySelector( ".progress-bar" ).style.width = `${ scrollProgress }%`;
});

export default progress;
