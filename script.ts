enum NomTi {
    VIP = 'vip',
    VVIP = 'vvip',
    PASS = 'pass'
  }
  class Evenement {
    id_event: number;
    id_org: number;
    id_te: number;
    titre: string;
    description: string;
  
    constructor(id_event: number, id_org: number, id_te: number, titre: string, description: string) {
      this.id_event = id_event;
      this.id_org = id_org;
      this.id_te = id_te;
      this.titre = titre;
      this.description = description;
    }
  
    
    afficher_detail(): void {
        console.log(`ID de l'événement: ${this.id_event}`);
        console.log(`ID de l'organisateur: ${this.id_org}`);
        console.log(`ID du type d'événement: ${this.id_te}`);
        console.log(`Titre: ${this.titre}`);
        console.log(`Description: ${this.description}`);
        }
    
  }
  
  class Typeticket {
    id_tic: number;
    nom_ti: NomTi;
  
    constructor(id_tic: number, nom_ti: NomTi) {
      this.id_tic = id_tic;
      this.nom_ti = nom_ti;
    }
  }
  
  class Posseder {
    evenement: Evenement;
    typeticket: Typeticket;
    nbr_ticket: number;
  
    constructor(evenement: Evenement, typeticket: Typeticket, nbr_ticket: number) {
      this.evenement = evenement;
      this.typeticket = typeticket;
      this.nbr_ticket = nbr_ticket;
    }
  }
  