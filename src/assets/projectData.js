import LogoData from "@/assets/logoData";

export default
    {
        beegrader: {
            title: "Examen nakijktool",
            description: [
                "Voor mijn afstudeerproject van mijn bachelor informatica heb ik bij mijn toenmallige werkgever, team ESI de nakijktool voor de examen omgeving ontwikkelt.",
                "De nakijktool is gemaakt voor docenten om open examen vragen  efficiënt en uitgebreid te kunnen beoordelen." +
                    " De applicatie welke gebruikt wordt voor het afnemen van de examens biedt niet genoeg mogelijkheden voor het nakijken waardoor er gekozen is om zelf een tool te ontwikkelen.",
                "De ontwikkelde nakijktool is een web applicatie met een losse backend en frontend. De backend is geschreven in Java Spring Boot met een REST API en de frontend in het Javascript framework React." +
                    " Voor het ophalen van de ingeleverde antwoordvragen en het opslaan van de beoordelingen maakt de backend een verbinding met de examen applicatie waarbij OAuth gebruikt wordt om bij de examen applicatie te authenticeren namens de docent.",
                "Bij aanvang van het project is eerst het gehele project ontworpen en uitgedacht en gevat in de benodige user stories. Vervolgens zijn de user stories meegenomen in de sprints van het team en heb ik de applicatie ontwikkeld." +
                    " Gedurende het ontwikkelen is de code constant gereviewed door collega's om efficiënt te werken." +
                    " Voor het waarborgen van de kwaliteit is de applicatie uitgerold in de OTAP straat van het team om zo integraties te kunnen testen en eindgebruikers in een vroeg stadium de applicatie te laten testen.",
                "Binnen dit project heb ik mijzelf verder ontwikkelt als full-stack developer door zowel de backend als frontend en verbindingen met derde-partijen te ontwikkelen." +
                    " Daarnaast heb ik ook mijn kennis over het uitrollen van een applicatie in een OTAP Straat verreikt."

            ],
            techStack: [
                LogoData.spring,
                LogoData.React,
                LogoData.REST,
                LogoData.Postgresql,
                LogoData.nginx,
                LogoData.oauth,
                LogoData.HTMLCSS
            ],
            summary: "Nakijktool voor digitale examens",
            imagePath: null,
            githubLogo: null,
            competences: "Webtechnologie | third-party API"
        },
        rentalservice: {
            title: "Kamernet visualisatie",
            description: [
                "Tijdens mijn studie heb ik in groepsverband een web applicatie gebouwd die data van Kamernet kon visualiseren." +
                " De eerste stap in dit proces was het ontwerpen van een API (in de OpenAPI 3 standaard) die de beschikbare data kon aanleveren aan clients. " +
                "De tweede stap was het bouwen van een backend die de API endpoints kon serveren, hiervoor is gekozen voor Java Spring Boot." +
                " De laatste stap was het bouwen van de frontend (SPA) die de data van de backend kon visualiseren.",
                "De backend en frontend ondersteunen beide de basis CRUD operaties. Een aantal ingebouwde functies zijn het zoeken van woningen op basis van filters, " +
                "het toevoegen, aanpassen en verwijderen van woningen en het genereren van statistieken op basis van een filter.",
                "Voor het deployen van deze applicatie is gebruik gemaakt van een Docker stack bestaande uit Maven (voor de Spring Boot backend), Nginx (voor de Vue.js frontend) en MariaDB (data opslag). " +
                "Dit had als voordeel dat de applicatie snel in gebruik te nemen was en beheer en onderhoud makkelijk uit te voeren was.",
                "Door dit project is mijn passie voor webtechnologie naar een hoger niveau gestegen en heb ik Vue.js leren kennen, mijn eerste zeer postieve ervaring " +
                "met frontend JS frameworks. Na afloop van dit project ben ik mijzelf blijven ontwikkelen in deze talen en heb ik ook dit portfolio gebouwd met Vue.js."

            ],
            techStack: [
                LogoData.spring,
                LogoData.Vue,
                LogoData.REST,
                LogoData.docker,
                LogoData.mariadb,
                LogoData.nginx,
                LogoData.HTMLCSS,
            ],
            summary: "Webtechnologie project voor het visualiseren van Kamernet",
            imagePath: "rentalservice.png",
            githubLogo: null,
            competences: "Webtechnologie | Containerisation | OpenAPI"
        },
        calsync: {
            title: "Agenda synchronisatie",
            description: [
                "Gedurende mijn studieperiode was mijn agenda altijd erg vol met colleges en deadlines en niet onverzichtelijk voor mijn familie." +
                " Om mijn familie niet lastig te vallen met alle activiteiten heb ik een tool geschreven in Python die geautomatiseerd en periodiek al mijn agenda activiteiten ophaalt en vervolgens " +
                "op basis van vele criteria en filters een kleinere set activiteiten genereerd die in de familie agenda worden geplaatst (zie diagram hieronder).",
                "Deze tool draait in een Docker container en communiceert met Home Assistant en Cronitor om te monitoren hoeveel activiteiten zijn toegevoegd en/ of verwijderd.",
            ],
            techStack: [
                LogoData.python,
                LogoData.docker
            ],
            summary: "Familie agenda synchronisatie tool",
            imagePath: "calsync.png",
            githubLogo: "https://github.com/Wesley-Vos/calSync",
            competences: "Docker | Google API | iCal"
        },
        ha: {
            title: "Slim huis",
            description: [
                "Een aantal jaren geleden ben ik gestart met het automatiseren en monitoren van mijn woning. Het begon bij twee lampjes en het monitoren van " +
                "de productie van de zonnepanelen en groeide uit tot een waar slim huis. Hoewel ik eerst was begonnen met het volledig zelf ontwikkelen van een" +
                " web applicatie die kon communiceren met de diverse diensten en protocollen ontdekte ik ook Home Assistant, een Open Source Python project draaiende in Docker " +
                "wat alles kon wat ik zelf al gemaakt had en nog veel daar buiten.",
                "Home Assistant geeft je de mogelijkheid om alle slimme apparatuur op één plek samen te brengen en te besturen en monitoren. Hoewel het integreren van " +
                "systemen en apparaten steeds vaker via de user interface kan heb ik aan het begin veel geïntegreerd via configuratie bestanden en losse scripts en zelf ook nog een aantal " +
                "integraties ontwikkelt om in meer detail informatie van mijn Toon te kunnen ophalen.",
                "Met de huidige set-up heb ik veel dagelijkse routines (zoals het in- en uitschakelen van de verlichting) en het zwembad (zie hieronder) kunnen automatiseren en" +
                " bestuur ik mijn 'domme' verlichting en airconditioning." +
                " Behalve het automatiseren gebruik ik Home Assistant ook voor het monitoren van mijn woning en daarbij voornamelijk het energie verbruik in combinatie met de " +
                "zonnepanelen installatie (middels Influxdb en Grafana).",
                "Aangezien ik zelf niet de enige gebruiker ben heb ik ook meerdere duidelijke user interfaces gebouwd voor de andere gebruikers zodat ook zij het slimme huis kunnen ontdekken.",
                "Home Assistant draait op een virtuele machine op mijn zelf-gehoste en beheerde Proxmox client welke ook nog een virtuele Debian machine draait met diverse Docker stacks."
            ],
            techStack: [
                LogoData.python,
                LogoData.HA,
                LogoData.docker,
                LogoData.influxdb,
                LogoData.grafana
            ],
            summary: "Elk huis wordt comfortabeler als het slim is!",
            imagePath: "ha.png",
            githubLogo: null,
            competences: "Automatisering | Containerisation | User Interfaces | Integraties "
        },
        pool: {
            title: "Slim zwembad",
            description: [
                "Voor het automatiseren van het zwembad heb ik gebruik gemaakt van de bestaande Home Assistant setup, hierboven beschreven, en een ESP8266 " +
                "microcontroller geflasht met ESPHome.",
                "De zwembadinstallatie bevat een filterpomp (voor circulatie) en een warmtepomp (voor verwarming) welke beide niet slim samen werkten." +
                "De filterpomp is van zichzelf niet slim en is daarom slimmer gemaakt door zijn voeding te schakelen middels een relay verbonden met de microcontroller." +
                "Daarnaast is op deze microcontroller ook een waterdichte temperatuur sensor aangesloten en een industrieële knoppenkast met een een AAN en UIT knop om de installatie" +
                " ter plaatse te regelen.",
                "Met Home Assistant is een functioneel dashboard gecreëerd waarmee het zwembad gemonitoord kan worden en de installatie slim bediend.",
                "De momenten dat de filterpomp ingeschakeld dient te zijn is afhankelijk van vele factoren zoals bijvoorbeeld het weer, de hoeveelheid zon (gemeten middels de zonnepanelen installatie) en " +
                "de stand van de warmtepomp (om te verwarmen moet het water circuleren). Al deze factoren zijn opgenomen in de Home Assistant setup waardoor het mogelijk is geworden " +
                "om op basis hiervan een los Python script te maken welke de stand van de relay bepaalt en deze aanstuurt (alle automatisering regels zijn beschreven in Github)."
            ],
            techStack: [
                LogoData.python,
                LogoData.HA,
                LogoData.ESPHome
                ],
            summary: "Buitenzwembad geautomatiseerd met Home Assistant en ESP",
            imagePath: "ha_pool.png",
            githubLogo: "https://github.com/Wesley-Vos/HA-PoolControl",
            competences: "Automatisering | Hardware meets software | Sensoren"
        },
        toon: {
            title: "Slimme Toon",
            description: [
                "De slimme thermostaat Toon kan via de embedded Qt applicatie diverse tegels weergeven." +
                "Wanneer je root toegang op de thermostaat hebt verkregen, heb je ook de mogelijkheid om zelf extra apps en tegels toe te voegen.",
                " De bestaande app voor Home Assistant heb ik uitgebreid met extra tegels waarmee je bijvoorbeeld het energie verbruik in huis" +
                "grafisch kan tonen middels een 'power wheel' (zie afbeelding).",
                "De Toon haalt de data op van de REST API van Home Assistant en presenteert deze op de Toon."
            ],
            techStack: [
                LogoData.qt,
                LogoData.HA
            ],
            summary: "Slimme thermostaat Toon uitgebreid met meer tegels",
            imagePath: "toon.png",
            githubLogo: "https://github.com/Wesley-Vos/homeassistant",
            competences: "Frontend | REST API"
        },
        FLL: {
            title: "First Lego League",
            summary: "Web-based toernooi management voor First LEGO League finaledagen",
            description: [
                "First LEGO League is een competitie georganiseerd door LEGO waarbij teams van primaire en secundaire scholen een " +
                "LEGO robot dienen te programmeren om opdrachten mee uit te voeren op een parcours en een onderzoek uitvoeren over het thema " +
                "van de competitie. Elke regio in Nederland kent finaledagen waarop de teams tegen elkaar strijden, voor deze finaledagen was er de behoefte " +
                "aan een applicatie waarmee scores berekend en verwerkt konden worden, speelschema's gegenereerd werden en het publiek op displays kon zien " +
                "wat er gaande was in het wedstrijdgebied.",
                "Een web-based applicatie (HTML, CSS, JS, PHP, MySQL) is gebouwd om te voldoen aan de eisen. Deze webapp bevat de management console voor de organisatie," +
                " de invoerschermen voor de juryleden en de graphics voor op de displays. Voor het tonen van de displays is een Raspberry Pi image ontwikkelt welke de" +
                " juiste schermen kon tonen en middels de webapp vervangen of ververst kon worden.",
                "Dit project is gestart in 2013 en doorontwikkeld tot 2020, gedurende dit traject heb ik webtechnologie en software ontwikkeling leren kennen (door middel van self-study) en is mijn passie hiervoor ontstaan."
            ],
            techStack: [
                LogoData.HTML,
                LogoData.CSS,
                LogoData.JS,
                LogoData.PHP,
            ],
            imagePath: "fll.png",
            githubLogo: null,
            competences: "Webtechnologie | Frontend | Backend"
        }
    }
