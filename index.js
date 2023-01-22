const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

function myEach(collection, cb) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i])
    }

    return collection
}


function myMap(collection, cb) {
    const newCollection = standardizeInput(collection)
    const updatedNewCollection = [];

    for (let i = 0; i < newCollection.length; i++) {
        updatedNewCollection.push(cb(newCollection[i]))
    }
    return updatedNewCollection
}


function myReduce(collection, cb, acc) {
    let newCollection = standardizeInput(collection)
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1)
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = cb(acc, newCollection[i], newCollection)
    }
    return acc

}


// function myFind(collection, predicate) {
//     const newCollection = standardizeInput(collection)
    
//     for (let i = 0; i < newCollection.length; i++) {
//         if (newCollection[i] === Number) {
//             let stringNum = newCollection[i].toString()

//         }
//         console.loog(newCollection[i][0])
//         // if (newCollection[i][0] === predicate) {
//         //     console.log(newCollection[i][0])
//         // }
//     }
// }

