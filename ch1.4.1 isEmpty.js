"use strict";

/**
 * Check a object for emptiness
 * 
 * @param {object} obj Checked object
 * @returns {boolean}
 */
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// test
let schedule = {};

console.log( isEmpty(schedule) );

schedule["8:30"] = "standup and fight";

console.log( isEmpty(schedule) );