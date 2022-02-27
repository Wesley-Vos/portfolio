import LogoData from "@/assets/logoData";

export default
    {
        rentalservice: {
            title: "Rentalservice",
            description: [
                "Work in progress"
            ],
            techStack: [
                LogoData.spring,
                LogoData.REST,
                LogoData.swagger,
                LogoData.Vue,
                LogoData.HTML,
                LogoData.CSS,
            ],
            summary: "Webtechnologie project voor het visualiseren van Kamernet",
            imagePath: "fll.png",
            githubLogo: null,
            competences: "Comp1, Comp2"
        },
        calsync: {
            title: "Calendar sync",
            description: [
                "Gedurende mijn studieperiode was mijn agenda altijd erg vol met colleges en deadlines en niet onverzichtelijk voor mijn familie." +
                " Om mijn familie niet lastig te vallen met alle activiteiten heb ik een tool geschreven in Python die al mijn agenda's fetcht en vervolgens " +
                "op basis van vele criteria en filters een kleinere set activiteiten genereerd die in de familie kalendar worden gezet.",
                "Het Python script is geroosterd om elke vijf minuten uitgevoerd te worden waarbij alle activiteiten uit de agenda's worden ingeladen, onderverdeeld in nieuwe" +
                "activiteiten en deze nieuwe activiteiten worden vergeleken en gesynchroniseerd met de familie agenda. ",
                "Deze tool draait in een Docker container en communiceert met Home Assistant en Cronitor om te monitoren hoeveel activiteiten zijn toegevoegd en/ of verwijderd.",
            ],
            techStack: [
                LogoData.python,
                LogoData.docker
            ],
            summary: "Familie kalender synchronisatie tool",
            imagePath: "fll.png",
            githubLogo: "https://github.com/Wesley-Vos/calSync",
            competences: "Docker | Google API | iCal"
        },
        ha: {
            title: "Slim huis",
            description: ["Test description"],
            techStack: [
                LogoData.python,
                LogoData.HA
            ],
            summary: "Hoi ik ben Wesley2",
            imagePath: "ha_pool.png",
            githubLogo: "https://github.com/Wesley-Vos/HA-PoolControl",
            competences: "Evaluatie hier, Niks"
        },
        pool: {
            title: "Slim zwembad",
            description: ["Buitenzwembad geautomatiseerd met Home Assistant en ESP"],
            techStack: [
                LogoData.python,
                LogoData.HA,
                LogoData.ESPHome
                ],
            summary: "Buitenzwembad geautomatiseerd met Home Assistant en ESP",
            imagePath: "ha_pool.png",
            githubLogo: "https://github.com/Wesley-Vos/HA-PoolControl",
            competences: "Evaluatie hier, Niks"
        },
        toon: {
            title: "Slimme Toon",
            description: [
                "De slimme thermostaat Toon kan middels zijn ingebouwde Qml applicatie diverse tegels weergeven." +
                "Wanneer je root toegang op de thermostaat hebt verkregen, heb je ook de mogelijkheid om zelf extra apps en tegels toe te voegen.",
                " De bestaande app voor Home Assistant heb ik uitgebreid met extra tegels waarmee je bijvoorbeeld het energie verbruik in huis" +
                "grafisch kan tonen middels een 'power wheel' (zie afbeelding).",
                "De Toon haalt de data op van de REST API van Home Assistant en presenteert deze in de QML objecten op de Toon."
            ],
            techStack: [
                LogoData.qml,
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
                " juiste schermen kon tonen en middels de webapp vervangen of ververst kon worden."
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
