//oppgave 1
class Kontoinformasjon {
    constructor(kundenummer, navn, alder, saldo) {
        this.kundenummer = kundenummer;
        this.navn = navn;
        this.alder = alder;
        this.saldo = saldo;
    }

    endresaldo(nysaldo) {
        this.saldo = nysaldo;
    }
    //oppgave 3
    innskudd(innsatt) {
        if (innsatt > 0) {
            this.saldo += innsatt
            // return true
            console.log("Innskudd på " + innsatt + " kroner gjennomført. Ny saldo er " + this.saldo + " kroner");
        } else {
            console.log("Feil: Innskuddsbeløpet må være høyere enn 0.");
        }
    }

    uttak(tatt) {
        if (tatt > 0 && tatt <= this.saldo) {
            this.saldo -= tatt;
            // return true;
            console.log('Uttak på ' + tatt + ' kroner gjennomført. Ny saldo: ' + this.saldo + ' kroner.');
        } else {
            console.log('Feil: Uttaksbeløpet kan ikke overstige saldoen på kontoen');
        }
    }
    
    kontoinformasjon() {
        console.log(this.navn + " med kundenummer " + this.kundenummer + " har " + this.saldo + " kroner på konto");
    }

}

//oppgave 2
class Barnekonto extends Kontoinformasjon {
    constructor(kundenummer, navn, alder) {
        super(kundenummer, navn, alder);
        this.saldo = 200;
    }
}
// //oppgave 2.1
// class Vanligkonto extends Kontoinformasjon {
//     constructor(kundenummer, navn) {
//         super(kundenummer, navn);
//         this.saldo = 0;
//     }
// }

//oppgave 5
const Kari = new Kontoinformasjon("1", "Kari Hansen", 30, 895);
const Lise = new Barnekonto("2", "Lise Jensen", 2);
const Petter = new Kontoinformasjon("3", "Petter Olsen", 25, 0);

//handlingsforløpet
Kari.uttak(300);
Lise.innskudd(4000);
Petter.innskudd(3000);
Kari.uttak(250);
Petter.innskudd(250);
Kari.uttak(800);

// document.getElementById("utdata").innerHTML = Kari.kontoinformasjon() + Lise.kontoinformasjon() + Petter.kontoinformasjon();





