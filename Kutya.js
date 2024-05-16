export default class Kutya {
    //privát adattagok //az osztályon kívülről nem elérhetőek el.
    #nev=""
    #fajta=""
    #mondat=""
    #szuloElem;

    constructor(nev, fajta, mondat, szuloElem){
        // constukror feladata, hogy beállítsa az adattagokat
        //this mindig az osztály aktuális példányára fog mutatni
        //this.nev=nev; //publikus adattag
        this.#nev=nev;
        this.#fajta=fajta;
        this.#mondat=mondat;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
    }

    //privát adattagok elérése getterrel így már elérem kívülről
    get nev(){
        return this.#nev;
    }
    
    // Amelyik adattagot módosíthatom kívülről arra settert írok.
    set mondat(szoveg){
        this.#mondat = szoveg;
    }

    //tagfügvény, az adatagokon végez műveleteket
    beszel(){ //publikus metódus osztályon kívűlről elérhető
        console.log(this.#mondat)
    }

    // taggfügvény az adattagok végéhez
    #htmlOsszeallit(){
        let txt=`<div class="kutya">
            <h2>${this.#nev}</h2>
            <h2>${this.#fajta}</h2>
            </div>`;
        return txt;
    }

    #megjelenit(){ //privát metódus kívűlről nem elérhető
        this.#szuloElem.append(this.#htmlOsszeallit())
    }

}

//export default Kutya