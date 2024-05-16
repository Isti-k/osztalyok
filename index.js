import Kutya from "./Kutya.js";

//példányosítom a Kutyát

const ujKutya=new Kutya("Bodri", "retriver", "Adj enni!", $(".tarolo"))
const ujKutya2=new Kutya("Dézi", "keverék", "Szeretlek gazdim!",$(".tarolo"))

//ujKutya.nev="Átnevezem"
// kívülről tudok újabb adattagokat hozzáadni az osztályhoz.
// ujKutya.egyEgeszenujTulajdonsaga="Osztályon kívülről is tudok értéket adni neki"
// delete ujKutya.fajta Ilye inkább ne!!
// console.log(ujKutya.nev)
// azért tusom a .nev tulajtonságot elérni
// mert van hozzá getter
console.log(ujKutya2.nev)
// de megváltoztatni még mindig nem tudom!!
// mert nincs hozzá setter!
ujKutya.mondat="Köszi, már nem vagyok éhes!"

console.log(ujKutya);
console.log(ujKutya2);
ujKutya.beszel()
ujKutya2.beszel()