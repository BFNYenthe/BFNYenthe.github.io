
document.getElementById("mybutten").onclick = function(){
   var meth = document.getElementById("mytext").value;

   var zakken = 5;
   var zakkenTotaal = meth / zakken;

   var geld = 420;
   var geldtotaal = zakkenTotaal * geld;

   


   document.getElementById("text1").innerHTML = "Je hebt " + zakkenTotaal + " zakken meth.";
   document.getElementById("text2").innerHTML = "Je hebt " + geldtotaal + " zwart geld.";

}