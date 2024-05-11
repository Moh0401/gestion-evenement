"use strict";
var NomTi;
(function (NomTi) {
    NomTi["VIP"] = "vip";
    NomTi["VVIP"] = "vvip";
    NomTi["PASS"] = "pass";
})(NomTi || (NomTi = {}));
class Evenement {
    constructor(id_event, id_org, id_te, titre, description) {
        this.id_event = id_event;
        this.id_org = id_org;
        this.id_te = id_te;
        this.titre = titre;
        this.description = description;
    }
    afficher_detail() {
        console.log(`ID de l'événement: ${this.id_event}`);
        console.log(`ID de l'organisateur: ${this.id_org}`);
        console.log(`ID du type d'événement: ${this.id_te}`);
        console.log(`Titre: ${this.titre}`);
        console.log(`Description: ${this.description}`);
    }
}
class Typeticket {
    constructor(id_tic, nom_ti) {
        this.id_tic = id_tic;
        this.nom_ti = nom_ti;
    }
}
class Posseder {
    constructor(evenement, typeticket, nbr_ticket) {
        this.evenement = evenement;
        this.typeticket = typeticket;
        this.nbr_ticket = nbr_ticket;
    }
}
//# sourceMappingURL=script.js.map