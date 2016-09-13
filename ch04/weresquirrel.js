
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}

addEntry(["work", "touched a tree", "pizza", "running", "television"], false);

addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched a tree", "brushed teeth"], false);

addEntry(["weekend", "cyclying", "break", "peanuts", "beer"], true);
