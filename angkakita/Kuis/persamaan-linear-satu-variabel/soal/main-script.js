$(document).ready(function () {
    //variable declaration
    let question = [];
    let pageX = 0;
    let answeArr = [];
    let choosed;
    let randNumFix = findRandNum();
    let questionArray = [
        [
            ["Dalam pernyataan 2x + 3 = 1, yang termasuk ke dalam variabel adalah..."],
            [2, 'x', 3, 1],
            ["B", "x"],
            [`Bentuk umum persamaan linear satu variabel adalah ax + b = c.\n- a adalah koefisien\n- x adalah variabel\n- c adalah konstanta`]
        ],
        [
            ["Jika x + 3 = 7, maka nilai x yang memenuhi adalah..."],
            [7, 1, 6, 4],
            ["D", "4"],
            [`x + 3 = 7\t(kurangi kedua ruas dengan 3)\nx = 7 - 3\nx = 4`]
        ],
        [
            ["Nilai y yang tepat untuk persamaan 5 - y = -1 adalah..."],
            [2, 5, 6, 8],
            ["C", "6"],
            [`5 - y = -1\t(kurangi kedua ruas dengan 5)\n-y = -6\t(kalikan kedua ruas dengan -1)\ny = 6`]
        ],
        [
            ["Berapakah nilai dari 1/2m - 6, jika nilai m = 4?"],
            [2, 0, '-4', '-5'],
            ["C", "-4"],
            [`1/2m - 6 =...\t(nilai m = 4)\n1/2(4) - 6 =...\t(1/2 dikalikan 4 adalah 2)\n2 - 6 = -4`]
        ],
        [
            ["Jika penyelesaian untuk 2x - 5 = 3 adalah a, dan penyelesaian untuk -3x + 2 = -4 adalah b. Maka nilai dari 2b -a adalah..."],
            [0, '-2', 6, 3],
            ["A", "0"],
            [`a).2x -5 = 3\t(tambah kedua ruas dengan 5)\n2x = 8\t(bagi kedua ruas dengan 2)\nx = 4\t,Jadi a = 4\n\nb).-3x + 2 = -4\t(kurangi kedua ruas dengan 2)\n-3x = -6\t(bagi kedua ruas dengan -3)\nx = 2\t,Jadi b = 2\n\n2b - a =...\n2(2) - 4 = 0`]
        ],
        [
            ["Berapa nilai p yang tepat untuk persamaan 1/3p - 4 = 7?"],
            [33, 22, 21, 31],
            ["A", "33"],
            [`1/3p - 4 = 7\t(tambah kedua ruas dengan 4)\n1/3p = 11\t(bagi kedua ruas dengan 1/3)\n*INGAT PELAJARAN PEMBAGIAN PECAHAN*\np = 11 x 3\np = 33`]
        ],
        [
            ["Berapakah nilai a yang tepat jika 5 - a = 3a + 17?"],
            [0, '-1', '-2', '-3'],
            ["D", "-3"],
            [`5 - a = 3a + 17\t(kurangi kedua ruas dengan 3a)\n5 - 4a = 17\t(kurangi kedua ruas dengan 5)\n-4a = 12\t(bagi kedua ruas dengan -4)\na = -3`]
        ],
        [
            ["Yasin membeli buku sebanyak 2 kotak ditambah 5 buku tambahan. Jumlah buku yang dibeli oleh Yasin adalah 19 buah. Berapa banyak buku yang ada dalam setiap kotak? "],
            [11, 6, 7, 12],
            ["C", "7"],
            [`Anggap kotak sebagai x\njadi persamaannya adalah 2x + 5 =19\n2x + 5 = 19\t(kurangi kedua ruas dengan 5)\n2x = 14\t(bagi kedua ruas dengan 2)\nx = 7\nJadi jumlah buku dalam setiap kotak adalah 7 buah`]
        ],
        [
            ["Berapa nilai m yang tepat jika 2m + 8 = m - 3?"],
            ['-11', '-13', '-9', '-7'],
            ["A", "-11"],
            [`2m + 8 = m - 3\t(kurangi kedua ruas dengan m)\nm + 8 = -3\t(kurangi kedua ruas dengan 8)\nm = -11`]
        ],
        [
            ["Dalam persamaan x - 3 = 8, berapa nilai koefisien dari variabel x?"],
            [3, 2, 1, 8],
            ["C", "1"],
            [`Dalam persamaan di atas tidak ada angka di depan variabel x, yang berarti nilai koefisien dari variabel x adalah 1`]
        ],
        [
            ["Kalimat terbuka yang dihubungkan tanda sama dengan (=) dan hanya mempunyai satu variabel berpangkat 1 disebut..."],
            ['persamaan', 'persamaan kuadrat', 'persamaan linear', 'persamaan linear satu variabel'],
            ["D", "persamaan linear satu variabel"],
            [`-persamaan adalah suatu pernyataan matematika dalam bentuk simbol yang menyatakan dua hal persis sama\n-persamaan kuadrat adalah persamaan yang variabelnya memiliki pangkat tertinggi sama dengan dua (2)\n-persamaan linear adalah sebuah persamaan aljabar, yang tiap sukunya mengandung konstanta, atau perkalian konstanta dengan variabel tunggal\n-persamaan linear satu variabel adalah Kalimat terbuka yang dihubungkan tanda sama dengan (=) dan hanya mempunyai satu variabel berpangkat 1`]
        ],
        [
            ["Dalam persamaan 2/5p - 4/5 = 7/5, nilai p yang tepat adalah..."],
            ['5,5', '4,5', '6,5', '7,5'],
            ["A", "5,5"],
            [`2/5p - 4/5 = 7/5\t(tambah kedua ruas dengan 4/5)\n2/5p = 11/5\t(bagi kedua ruas dengan 2/5)\n*INGAT PELAJARAN PEMBAGIAN PECAHAN*\np = 11/5 x 5/2\np = 11/2\np = 5,5`]
        ],
        [
            ["JIka nilai x = 3, manakah persamaan yang benar diantara jawaban berikut?"],
            ['2x - 1 = 5', 'x +2 = 4', '3x - 3 = 7', '2x + 3 = 3x - 4'],
            ["A", "2x - 1 = 5"],
            [`(a). 2(3) - 1 = 5\n6 - 1 = 5\t(benar)\n\n(b). (3) + 2 = 4\t(salah)\n\n(c). 3(3) - 3 = 7\n9 - 3 = 7\t(salah)\n\n(d). 2(3) + 3 = 3(3) - 4\n6 + 3 = 9 - 4\t(salah)`]
        ],
        [
            ["Manakah yang termasuk ke dalam persamaan linear satu variabel?"],
            ['3m + 5', '2x + 3y = 9', '4y - 5 = 7', '3p + 2p'],
            ["C", "4y - 5 = 7"],
            [`Yang merupakan ciri-ciri dari persamaan linear satu variabel (PLSV) adalah terdapat tanda sama dengan (=) & hanya terdapat satu variabel, yaitu 4y - 5 = 7`]
        ],
        [
            ["Zaki membeli 1 box pensil dan 6 pensil tambahan. Sedangkan Fikri membeli 2 box pensil saja. Setiap 1 box pensil berisi 8 buah pensil. Berapa total pensil yang dibeli oleh mereka berdua?"],
            [15, 20, 25, 30],
            ["D", "30"],
            [`Anggap box adalah x, dan setiap box berjumlah 8\n(a). Jumlah pensil Zaki :\nx + 6 =...\n8 + 6 = 14 buah\n\n(b). Jumlah pensil Fikri :\n2x =...\n2(8) = 16 buah\n\nJumlah pensil Zaki & Fikri :\n16 + 14 = 30 buah pensil`]
        ],
        [
            ["Apakah 2x - 12 termasuk persamaan linear satu variabel?"], ['Salah', 'Benar', 'A & B benar', 'A & B salah'],
            ["A", "Salah"],
            [`Pernyataan '2x - 12' bukan termasuk PLSV, karena tidak terdapat salah satu ciri-cirinya yaitu tanda sama dengan (=)`]
        ],
        [
            ["3a + 2 = 11, jika nilai a = 3, Benarkah pernyataan tersebut?"], 
            ['Salah', 'Benar', 'A & B benar', 'A & B salah'],
            ["B", "Benar"],
            [`3a + 2 = 11\n3(3) + 2 = 11\n9 + 2 = 11\t(benar)`]
        ], 
        [
            ["Berapa nilai p yang tepat untuk 3p - 5 = 7?"], 
            [2, 6, 4, 8],
            ["C", "4"],
            [`3p - 5 = 7\t(tambah kedua ruas dengan 5)\n3p = 12\t(bagi kedua ruas dengan 3)\np = 4`]
        ],
        [
            ["Yang merupakan ciri-ciri dari persamaan linear satu variabel adalah di bawah berikut, kecuali..."], 
            ['Terdapat tanda sama dengan (=)', 'Hanya terdapat variabel x yang berpangkat satu', 'Hanya terdapat variabel y yang berpangkat satu', 'Hanya terdapat variabel x berpangkat 2'],
            ["D", "Hanya terdapat variabel x berpangkat 2"],
            [`persamaan linear satu variabel adalah Kalimat terbuka yang dihubungkan tanda sama dengan (=) dan hanya mempunyai satu variabel berpangkat 1`]
        ],
        [
            ["Jika 5b - 12 = 3 + 2b, maka nilai b yang tepat adalah..."], 
            [2, 5, 6, 8],
            ["b", "4"],
            [`5b - 12 = 3 + 2b\t(tambah kedua ruas dengan 12)\n
            5b = 15 + 2b\t(kurangi kedua ruas dengan 2b)\n
            3b = 15\t(bagi kedua ruas dengan 3)\n
            b = 5`]
        ]

]

    
    let trueList = $('.listTrue');
    let falseList = $('.listFalse');
    console.log(questionArray[0][3])
    randNumFix.forEach(m => question.push(questionArray[m]));

    let userAns = [];
    let trueAns = [];
    let falseAns = [];
    let trueNum;
    let answerArrTrue = [];
    question.forEach((m, i) => {
        answerArrTrue.push(m[2][0])
    })
    console.log(question)
    //function declaration  
    function findRandNum() {
        let randomNumber = [];
        let randNum;
        let num;

        function checkNum() {
            randNum = Math.floor(Math.random() * (20 - 0));
            for (let z = 0; z < randomNumber.length; z++) {
                if (randNum == randomNumber[z]) {
                    checkNum();
                }

            }

            return randNum;

        }
        for (let i = 0; i < 5; i++) {
            num = checkNum();
            randomNumber.push(num);

        }

        return randomNumber;

    }

    function expSet(question) {
        $(".true1").html(`${question[0][2][0]}. ${question[0][2][1]}`);  
        $(".exp1").html(question[0][3]);
        $(".q1").html(`${question[0][0]}`);
        $(".q2").html(`${question[1][0]}`);
        ;$(".q3").html(`${question[2][0]}`)
        ;$(".q4").html(`${question[3][0]}`);
        $(".q5").html(`${question[4][0]}`);
        $(".true2").html(`${question[1][2][0]}. ${question[1][2][1]}`);
        $(".exp2").html(question[1][3]);
        $(".true3").html(`${question[2][2][0]}. ${question[2][2][1]}`);
        $(".exp3").html(question[2][3]);
        $(".true4").html(`${question[3][2][0]}. ${question[3][2][1]}`);
        $(".exp4").html(question[3][3]);
        $(".true5").html(`${question[4][2][0]}. ${question[4][2][1]}`);
        $(".exp5").html(question[4][3]);
    }

    function starthtmlSet(paging) {
        $('#back').addClass('d-none');
        $('#nomor').html("Nomor 1")
        $("#num1").html(question[paging][0]);
        $("#num2").html(question[paging][0]);
        $("#num3").html(question[paging][0]);
        $("#num4").html(question[paging][0]);
        $(".ans-1-a").html(question[paging][1][0]);
        $(".ans-1-b").html(question[paging][1][1]);
        $(".ans-1-c").html(question[paging][1][2]);
        $(".ans-1-d").html(question[paging][1][3]);


    }

    function checkAns(userAnswer, trueAnswer) {
        userAns.forEach((m, i) => {
            if (m == trueAnswer[i]) {
                trueAns.push(i + 1)
            } else {
                falseAns.push(i + 1)
            }
        })
        $('#trueAmount').html(trueAns.length)
        $('#falseAmount').html(falseAns.length)
        $('#scorePage').html(trueAns.length * 20)
        trueAns.forEach((m, i) => {
            $(trueList[i]).html(`Nomor ${m}`)
        })
        falseAns.forEach((m, i) => {
            $(falseList[i]).html(`Nomor ${m}`)
        })
        console.log(trueAnswer)
    }
    //conditional set
    $('.score-page').hide();
    //event handler
    $('.answer').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('choosed');
        $(this).toggleClass('bg-dark');
        $(this).toggleClass('box');
    });
    $('#next').click(function (e) {
        e.preventDefault();

        choosed = $('.choosed');
        if (choosed.length > 1) {
            alert('Hanya pilih satu')
        } else if (choosed.length == 0) {
            alert(`Anda tidak memilih apapun`);
        } else {
            pageX++;
            choosed = $('.choosed').attr("code");
            answerArr = choosed;
            if (pageX == 1) {
                // userAns.nomor1 = choosed;
                userAns[0] = choosed;
            } else if (pageX == 2) {
                // userAns.nomor2 = choosed;
                userAns[1] = choosed;
            } else if (pageX == 3) {
                // userAns.nomor3 = choosed;
                userAns[2] = choosed;
            } else if (pageX == 4) {
                // userAns.nomor4 = choosed;
                userAns[3] = choosed;
            } else if (pageX >= 5) {
                // userAns.nomor5 = choosed;
                userAns[4] = choosed;
                console.log(userAns);
                $('.score-page').show()
                $('.quest-page').hide()
                $("#next").html('Selesai')
                checkAns(userAns, answerArrTrue)
            }

            if (pageX < 4) {
                $("#next").html('Selanjutnya')
            }
            $("#num1").html(question[pageX][0]);
            $("#num2").html(question[pageX][0]);
            $("#num3").html(question[pageX][0]);
            $("#num4").html(question[pageX][0]);
            $(".ans-1-a").html(question[pageX][1][0]);
            $(".ans-1-b").html(question[pageX][1][1]);
            $(".ans-1-c").html(question[pageX][1][2]);
            $(".ans-1-d").html(question[pageX][1][3]);
        }
        $('#nomor').html(`Nomor ${pageX + 1}`);
        $('.answer').removeClass('choosed');

        $('.answer').addClass('box');
        $('.answer').removeClass('bg-dark');

    });
    starthtmlSet(pageX);
    expSet(question)
});