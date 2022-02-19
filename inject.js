setTimeout(function() {
	// mencari tombol dengan nama [MENU AKSI]
	var x = document.getElementsByTagName('span');
	for (var y = 0; y < x.length; y++){
		if(x[y].className === "x-btn-wrap x-btn-wrap-soft-green-small x-btn-arrow x-btn-arrow-right"){
			x[y].click();
		}
	}

	// mencari tombol atau submenu dengan nama PERIODIK (2021/2022)
	var simpan = document.getElementsByTagName('span');
	for (var i in simpan) {
		if (simpan[i].innerText === 'Periodik (2021/2022)') {
			simpan[i].click();
		}
	}
}, 1000);
setTimeout(function() {
	// untuk [JUMLAH LAIK] ini bisa dinonaktifkan karena
	// saya buat default nilainya adalah 1 untuk mempermudah 
	// dalam menyelesaikan atau meng-nol-kan INVALID
	document.getElementsByName('jumlah_laik')[0].value = '1';
}, 3000);
setTimeout(function() {
	var simpan = document.getElementsByTagName('span');
	for (var i in simpan) {
		if (simpan[i].innerText === 'Simpan dan Tutup') {
			simpan[i].click();
		}
	}
}, 4000);

/*setTimeout(function(){
	var jqry = document.createElement('script');
	jqry.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
	document.getElementsByTagName('head')[0].appendChild(jqry);
}, 3000);

setTimeout(function(){
	swal('Dapodik 2022 - ch347','Data sudah terisi otomatis!','success');
}, 3000);*/