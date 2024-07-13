$(document).ready(function () {
    let x1 = `Dalam persamaan 1/2a + 1 = 2/6a - 5, berapakah nilai a yang tepat?`;
    $('.x1').html(x1);
    let ans1 = `1/2a + 1 = 2/6a - 5
    1/2a - 2/6a = -5 - 1
    3/6a - 2/6a = -6
    1/6a = -6
    a = -6 x 6
    a = -36`;
    $('#ans1').html(ans1);
    let x2 = `jika nilai x adalah 3, maka berapakah hasil dari 4/(2x) + (x+1)/3 ?`;
    $('.x2').html(x2);
    let ans2 = `4/(2x) + (x+1)/3
    => 4/(2(3)) + ((3)+1)/3
    => 4/6 + 4/3
    => 4/6 + 8/6
    => 12/6
    => 2`;
    $('#ans2').html(ans2);
    let x3 = `Aziz membeli buku sebanyak 3 kotak ditambah 7 buku tambahan. Jumlah buku yang dibeli oleh Aziz adalah 28 buah. Berapa banyak buku yang ada dalam setiap kotak?`;
    $('.x3').html(x3);
    let ans3 = `Anggap kotak adalah x, jadi
    Aziz membeli buku sebanyak:
    3x + 7 = 28
    3x = 28 -7
    3x = 21
    x = 7
    Jadi dalam setiap kotak terdapat 7 buku`;
    $('#ans3').html(ans3);
});