
var path=document.URL.split("=")
if(!path[1]){
  location.href=document.URL.replace(/search\S+/,"home")
}
fetch("https://www.googleapis.com/books/v1/volumes?download=DOWNLOAD_UNDEFINED&filter=FILTER_UNDEFINED&langRestrict="+navigator.language.slice(0,2)+"&libraryRestrict=LIBRARY_RESTRICT_UNDEFINED&maxAllowedMaturityRating=MAX_ALLOWED_MATURITY_RATING_UNDEFINED&orderBy=relevance&printType=BOOKS&projection=FULL&q="+decodeURI(path[1]))
    .then(response => response.json())
    .then(data => {vue.json=data;console.log(data.items)});

 var vue=new Vue({
  el:'#app',

  data: {
    value:path[0],
    title:path[1],
    search:decodeURI(path[1]),

    json:null,
    links:{
      googlePlay:'https://play.google.com/store/search?q=',
      kobo:'https://www.kobo.com/kb/kb/search?query=',
     // giunti:'https://www.giunti.it/ricerca?q=',
      //Bompiani:'https://www.bompiani.it/catalogo/',
      //mondadori:'https://www.mondadoristore.it/search/?g=',
      //Penguin:'https://www.penguinrandomhouse.com/search/cazzo?q=',
      //hoepli:'https://www.hoepli.it/libro/cazzo/',
      //Feltrinelli:'https://www.feltrinellieditore.it/opera/opera/'
      amazonit:'https://www.amazon.it/s?k=',
      amazonKindle:"https://www.amazon.com/s?i=digital-text&k=",
     // HamperCollinsIT:"https://www.harpercollins.it/risultati-della-ricerca/?keyword=",
    }
  },

})
 