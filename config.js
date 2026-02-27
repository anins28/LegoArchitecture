var config = {
    style: 'mapbox://styles/anins/cmly43qhq001l01qx5pvhbag2',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5pbnMiLCJhIjoiY21seTN1OXNjMHd2azNkczU5ZXNscWZqbyJ9.KaqynecSXV7as2NV6LWWFQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'yellow'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El mundo, pieza a pieza',
    subtitle: 'La arquitectura como lenguaje universal que LEGO traduce a escala humana',
    byline: 'Ana Hernández Díaz',
    footer: 'Fuentes: web de Lego y Wikipedia <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: '¿Qué es LEGO Architecture?',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lego_Architecture.svg/960px-Lego_Architecture.svg.png',
            description: 'A lo largo de la historia, las sociedades han construido monumentos para dejar huella. Algunos buscaban tocar el cielo; otros, desafiar el paso del tiempo. Recorremos ese legado global a través de su reinterpretación en LEGO Architecture.',
            location: {
                center: [-38.54128, 35.74274],
                zoom: 2.45,
                pitch: -17.60,
                bearing: 0   
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            rotateDirection: 'reverse',
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'CATEDRAL DE NOTRE DAME  -  París, Francia',
            image: 'https://www.lego.com/cdn/cs/set/assets/blte79009bca2be0858/21061.png',
            description: 'Notre Dame no es solo una catedral: es el latido histórico de París. Durante más de ocho siglos ha resistido revoluciones, guerras e incendios, recordándonos que el patrimonio es frágil pero también profundamente resiliente.',
            popup: '<strong>4383 piezas</strong><p>Set LEGO 21061</p>',
            location: {
                center: [2.34979, 48.85288],
                zoom: 17.78,
                pitch: 71,
                bearing: -10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'PUENTE DE LA TORRE - Londres, Reino Unido',
            image: './assets/LegoPuenteTorre.png',
            description: 'Este puente simboliza el pulso industrial de una ciudad que aprendió a convivir con el agua y el comercio. Su mecanismo levadizo refleja el equilibrio entre tradición e ingeniería moderna.',
            popup: '<strong>4295 piezas</strong><p>Set LEGO 10214</p>',
            location: {
                center: [-0.07549, 51.50541],
                zoom: 18.52,
                pitch: 82.01,
                bearing: 1.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            rotateDirection: 'reverse',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'CASTILLO DE NEUSCHWANSTEIN  -  Baviera, Alemania',
            image: './assets/LegoNeuschwanstein.png',
            description: 'Más que un castillo, Neuschwanstein es un sueño romántico convertido en piedra. Concebido como refugio idealizado, terminó inspirando el imaginario colectivo de los cuentos de hadas. Su arquitectura es un collage de estilos que refleja la fantasía de su creador, el rey Ludwig II de Baviera.',
            popup: '<strong>3455 piezas</strong><p>Set LEGO 21063 </p>',
            location: {
                center: [10.75006, 47.55780],
                zoom: 17.82,
                pitch: 70,
                bearing: 70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'COLISEO ROMANO - Roma, Italia',
            image: './assets/LegoColiseo.png',
            description: ' El Coliseo fue espectáculo, poder y propaganda. Sus muros aún susurran la ambición de un imperio que quiso demostrar al mundo su dominio a través de la arquitectura.',
            popup: '<strong>9036 piezas</strong><p>Set LEGO 10276</p>',
            location: {
                center: [12.49227, 41.89017], 
                zoom: 17.58,
                pitch: 61,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'GRAN PIRÁMIDE DE GUIZA - Guiza, Egipto',
            image: './assets/LegoGuiza.png',
            description: 'Levantada hace más de 4.500 años, la Gran Pirámide desafía el tiempo y la lógica constructiva de su época. Es un recordatorio de que la búsqueda de la eternidad ha sido una constante humana.',
            popup: '<strong>1476 piezas</strong><p>Set LEGO 21058</p>',
            location: {
                center: [31.13431, 29.97918], 
                zoom: 16.50,
                pitch: 55,
                bearing: 80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'BURJ KHALIFA - Dubái, Emiratos Árabes Unidos',
            image: './assets/LegoBurjKhalifa.png',
            description: 'El Burj Khalifa redefine el horizonte contemporáneo. Su verticalidad extrema no solo mide altura, sino ambición y confianza en la ingeniería del siglo XXI. Con 828 metros de altura, es el edificio más alto del planeta desde 2010.',
            popup: '<strong>333 piezas</strong><p>Set LEGO 21055</p>',
            location: {
                center: [55.27416, 25.19720], 
                zoom: 15.70,
                pitch: 26,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'TAJ MAHAL - Agra, India',
            image: './assets/LegoTajMahal.png',
            description: 'El Taj Mahal transforma el duelo en belleza eterna. Su simetría perfecta y mármol blanco convierten una historia íntima en símbolo universal del amor.',
            popup: '<strong>5923 piezas</strong><p>Set LEGO 10256</p>',
            location: {
                center: [78.04207, 27.17507], 
                zoom: 18.60,
                pitch: 78,
                bearing: 44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'GRAN MURALLA CHINA',
            image: './assets/LegoMurallaChina.png',
            description: 'La Gran Muralla no es una sola estructura, sino siglos de historia extendidos por montañas y desiertos. Es arquitectura como frontera, como protección y como afirmación de identidad. Aunque en esta maqueta solo se muestre un fragmento, se extiende a lo largo de miles de kilómetros.',
            popup: '<strong>551 piezas</strong><p>Set LEGO 21041</p>',
            location: {
                center: [116.00941203215126, 40.3558347683325], 
                zoom: 18.60,
                pitch: 78,
                bearing: -44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
        id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'CASTILLO DE HIMEJI - Himeji, Japón',
            image: 'https://www.lego.com/cdn/cs/set/assets/blt6475bda6cee08acd/21060.png',
            description: 'Conocido como el “Castillo de la Garza Blanca” por su elegante silueta, es uno de los mejor conservados del Japón feudal. Su diseño demuestra que incluso la arquitectura militar puede aspirar a la armonía.',
            popup: '<strong>2125 piezas</strong><p>Set LEGO 21060</p>',
            location: {
                center: [134.69397435613905, 34.83943801681892], 
                zoom: 18.50,
                pitch: 200,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {       
        id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'ÓPERA DE SIDNEY - Australia',
            image: './assets/LegoOperaSidney.png',
            description: 'El arquitecto danés Jørn Utzon convirtió una audaz idea arquitectónica en icono global. Sus cubiertas evocan velas abiertas al mar, símbolo de apertura cultural y modernidad. Es uno de los edif icios más fotografiados del mundo.',
            popup: '<strong>2989 piezas</strong><p>Set LEGO 10234</p>',
            location: {
                center: [151.21509986329266, -33.85686979068258], 
                zoom: 17.60,
                pitch: 78,
                bearing: -200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {       
        id: 'twelfth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'CASA DE LA CASCADA - Pennsylvania, Estados Unidos',
            image: './assets/LegoCasaCascada.png',
            description: 'La Casa de la Cascada no se impone al paisaje: dialoga con él. Frank Lloyd Wright demostró que la arquitectura puede integrarse en la naturaleza sin perder carácter. Es referente mundial del movimiento moderno y la arquitectura orgánica.',
            popup: '<strong>811 piezas</strong><p>Set LEGO 21005</p>',
            location: {
                center: [-79.46793340843331, 39.906235237442644], 
                zoom: 19.60,
                pitch: 200,
                bearing: 30 
            },
            mapAnimation: 'flyTo',
            speed: 4,
            curve: 5,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {       
        id: 'thirteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'ESTATUA DE LA LIBERTAD - Nueva York, Estados Unidos',
            image: 'https://www.lego.com/cdn/cs/set/assets/blt878ae2d69f884c71/21042_Prod.png',
            description: 'La Estatua de la Libertad fue promesa y bienvenida para millones de personas. Regalo de Francia a Estados Unidos en 1886, simboliza la libertad y la democracia. Es uno de los monumentos más reconocidos del mundo.',
            popup: '<strong>1685 piezas</strong><p>Set LEGO 21042</p>',
            location: {
                center: [-74.04482, 40.68934], 
                zoom: 17.50,
                pitch: 77,
                bearing: -96 
            },
            mapAnimation: 'flyTo',
            speed: 4,
            curve: 5,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {       
        id: 'fourteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'TORRE EIFFEL - París, Francia',
            image: 'https://www.lego.com/cdn/cs/set/assets/blt1e7cec4d1ff93e05/10307_alt2.png',
            description: 'La Torre Eiffel nació como estructura temporal y terminó convirtiéndose en símbolo eterno. Su silueta de hierro, visible desde casi cualquier punto de la ciudad, marca el cierre de este viaje que comenzó también en París. Es el monumento más visitado del mundo, con más de 7 millones de visitantes al año.',
            popup: '<strong>10001 piezas</strong><p>Set LEGO 10307</p>',
            location: {
                center: [2.29475, 48.85830],
                zoom: 16.00,
                pitch: 71,
                bearing: 18
            },
            mapAnimation: 'flyTo',
            speed: 4,
            curve: 5,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 


    ]
};
