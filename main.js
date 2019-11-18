function mudarCor(event) {
	console.log('passei e sai correndo')
	if(window.scrollY <= 0){
		document.querySelector('.menu').style.background = 'transparent';
	}
	else{
		document.querySelector('.menu').style.background = '#000';
	}
}


function mostrar() {
	document.querySelector('.header-account').style.display = 'flex';
}

function sumir() {
	document.querySelector('.header-account').style.display = 'none';
}


function disparar () {
	if (document.querySelector('input').style.display == 'flex'){
	  document.querySelector('input').style.display = 'none';
	  document.querySelector('span').style.border = 'none';
	  document.querySelector ('.menu-2').style.width = '20vw'  
	} 
	else {
	  document.querySelector('input').style.display = 'flex';
	  document.querySelector('span').style.border = '0.5px solid #FFFFFF';
	  document.querySelector ('.menu-2').style.width = 'calc(20vw + 177px)'
	}
}

function test (sessao) {
	console.log('.' + sessao + '-1')
	document.querySelector('.' + sessao + '-1').style.display = 'none';
	document.querySelector('.' + sessao + '-2').style.display = 'flex';

}

function test2 (sessao) {
	console.log('.' + sessao + '-1')
	document.querySelector('.' + sessao + '-2').style.display = 'none';
	document.querySelector('.' + sessao + '-1').style.display = 'flex';

}