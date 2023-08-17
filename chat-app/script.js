var Astr = "Hello My name is Abhishek!";
var line = "";
for(var i=0; i<Astr.length; i++){
    var chr1 = String.fromCharCode(Astr[i]);
    var chr = Astr[i];
    if(chr == " " || chr == "\r"){
        console.log(line);

        // do something with the line here
        // clear the line buffer to start the next line.
        line = "";
    } else {
        line += chr;
    }
}