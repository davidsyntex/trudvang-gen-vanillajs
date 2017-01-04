'use strict';
// NOTE: Import my standard library
const syradar = window.syradar;
// NOTE: Create the nameList
var nameList = nameList || {};

(function () {

    const namesMenDom = syradar.elmId('namesMen');
    const namesWomenDom = syradar.elmId('namesWomen');
    const buttonDom = syradar.elmId('buttonDom');

    buttonDom.childNodes.forEach(function (button) {
        button.onclick = function() {
            
            syradar.clear(namesMenDom);
            syradar.clear(namesWomenDom);

            const gender = button.getAttribute('data-gender');

            if (gender === 'both') {
                const list = button.getAttribute('data-list').split('.');

                const namesMale = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix.male);

                const namesFemale = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix.female);

                namesMale.forEach(function (name) {
                    syradar.create('li', name, namesMenDom);
                });

                namesFemale.forEach(function (name) {
                    syradar.create('li', name, namesWomenDom);
                });
            }
            
        }
    });
})();