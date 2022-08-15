import React from "react";

import "./instructionsPage.css";
import { Link } from "react-router-dom";

const InstructionsPage = () => {
  return (
    <div className="instructions-page">
      <Link to="/">
        <button className="previous">&#8249;</button>
      </Link>
      <h1 style={{ paddingTop: "10px" }}> Instructiuni </h1>
      <p>
        Whist-ul se joaca in 3-6 jucatori cu un pachet standard de carti.
      </p>{" "}
      <p>
        Din pachet se vor folosi 8 carti pentru fiecare jucator de la masa (24
        carti pentru 3 jucatori, 32 carti pentru 4 jucatori etc.), incepand cu
        cartile cele mai mari.
      </p>
      <h1> Jocul si Obiectivele </h1>
      <p>
        Whist-ul este un joc care se joaca “la culoare” si este compus din
        Subjocuri Simple (subjocurile de 1 si de 8) si Subjocuri cu Atu
        (subjocurile de 2,3,4,5,6 si 7).
      </p>{" "}
      <p>
        Concret, se joaca in functie de simbolul primei carti aruncate pe masa
        si in functie de tipul de Subjoc din momentul respectiv. La fiecare
        Subjoc un jucator primeste un anumit numar de puncte daca a facut exact
        numarul de maini licitate.
      </p>
      <p>
        Obiectivul jocului este de a acumula un punctaj cat mai mare la finalul
        jocului.
      </p>
      <h1> Impartirea Cartilor </h1>
      <p>
        Impartirea cartilor se face automat la jocul online, si fiecare jucator
        va fi, pe rand, primul.
      </p>{" "}
      <p>
        Se incepe cu subjocurile de 1. Se joaca tot atatea subjocuri de 1 cati
        jucatori sunt la masa. Apoi, numarul de carti impartite fiecarui jucator
        creste cu una, pana se ajunge la 8.
      </p>
      <p>
        Se joaca tot atatea subjocuri de 8 cati jucatori sunt la masa. Apoi,
        numarul de carti impartite fiecarui jucator scade cu una, pana se ajunge
        la 1. Se joaca tot atatea subjocuri de 1 cati jucatori sunt la masa.
        Exemplu pentru 4 jucatori la masa:{" "}
        <p>
          1 – 1 – 1 – 1 – 2 – 3 – 4 – 5 – 6 – 7 – 8 – 8 – 8 – 8 – 7 – 6 – 5 – 4
          – 3 – 2 – 1 – 1 – 1 – 1
        </p>
      </p>{" "}
      <p>
        Subjocurile de 1 si de 8 sunt Subjocuri Simple. 2,3,4,5,6 si 7 sunt
        Subjocuri cu Atu. La aceste jocuri, prima carte din cartile neimpartite
        se intoarce cu fata in sus. Culoarea acelei carti va fi Atu-ul.
      </p>
      <h1> Parierea</h1>
      <p>
        La inceputul fiecarui subjoc, fiecare jucator, incepand cu primul, spune
        cate maini crede ca va face. Suma mainilor pariate de jucatorii de la
        masa nu trebuie sa fie aceiasi cu suma cartilor impartite in acel
        subjoc. De aceea, de regula, ultimul jucator este dezavantajat, mai ales
        la subjocurile de 1. Acesta este motivul pentru care, pe rand, fiecare
        din jucatori va fi ultimul.
      </p>
      <p>
        Scopul este sa castigi exact atatea maini cate ai pariat pentru a putea
        lua puncte. Orice castigi in plus sau in minus se depuncteaza.
      </p>
      <h1>Reguli de Joc</h1>
      <h2 style={{ borderTop: "2px solid white" }}>Subjocurile Simple:</h2>
      <p>
        Subjocurile de 1 si de 8 sunt Subjocuri Simple . Primul jucator arunca o
        carte. Ceilalti sunt obligati sa dea o carte de aceiasi culoare (trefla,
        inima, frunza sau romb). Cartea cea mai mare ia mana. Daca un jucator nu
        are carte de culoarea respectiva poate da orice alta carte, dar acea
        carte nu valoreaza nimic.
      </p>
      <p>
        {" "}
        Cel care castiga mana este cel care incepe mana urmatoare daca mai sunt
        carti in joc.
      </p>
      <h2>Subjocurile cu Atu:</h2>
      <p>
        2,3,4,5,6 si 7 sunt Subjocuri cu Atu. La aceste jocuri, prima carte din
        cartile neimpartite se intoarce cu fata in sus. Culoarea acelei carti va
        fi Atu-ul.
      </p>
      <p>
        Primul jucator da carte. Ceilalti sunt obligati sa dea o carte de
        aceiasi culoare. Cartea cea mai mare ia mana. Daca un jucator nu are
        carte de culoare respectiva este obligat sa dea un Atu. In acest caz
        Atu-ul cel mai mare dat pe masa ia mana. Daca un jucator nu are nici
        Atu, atunci poate da orice alta carte, dar acea carte nu valoreaza
        nimic.
      </p>
      <p>
        Cel care castiga mana este cel care incepe mana urmatoare daca mai sunt
        carti in joc.
      </p>
      <h2>Punctajul </h2>
      <p>Un subjoc se termina cand toate cartile din mana au fost jucate.</p>
      <p style={{ borderBottom: "10px solid purple" }}>
        Jucatorii care au facut exact cat au licitat primesc 5 pct. + numarul de
        maini facute. Exemplu: 3 maini licitate si facute = 8 pct. Daca nu ai
        facut cat ai licitat, mainile facut in plus sau in minus se scad.
        Exemplu: ai licitat 3 si ai facut 2 = -1pct. Daca ai licitat 3 si ai
        facut 6 = -3 pct.
      </p>
    </div>
  );
};

export default InstructionsPage;
