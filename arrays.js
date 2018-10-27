var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray( a, n ) { return [n, ...a] }

function destructivelyAddElementToBeginningOfArray( a, n ) { return a.unshift( n ) }
//function destructivelyAddElementToBeginningOfArray( a, n ) { return a + n }

function addElementToEndOfArray( a, n ) { return [...a, n] }

function destructivelyAddElementToEndOfArray( a, n ) { return a.push( n ) }
