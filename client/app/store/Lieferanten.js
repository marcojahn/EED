Ext.define('EED.store.Lieferanten', {
    extend: 'Ext.data.Store',

    model: 'EED.model.Lieferant',

    storeId: 'Lieferanten',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost/eed/server/lieferanten.php',
        reader: 'json'
    }/*,

    data: (function() {
        var lasts = ['Pizza', 'Asia', 'Bratwurst', 'Hähnchen', 'Döner', 'Bäcker'],
            firsts = ['Fred', 'Ali', 'Glöckle', 'Bude'],
            lastLen = lasts.length,
            firstLen = firsts.length,
            usedNames = {},
            data = [],
            getRandomInt = Ext.Number.randomInt,

            generateName = function() {
                var name = firsts[getRandomInt(0, firstLen - 1)] + ' ' + lasts[getRandomInt(0, lastLen - 1)];
                if (usedNames[name]) {
                    return generateName();
                }
                usedNames[name] = true;
                return name;
            };

            for (var i = 0; i < 5; i++) {
                var name = generateName();
                data.push({
                    lieferantId: i,
                    lieferant: name,
                    adresse: '',
                    telefon: '',
                    url: ''
                });
            }

        return data;
    })()*/
});