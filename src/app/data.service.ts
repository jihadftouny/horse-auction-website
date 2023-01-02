import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentId = 1;

  horses = [
    {
      id: 1,
      name: "FOUNTLEROY",
      gender: "Stallion",
      year: "10.05.2020",
      breed: " Niederländ. Warmblut",
      color: "Black",
      size: " 171 cm (16.3 ¼ h.h.) ",
      owner: "Menkveld ",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/PLsPPNSA8tE",
      img: "horse1.jpg",
      img2: "horse11.jpg",
      img3: "horse111.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " sporterfolgr. NK: Indigo (v. Florencio I) DRE A (NL), Kiona (v. Florencio I) DRE A (NL) ",
      gen2: " sporterfolgr. NK: Sam by Guert (v. Spielberg) DRE intern. Junioren-Tour erfolgr., Dior (v. Sandreo) DRE M (NL) ",
      gen3: " sporterfolgr. NK: Sandokan (v. Ferro) DRE intern. IM I erfolgr., Voltage (v. Voltaire) DRE S (ESP), Zeppo (v. Lord Sinclair I) DRE A (NL), Terline (v. Ferro) DRE L (NL), Rockefeller (v. Welt Hit II) FAP S intern. erfolgr., Madison (v. Zeoliet) DRE L (NL)   "
    },
    {
      id: 2,
      name: "FREIXENET",
      gender: "Stallion",
      year: "24.04.2020",
      breed: "German Sporthorse",
      color: "Chestnut",
      size: " 169 cm (16.2 ¼ h.h.) ",
      owner: "Joos",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/WFftP9cyTJQ",
      img: "horse2.jpg",
      img2: "horse22.jpg",
      img3: "horse222.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " Whitney RPF siegr.; 3 sporterfolgr. NK: Fantastic sunrise S (v. Fürstenball) DPF L/DRE M* erfolgr., Diamond Light S (v. Dancier) DPF A siegr., Florine 17 (v. Fürstenball) RPF erfolgr ",
      gen2: " Gina RPF erfolgr.; 4 sporterfolgr. NK u.a.: Doreen 261 (v. Don Frederico) DRE A* siegr./RPF/DRE A** erfolgr., Daiquiri 85 (v. Don Frederico) DPF M erfolgr., Daikini 2 (v. Don Frederico) RPF erfolgr.  ",
      gen3: " 9 sporterfolgr. NK u.a.: Flying Filou K (v. Forrest xx) DRE M** siegr./DPF A/DRE GP erfolgr., Diddl 6 (v. Dornenkönig) DRE A** siegr./DRE L* erfolgr., Grace 346 (v. Grafenstolz/T.) SPF A** siegr./SPR L erfolgr., Arielle 344 (v. Acordelli) SPR A* erfolgr., Fabius 38 (v. Forrest xx) DRE A* erfolgr., Elliot 60 (v. Eiger I) DPF A/SPF A erfolgr., Lisa 35 (v. Leibwaechter I) RPF/DRE A* erfolgr., Fox white Sox (v. Fielmann) DRE A* erfolgr.   "
    },
    {
      id: 3,
      name: "JACK SPARROW",
      gender: "Stallion",
      year: "13.05.2020",
      breed: "German Sporthorse",
      color: "Black",
      size: " 170 cm (16.2¼ h.h.) ",
      owner: "Zucht",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/1ypN1KicGzs",
      img: "horse3.jpg",
      img2: "horse33.jpg",
      img3: "horse33.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " Don Bencedor van het Lisperhof (v. Don Frederico) DRE intern. Junioren-Tour erfolgr., Graf von Anhalt (v. Graf Anhalt E) DRE IM I erfolgr., Weltklasse (v. Welt Hit I O) DRE intern. GP erfolgr., Fiderhall 2 (v. Fidertanz) DRE S* erfolgr., Somerhall (Sir Donnerhall I) DRE GP (USA)/DRE intern. IM I erfolgr., Sunshine 504 (v. Sir Donnerhall I) DRE IM I erfolgr.  ",
      gen2: " 1 sporterfolgr. NK: Figo Royal K (v. Fürst Nymphenburg I) DPF A erfolgr ",
      gen3: " 1 gekörter Sohn: N.N. (v. Fürst Nymphenburg I); 2 sporterfolgr. NK: Dundee 115 (v. Don Frederico) DPF L/DRE M** siegr./DPF M/DRE IM II erfolgr., Walentino 73 (v. Weltmeyer) DPF A/DRE L* erfolgr.   "
    },
    {
      id: 4,
      name: "BLACK JACK",
      gender: "Stallion",
      year: "01.06.2020",
      breed: "German Sporthorse",
      color: "Black",
      size: " 168 cm (16.2 ¼ h.h.) ",
      owner: "Albert",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/7cWJRaMX6BM",
      img: "horse4.jpg",
      img2: "horse44.jpg",
      img3: "horse444.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " Hannoveraner Stutenstamm 1189709 (Nosily)gekörte Hengste:Flanceur (v. Flamenco), Asti Frizzante (v. Asti Spumante) SPR S* erfolgr.erfolgr. Springpferde:Giggi 9 ",
      gen2: " Charleen 9 (v. Cento) SPR intern. 160cm erfolgr., Karleen van Solbackas (v. Arezzo VDL) SPR intern. 125cm (CSIYH) erfolgr., Caruso Cash (v. Chasseur I) SPR S* erfolgr., Quantino (v. Quattro B) SPR M*/Viels. intern. CCI2* erfolgr  ",
      gen3: "  3 sporterfolgr. NK: D’Alembert (v. Davignon I) DRE L siegr./DPF A erfolgr., Roncalli G (v. Rivero II) DPF L/DRE L siegr./DRE M erfolgr., Rivaldo 18 (v. Rivero II) DPF M siegr.  "
    },
    {
      id: 5,
      name: "SO BEAUTIFUL",
      gender: "Stallion",
      year: "07.03.2020",
      breed: "Hannoveraner",
      color: "Black",
      size: " 166 cm (16.1 ¼ h.h.) ",
      owner: "Haack",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/6oB0wxkY6hk",
      img: "horse5.jpg",
      img2: "horse55.jpg",
      img3: "horse555.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " 2 sporterfolgr. NK: Bonjour 6 (v. Benicio) DRE S* siegr./DPF M/DRE IM I erfolgr., Moonlight Sonata (v. Morricone I) DPF A siegr./RPF erfolgr. ",
      gen2: " 4 sporterfolgr. NK: Latouro 5 (v. Lauries Crusador xx) SPR A* siegr./DRE L*/SPR A** erfolgr., Scofield 5 (v. Stolzenberg) SPR L siegr,/SPF M*/SPR M* erfolgr., Dorian van Rensburg (v. Davignon I) DPF A/SPR A* erfolgr., Rising Star 10 (v. Regazzoni) RPF erfolgr.  ",
      gen3: " 1 gekörter Sohn: Ragtime (v. Raphael) SPF M*/SPR M** erfolgr.; 4 sporterfolgr. NK u.a.: Winchester 91 (v. Wendekreis) SPR L siegr./SPR M/GEV A erfolgr., Ricard 5 (v. Ritual) DRE A erfolgr., Raphaello 2 (v. Raphael) SPF A erfolgr.   "
    },
    {
      id: 6,
      name: "BELMONDO",
      gender: "Stallion",
      year: "22.05.2020",
      breed: "German Sporthorse",
      color: "Dark bay",
      size: " 165 cm (16.1 ¼ h.h.) ",
      owner: "Schmidt",
      isSold: false,
      ytLink: "https://www.youtube.com/embed/fvUkG6S9i0I",
      img: "horse6.jpg",
      img2: "horse66.jpg",
      img3: "horse666.jpg",
      currentBid: 8500,
      maxBid: 9000,
      gen1: " 2 sporterfolgr. NK: Astoria 64 (v. Astrix) RPF erfolgr., Aitana Ibiza (v. Asgard’s Ibiza) DRE A* siegr./DPF A erfolgr. ",
      gen2: " 2 gekörte Söhne: Daramis (v. De Niro) RPF/DRE M** siegr., N.N. (v. De Niro; Sport: Donington 4) DPF M/DRE M** siegr./DRE S* erfolgr.; 9 sporterfolgr. NK u.a.: Don Cesar 2 (v. De Niro) DPF L/DRE M* siegr./DPF M/DRE M** erfolgr., Christopher K (v. Christ) DPF A/DRE M* siegr./DPF L/DRE M** erfolgr., Diamond Donner 3 (v. Danone I) DPF L/DRE A* erfolgr., De Nira 2 (v. De Niro) DPF A siegr./DPF L erfolgr., Dacota 15 (v. De Niro) RPF siegr., Warus 25 (v. Weltgeist) SPR E erfolgr.  ",
      gen3: " 1 gekörten Sohn: Gotenkönig (v. Grenadier) DRE L siegr./DRE M erfolgr.; 11 sporterfolgr. NK u.a.: Hamilton 5 (v. Hitchcock) DPF M/DRE S* siegr./DRE IM I erfolgr., Touchless (v. Traunstein) SPF L/SPR S* siegr./SPF M** erfolgr., Gladys W (v. Grenadier) SPR L siegr./SPR S* erfolgr., Kompagnon 2 (v. Kompass/T.) DRE L siegr./DRE M erfolgr., Whitney K 2 (v. Weltmeyer) DRE IM II erfolgr., Gigant 129 (v. Grenadier) RPF/DPF A siegr., Wilma Rudolph (v. Weltmeyer) RPF siegr. sowie Mutter von u.a.: „Ronja M 7 (v. Relevant) DRE S* siegr.“, Konstantin 6 (v. Kompass/T.) DRE M erfolgr., Gordana 2 (v. Grenadier) RPF erfolgr. sowie Mutter von u.a.: „Carina 466 (v. Conteur) DRE IM I erfolgr.“, Metternich 8 (v. Mamori xx) DRE L erfolgr."
    },
  ];

  messages = [{
    id: 0,
    name: "John",
    email: "john@email.com",
    phone: "78485986",
    subject: "Positive Feedback",
    messageBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti inventore esse nam autem itaque necessitatibus saepe error id praesentium voluptatem assumenda molestiae vel illum nemo hic amet excepturi laboriosam quis ducimus consectetur sequi a quo, labore sed. At, sint et."
  }
  ];

  constructor() { }

  public getMessages(): Array<{ id, name, email, phone, subject, messageBody }> {
    return this.messages;
  }
  public createMessage(message: { id, name, email, phone, subject, messageBody }) {
    message.id = this.currentId;
    this.currentId++;

    this.messages.push(message);
  }
}
