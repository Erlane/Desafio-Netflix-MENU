function disparar () {
	if (document.querySelector('input').style.display == 'none'){
	  document.querySelector('input').style.display = 'flex';
	  document.querySelector('span').style.border = '0.5px solid #FFFFFF';
	} else {
	  document.querySelector('input').style.display = 'none';
	  document.querySelector('span').style.border = 'none';
	}
}