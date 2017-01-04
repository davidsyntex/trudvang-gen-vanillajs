'use strict';
// Import my standard library
const syradar = window.syradar;

(function () {

    const nameSets = {
        'mittlander': {
            'prefix': [
                'bren',
                'bran',
                'edel',
                'edil',
                'eid',
                'eo',
                'gul',
                'gal',
                'guld',
                'gul',
                'hedel',
                'her',
                'log',
                'mau',
                'maug',
                'mor',
                'mord'
            ],
            'suffix': {
                'male': [
                    'ard',
                    'bard',
                    'jar',
                    'gjar',
                    'ed',
                    'hed',
                    'finn',
                    'fraidh',
                    'han',
                    'marr',
                    'red',
                    'rik',
                    'win',
                    'winn'
                ],
                'female': [
                    'non',
                    'annon',
                    'de',
                    'elde',
                    'eid',
                    'heid',
                    'trude',
                    'itrude',
                    'frid',
                    'lynn',
                    'na',
                    'nhja',
                    'rynn',
                    'wa',
                    'wen'
                ]
            }
        },
        'stormlander': {
            'prefix': [
                'as',
                'bod',
                'bryn',
                'hall',
                'hraf',
                'ing',
                'jor',
                'tor',
                'vig',
                'vret'
            ],
            'suffix': {
                'male': [
                    'biorn',
                    'geir',
                    'grim',
                    'galt',
                    'jald',
                    'orm',
                    'ulf',
                    'ur',
                    'vald',
                    'varr'
                ],
                'female': [
                    'a',
                    'dis',
                    'dott',
                    'gerd',
                    'hild',
                    'umbla',
                    'unn',
                    'veig',
                    'vida',
                    'vigg'
                ]
            }
        }
    };

    const namesMenDom = syradar.elmId('namesMen');
    const namesWomenDom = syradar.elmId('namesWomen');
    const mittlanderBtnDom = syradar.elmId('mittlander-btn');
    const stormlanderBtnDom = syradar.elmId('stormlander-btn');

    mittlanderBtnDom.onclick = function() {
        syradar.clear(namesMenDom);
        syradar.clear(namesWomenDom);

        const namesMale = syradar.getNames(10, nameSets.mittlander.prefix, nameSets.mittlander.suffix.male);
        const namesFemale = syradar.getNames(10, nameSets.mittlander.prefix, nameSets.mittlander.suffix.female);

        namesMale.forEach(function(name) {
            syradar.create('li', name, namesMenDom);
        });
        namesFemale.forEach(function(name) {
            syradar.create('li', name, namesWomenDom);
        });
    };

    stormlanderBtnDom.onclick = function() {
        syradar.clear(namesMenDom);
        syradar.clear(namesWomenDom);

        const namesMale = syradar.getNames(10, nameSets.stormlander.prefix, nameSets.stormlander.suffix.male);
        const namesFemale = syradar.getNames(10, nameSets.stormlander.prefix, nameSets.stormlander.suffix.female);

        namesMale.forEach(function(name) {
            syradar.create('li', name, namesMenDom);
        });
        namesFemale.forEach(function(name) {
            syradar.create('li', name, namesWomenDom);
        });
    };
})();