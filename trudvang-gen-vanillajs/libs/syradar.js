'use strict';

class Syradar {
    /**
     * Represents my standard library
     * @constructor 
     */
    constructor() {
        this.libVersion = 1;
    }

    /**
     * Returns the library version
     * @returns {number} version
     */
    version() {
        return this.libVersion;
    }

    /**
     * Gets an element by Id from the DOM
     * @param {string} id 
     * @returns {HTMLElement} result
     */
    elmId(id) {
        const result = document.getElementById(id);
        return result;
    }

    /**
     * Removes all childNodes from an element
     * @param {HTMLElement} htmlElement 
     */
    clear(htmlElement) {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.firstChild);
        }
    }
    /**
     * Creates an element with a Text, Id and Class
     * @param {string} tagName
     * @param {string} textContent
     * @param {string} tagId
     * @param {string} tagClass
     * @return {HTMLElement} item
     */
    create(tagName, textContent, tagId, tagClass) {
        const item = document.createElement(tagName);
        if(tagId !== ''){
            item.setAttribute('id', tagId);
        }
        if(tagClass !== ''){
            item.setAttribute('class', tagClass);
        }
        const itemText = document.createTextNode(textContent);
        item.appendChild(itemText);
        return item;
    }

    /**
     * Creates an element with a Text and appends it to an element
     * @param {string} tagName
     * @param {string} textContent
     * @param {HTMLElement} appendTo
     * @param {string} id
     */
    createAndAdd(tagName, textContent, appendTo, id) {
        const item = document.createElement(tagName);
        if(id !== ''){
            item.setAttribute('id', id);
        }
        const itemText = document.createTextNode(textContent);
        item.appendChild(itemText);
        appendTo.appendChild(item);
    }

    /**
     * Returns a random item from an array-like object
     * @param {Array<>} list 
     * @returns {Item} result
     */
    choose(list) {
        const result = list[Math.floor((Math.random() * list.length))];
        return result;
    }

    /**
     * Capitalizes the first character of a string
     * @param {string} string 
     * @returns {string} result
     */
    capitalize(string) {
        const result = string.charAt(0).toUpperCase() + string.slice(1);
        return result;
    }

    /**
    * Generates unique random names from two lists. If amount > aLen * bLen it will generate all names possible!
    * @param {number} amount 
    * @param {Array<string>} a 
    * @param {Array<string>} b 
    * @returns {Array<string>} names;
    */
    getNames(amount, a, b) {
        const names = new Set();
        const maxAmount = a.length * b.length;

        if (amount > maxAmount) {
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b.length; j++) {
                    let name = a[i] + b[j];
                    name = this.capitalize(name);
                    names.add(name);
                }
            }
        } else {
            while (names.size < amount) {
                let name = this.choose(a) + this.choose(b);
                name = this.capitalize(name);
                names.add(name);
            }
        }

        return [...names].sort();
    }
}

window.syradar = new Syradar();