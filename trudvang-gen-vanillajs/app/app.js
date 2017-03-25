'use strict';
// NOTE: Import my standard library
const syradar = window.syradar;
// NOTE: Create the nameList
var nameList = nameList || {};

(function () {
    const buttonDom = syradar.elmId('buttonDom');
    const namesResultDom = syradar.elmId('namesResult');
    const contentDom = syradar.elmId('content');
    const savedNamesDom = syradar.elmId("saved-names");
    const clearButtonDom = syradar.elmId('saved-names-clear')

    const item = document.createElement('h2');
    item.setAttribute('id', 'nameHeader');
    const itemText = document.createTextNode('');
    item.appendChild(itemText);
    contentDom.insertBefore(item, contentDom.firstChild);
    const nameHeaderDom = syradar.elmId('nameHeader');

    clearButtonDom.onclick = function(){
        syradar.clear(savedNamesDom);
    };

    buttonDom.childNodes.forEach(function (button) {
        button.onclick = function () {

            syradar.clear(namesResultDom);
            const gender = button.getAttribute('data-gender');
            const list = button.getAttribute('data-list').split('.');
            nameHeaderDom.innerHTML = syradar.capitalize(list[1]);

            if (gender === 'both') {

                syradar.createAndAdd('div', '', namesResultDom, '');
                syradar.createAndAdd('h3', 'Men', namesResultDom.getElementsByTagName('div')[0],'');
                syradar.createAndAdd('ul', '', namesResultDom.getElementsByTagName('div')[0], 'namesMen');

                syradar.createAndAdd('div', '', namesResultDom, '');
                syradar.createAndAdd('h3', 'Women', namesResultDom.getElementsByTagName('div')[1],'');
                syradar.createAndAdd('ul', '', namesResultDom.getElementsByTagName('div')[1], 'namesWomen');

                const namesMenDom = syradar.elmId('namesMen');
                const namesWomenDom = syradar.elmId('namesWomen');

                const namesMale = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix.male);

                const namesFemale = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix.female);

                namesMale.forEach(function (name) {
                    const nameEl = syradar.create('li', name+' ', '','');
                    const plusEl = syradar.create('i', '', '','fa fa-plus-circle');
                    plusEl.onclick = function () {
                        syradar.createAndAdd('span', name+', ', savedNamesDom,'');
                    };
                    nameEl.appendChild(plusEl);
                    namesMenDom.appendChild(nameEl);
                });

                namesFemale.forEach(function (name) {
                    const nameEl = syradar.create('li', name+' ', '','');
                    const plusEl = syradar.create('i', '', '','fa fa-plus-circle');
                    plusEl.onclick = function () {
                        syradar.createAndAdd('span', name+', ', savedNamesDom,'');
                    };
                    nameEl.appendChild(plusEl);
                    namesWomenDom.appendChild(nameEl);
                });

            } else if (gender === 'male') {
                syradar.createAndAdd('div', '', namesResultDom, '');
                syradar.createAndAdd('h3', 'Män', namesResultDom.getElementsByTagName('div')[0],'');
                syradar.createAndAdd('ul', '', namesResultDom.getElementsByTagName('div')[0], 'namesMen');
                const namesMenDom = syradar.elmId('namesMen');

                const namesMale = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix.male);
                namesMale.forEach(function (name) {
                    const nameEl = syradar.create('li', name+' ', '','');
                    const plusEl = syradar.create('i', '', '','fa fa-plus-circle');
                    plusEl.onclick = function () {
                        syradar.createAndAdd('span', name+', ', savedNamesDom,'');
                    };
                    nameEl.appendChild(plusEl);
                    namesMenDom.appendChild(nameEl);

                });

            } else if (gender === 'none') {

                syradar.createAndAdd('div', '', namesResultDom, '');
                syradar.createAndAdd('h3', syradar.capitalize(list[1]), namesResultDom.getElementsByTagName('div')[0],'');
                syradar.createAndAdd('ul', '', namesResultDom.getElementsByTagName('div')[0], 'namesTroll');
                const namesTrollDom = syradar.elmId('namesTroll');

                const namesTroll = syradar.getNames(10, nameList[list[0]][list[1]].prefix, nameList[list[0]][list[1]].suffix);
                namesTroll.forEach(function (name) {
                    const nameEl = syradar.create('li', name+' ', '','');
                    const plusEl = syradar.create('i', '', '','fa fa-plus-circle');
                    plusEl.onclick = function () {
                        syradar.createAndAdd('span', name+', ', savedNamesDom,'');
                    };
                    nameEl.appendChild(plusEl);
                    namesTrollDom.appendChild(nameEl);
                });

            }

        }
    });
})();