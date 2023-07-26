$(document).ready(function () {
	let p1 = `\tSebelum memasuki materi Persamaan Linear Satu Variabel, kita harus mengetahui apa itu kalimat terbuka, variabel, dan konstanta. Ketiga hal tersebut merupakan materi pembuka untuk materi PLSV ini.\nPengertian dari ketiga hal tersebut adalah :\n
	(a)Kalimat Terbuka adalah kalimat yang mengandung satu atau lebih variabel \tdan belum diketahui nilai kebenarannya.Contohnya adalah kalimat 2x + 5.\n\t(b)Variabel adalah lambang (symbol) pada kalimat terbuka yang dapat diganti oleh sembarang anggota himpunan yang telah ditentukan. Contohnya bisa x, y, z, dan lainnya.\n\t(c)konstanta adalah lambang yang menyatakan suatu bilangan tertentu.\n\nMari kita perhatikan kalimat "x + 3 = 7"\n\n\tBelum dapat mengatakan kalimat itu benar atau salah, sebab nilai (x) belum diketahui. Bila lambang (x) diganti dengan lambang bilangan cacah, barulah itu dapat dikatakan kalimat itu benar atau salah. Jika (x) diganti dengan “3” , kalimat itu bernilai salah ; tetapi bila (x) diganti dengan "4", kalimat itu bernilai benar. Lambang (x) dapat pula diganti menggunaan huruf-huruf kecil dalam abjad lainnya, yaitu ; a, b,c,… x,y,z dari bentuk diatas.\n\nx + 3 + 7\t\t(kalimat terbuka)\n3 + 3 = 7\t(kalimat Salah )\n4 + 3 = 7\t(kalimat benar)\n(Huruf x pada x + 5 = 12 disebut variable (peubah), sedangkan 5 dan 12 disebut konstanta).`
	$('.p1').html(p1)
	let p2 = `\tPersamaan linear satu variabel adalah kalimat terbuka yang dihubungkan dengan tanda sama dengan (=) dan hanya memiliki satu variabel berpangkat satu. Bentuk Umum Persamaan Linear Satu Variabel Bentuk umum Persamaan Linear Satu Variabel adalah :\n\n\tax + b = c\n\n-a adalah koefisien, dan nilai a tidak boleh 0\n-x adalah variabel\n-b adalah konstanta\n-suku di sebelah kiri tanda (=) disebut ruas kiri\n-suku di sebelah tanda (=) disebut ruas kanan\n\nContoh-contoh dari PLSV adalah sebagai berikut :\n\t1). x - 6 = 12\n\t2). 3y + 3 = 7\n\t3). 2p - 5 = 4p + 3`
	$('.p2').html(p2)
	let p3 = `Jika kedua ruas satu persamaan:\n(1).Ditambah dengan bilangan yang sama.\n(2).Dikurangi dengan bilangan yang sama. \n(3).Dikalikan dengan bilangan yang sama. \n(4).Dibagi dengan bilangan yang sama.\n(5).Jika terdapat pecahan kalikan kedua ruas dengan penyebutnya.
	\n*Berlaku untuk KEDUA RUAS baik yang di kiri atau yang di kanan*\n`
	$('.p3').html(p3)



})