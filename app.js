var klausimai = [
    {
        klausimas: "Ką reiškia HTML?",
        atsakymai: ["HyperText Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language", "Nei vienas iš šių"],
        teisingasAtsakymas: 0
    },
    {
        klausimas: "Kas yra CSS paskirtis?",
        atsakymai: ["Apdoroti serverio duomenis", "Stilizuoti puslapį", "Išsaugoti duomenis", "Kompiliuoti JavaScript"],
        teisingasAtsakymas: 1
    },
    {
        klausimas: "Kuris yra teisingas būdas sukurti kintamąjį?",
        atsakymai: ["variable x = 5;", "v = 5;", "var x = 5;", "x := 5;"],
        teisingasAtsakymas: 2
    }
];


var dabartinis = 0;
var taskai = 0;
var pasirinktas = null;


var klausimoVieta = document.getElementById("question");
var atsakymuMygtukai = document.getElementById("answers").getElementsByTagName("button");
var kitasMygtukas = document.getElementById("next-button");
var rezultatas = document.getElementById("result");


function rodytiKlausima() {
    var klausimas = klausimai[dabartinis];
    klausimoVieta.textContent = klausimas.klausimas;

    for (var i = 0; i < atsakymuMygtukai.length; i++) {
        atsakymuMygtukai[i].textContent = klausimas.atsakymai[i];
        atsakymuMygtukai[i].className = "answer-button";


        atsakymuMygtukai[i].onclick = function () {
            for (var j = 0; j < atsakymuMygtukai.length; j++) {
                atsakymuMygtukai[j].classList.remove("selected");
            }
            this.classList.add("selected");
            pasirinktas = Array.prototype.indexOf.call(atsakymuMygtukai, this);
        };
    }
}


kitasMygtukas.onclick = function () {
    if (pasirinktas === null) {
        alert("Pasirink atsakymą!");
        return;
    }

    if (pasirinktas === klausimai[dabartinis].teisingasAtsakymas) {
        taskai = taskai + 1;
    }

    pasirinktas = null;
    dabartinis = dabartinis + 1;

    if (dabartinis < klausimai.length) {
        rodytiKlausima();
    } else {
        klausimoVieta.style.display = "none";
        document.getElementById("answers").style.display = "none";
        kitasMygtukas.style.display = "none";
        rezultatas.textContent = "Tu surinkai " + taskai + " iš " + klausimai.length;
        rezultatas.classList.remove("hidden");
    }
};


rodytiKlausima();
