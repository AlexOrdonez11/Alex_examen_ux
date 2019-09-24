
const request = require('request');
const cheerio = require('cheerio');

function redigir(num, url) {
  request(url,
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.m2L3rb').each((i, el) => {
          cont += 1;
          if (cont > 1) {
            var link = ($(el).text()).substring(8);
            console.log("");
            console.log(num + link);
            return (num + link);
          }
        });
      }
    });
}

//Tecnologia
function tecnologia(){
  console.log("hola");
  return new Promise((resolve, reject) => {
    request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen',
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          var cont = 0;
          console.log($);
          $('.DY5T1d').each((i, el) => {
            console.log("pancho2");
            if (cont < 10) {
              const title = $(el).text();
              //const href = ($(el).find('.href'));
              const final = (el.attribs.href).substring(1);
              const link = 'https://news.google.com'.concat(final);
              Lista1.push(title);
              Lista2.push(link);
              console.log(title);
              cont += 1;
            }
          });
          cont = 1;
          $('img').each((i, el) => {
            if (cont <= 11 && cont > 1) {
              if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
                cont += 1;
                //console.log(el.attribs.src);
                Lista3.push(el.attribs.src);
              }
            }
            if (cont == 1) {
              cont = 2;
            }
          });
          //console.log(Lista1);
          //console.log(Lista2);
          //console.log(Lista3);
          const listafinal = [Lista1, Lista2, Lista3];
          console.log(listafinal);
          resolve(listafinal);
        }
      });
    }
  )
}

//Movies
function movies(){
  return new Promise((resolve, reject) =>{
    request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB/sections/CAQiWkNCQVNQUW9JTDIwdk1ESnFhblFTQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURKMmVHNHFHUW9YQ2hOTlQxWkpSVk5mVTBWRFZFbFBUbDlPUVUxRklBRW9BQSoqCAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVABUAE?hl=en-US&gl=US&ceid=US%3Aen',
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          var cont = 0;
          $('.DY5T1d').each((i, el) => {
            if (cont < 10) {
              const title = $(el).text();
              //const href = ($(el).find('.href'));
              const final = (el.attribs.href).substring(1);
              const link = 'https://news.google.com'.concat(final);
              Lista1.push(title);
              //console.log(title);
              //var linkkk = redigir(cont + ")",link);
              //console.log(linkkk);
              //var l = setTimeout(linkkk,200);
              Lista2.push(link);
              cont += 1;
            }
          });
          cont = 1;
          $('img').each((i, el) => {
            if (cont <= 11 && cont > 1) {
              if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
                cont += 1;
                //console.log(el.attribs.src);
                Lista3.push(el.attribs.src);
              }
            }
            if (cont == 1) {
              cont = 2;
            }
          });
          //console.log(Lista1);
          //console.log(Lista2);
          //console.log(Lista3);
          const listafinal = [Lista1, Lista2, Lista3];
          resolve(listafinal);
        }
      });
  }
  )
}

//Music
function music(){
  return new Promise((resolve, reject) => {
  request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB/sections/CAQiRkNCQVNMZ29JTDIwdk1ESnFhblFTQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURSeWJHWXFDaElJTDIwdk1EUnliR1lvQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURKcWFuUVNBbVZ1R2dKVlV5Z0FQAVAB?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }
    });
}
)
}
//NBA
function nba(){
  return new Promise((resolve, reject) =>{
  request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiQkNCQVNLd29JTDIwdk1EWnVkR29TQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURWcWRuZ3FCd29GRWdOT1FrRW9BQSoqCAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVABUAE?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            console.log(final);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }
    });
}
)
}

//Futbol
function futbol(){
  return new Promise((resolve, reject) =>{
  request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiRkNCQVNMZ29JTDIwdk1EWnVkR29TQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURKMmVEUXFDZ29JRWdaVGIyTmpaWElvQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURadWRHb1NBbVZ1R2dKVlV5Z0FQAVAB?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }
    });
}
)
}
function mundo(){
  return new Promise((resolve, reject) => {
  request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }
    });
}
)
}
//Nutricion
function nutricion(){
  return new Promise((resolve, reject) => {
  request('https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ/sections/CAQiQENCQVNLZ29JTDIwdk1HdDBOVEVTQW1WdUlnNElCQm9LQ2dndmJTOHdOV1JxWXlvS0VnZ3ZiUzh3TldScVl5Z0EqJQgAKiEICiIbQ0JBU0Rnb0lMMjB2TUd0ME5URVNBbVZ1S0FBUAFQAQ?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }
    });
}
)
}
//Medicina
function medicina(){
  return new Promise((resolve, reject) => {
  request('https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ/sections/CAQiQENCQVNLZ29JTDIwdk1HdDBOVEVTQW1WdUlnNElCQm9LQ2dndmJTOHdOSE5vTXlvS0VnZ3ZiUzh3TkhOb015Z0EqJQgAKiEICiIbQ0JBU0Rnb0lMMjB2TUd0ME5URVNBbVZ1S0FBUAFQAQ?hl=en-US&gl=US&ceid=US%3Aen',
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var cont = 0;
        $('.DY5T1d').each((i, el) => {
          if (cont < 10) {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            Lista1.push(title);
            //console.log(title);
            //var linkkk = redigir(cont + ")",link);
            //console.log(linkkk);
            //var l = setTimeout(linkkk,200);
            Lista2.push(link);
            cont += 1;
          }
        });
        cont = 1;
        $('img').each((i, el) => {
          if (cont <= 11 && cont > 1) {
            if (!((el.attribs.src).includes('https://lh3.googleusercontent.com/JDFOyo'))) {
              cont += 1;
              //console.log(el.attribs.src);
              Lista3.push(el.attribs.src);
            }
          }
          if (cont == 1) {
            cont = 2;
          }
        });
        //console.log(Lista1);
        //console.log(Lista2);
        //console.log(Lista3);
        const listafinal = [Lista1, Lista2, Lista3];
        resolve(listafinal);
      }

    });
}
)
}
var Lista1 = [];
var Lista2 = [];
var Lista3 = [];
var Lista = [];
//var data = fs.readFileSync('datos.json');
//var words = JSON.parse(data);
var fs = require('fs');
//var app = require('./App.js');

export function TecnologiaF(){
  tecnologia();
}

export function MoviesF(){
  movies();
}

export function MusicF() {
  music();
}

export function NbaF() {
  nba();
}

export function FutbolF(){
  futbol();
}

export function MundoF() {
  mundo();
}

export function NutricionF() {
  nutricion();
}

export function MedicinaF() {
  medicina();
}

function writeIT(response){
  var mono = null;
  for (var i = 0; i < 10; i++) {
    mono = {
      titulo: response[0][i],
      link:response[1][i],
      img:response[2][i]
    };
    Lista.push(mono);
  }
  var data = JSON.stringify(Lista,null,2);
  var data1 = `{"todos": ${data} }`;
  //var news = JSON.parse(data1);
  fs.writeFile('lunes.json',data1,finished);
  function finished(err){
    console.log('all set.');
  }

}
