let a = +prompt('a?', '');

console.log(a);     // To observe value of a

switch(a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}
