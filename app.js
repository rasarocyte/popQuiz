const klausimai = [
    {
        klausimas: "Ką reiškia HTML?",
        atsakymai: [
            "HyperText Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language",
            "Nei vienas iš šių"
        ],
        teisingasAtsakymas: 0
    },
    {
        klausimas: "Kas yra CSS paskirtis?",
        atsakymai: [
            "Apdoroti serverio duomenis",
            "Stilizuoti puslapį",
            "Išsaugoti duomenis",
            "Kompiliuoti JavaScript"
        ],
        teisingasAtsakymas: 1
    },
    {
        klausimas: "Kuris iš šių yra JavaScript kintamasis?",
        atsakymai: [
            "var",
            "style",
            "font",
            "script"
        ],
        teisingasAtsakymas: 0
    }
];

let dabartinisKlausimas = 0;
let taskai = 0;
let pasirinktasAtsakymas = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function rodytiKlausima() {
    pasirinktasAtsakymas = null;
    const klausimas = klausimai[dabartinisKlausimas];
    questionEl.textContent = klausimas.klausimas;

    const buttons = answersEl.querySelectorAll("button");
    buttons.forEach((btn, i) => {
        btn.textContent = klausimas.atsakymai[i];
        btn.className = "answer-button";
        btn.onclick = () => {
            pasirinktasAtsakymas = i;
            buttons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        };
    });
}

nextButton.addEventListener("click", () => {
    if (pasirinktasAtsakymas === null) return;

    if (pasirinktasAtsakymas === klausimai[dabartinisKlausimas].teisingasAtsakymas) {
        taskai++;
    }

    dabartinisKlausimas++;
    if (dabartinisKlausimas < klausimai.length) {
        rodytiKlausima();
    } else {
        rodytiRezultata();
    }
});

function rodytiRezultata() {
    answersEl.classList.add("hidden");
    questionEl.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultEl.textContent = `Tu surinkai ${taskai} iš ${klausimai.length}`;
    resultEl.classList.remove("hidden");
}

// Pradinis paleidimas
rodytiKlausima();
