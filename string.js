var carName = "Opel's";
var carType = 'Insignia';
console.log(carName, carType);

var txt = 'adfasadfkljadsélgkjklfédajgaéljgkléajsdfsd';
console.log(txt.length);

var viking = 'We are the so called Vikings from the North.';
console.log(viking);

var person = { name: 'John', age: 35 };
var someone = person['name'] + person['age'];
console.log(someone);

var x = 'John';
var y = new String('John');
if (x == y) {
  console.log('true');
} else { console.log('false'); }

var szoveg = 'The place of birth is an interesting and important information in a life of any human.';
var pos = szoveg.indexOf('in', 30);
var src = szoveg.search('life');
console.log(pos);
console.log(src);

var fruits = 'Apple, Mango, Kiwi';
var res = fruits.slice(-11); // slice használata (kezdő index és záró index megadása szükséges)
console.log(res);

var str = 'Apple, Banana, Kiwi';
var res = str.substr(-4); // subtr esetén a kezdő karaktert és a kimetszendő karakterlánc hosszát adjuk meg.
console.log(res);

var csere = 'I love Microsoft and Microsoft.'; // A megadott karakterláncot lecseréli a szövegben a kívánt karakterláncra.
var repl = csere.replace('Microsoft', 'Flow Academy'); // Csak ez első találtatot cseréli le, a második megmarad.
console.log(repl);

var insy = 'My favourite team is Arsenal.';
var subs = insy.replace('ARSENAL', 'Manchester United');
console.log(subs);

var insy2 = 'My favourite team is Arsenal.';
var subs2 = insy.replace(/ARSENAL/i, 'Manchester United');
console.log(subs2);

var text1 = 'lower case';
var text2 = text1.toUpperCase();
console.log(text2);
var text3 = text2.toLowerCase();
console.log(text3);

var name1 = 'Krenács';
var name2 = 'Tibi';
var name_sum = name1.concat(' ', name2);
console.log(name_sum);

var str = "            'Hello World!'             ";
console.log(str.trim());
console.log(str);

var plc = 'Gangsta Zolee';
var char = plc.charAt(4); // Megkeresi a (4) 5. helyen álló karaktert.
var ccd = plc.charCodeAt(4); // UTF-16 kód szerint visszaadja az adott karakter értékét, 0-65535 közötti értéket.
let ufc = 'Barabalo and Fighting Panda battle';
console.log(ufc[3]); // megjeleníti az ufc stingjének 4. karakterét.
console.log(char);
console.log(ccd);

var txt = 'a, b, c, d, e, f, g';
var spl = txt.split(','); // Beteszi egy tömbbe a string tartalmát, vesszővel elválasztva.
var spl2 = txt.split(); // Szimplán, ahogy a stringben szerepelnek, ugyanúgy egy tömbbe teszi a sztring tartalmát.
console.log(spl);
console.log(spl2);
