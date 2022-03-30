/* global EXIF */

// store the image addresses and coords
const imageMap = [ 
  
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_1735.jpg?v=1603162723625','2255,1079,2148,997'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9285.jpg?v=1603162725562','2005,1183,2525,1610'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9282.jpg?v=1603162731700','2383,1414,1660,933'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9294.jpg?v=1603162724190','2440,1553,2739,1738'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_1331.jpg?v=1603162727951','819,217,2415,2985'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_3772.jpg?v=1603162726468','1161,705,1813,980'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_3925.jpg?v=1603162728808','1232,1076,2490,1599,2458,801,1297,192'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6526.jpg?v=1603162729930','908,633,1472,1229'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FJPEG%20image%203.jpeg?v=1603248573680','907,2039,1270,2507'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_4612.jpg?v=1603162731516','1895,1852,2604,1432'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_5598.jpg?v=1603162738805','1802,1254,2141,1738'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_5856.jpg?v=1603162738753','1792,1795,780,1410'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6017.jpg?v=1603162731824','1147,908,1553,638'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6193.jpg?v=1603162734045','1905,478,2181,627'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6521.jpg?v=1603162728785','1394,262,2113,1109'],  
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FJPEG%20image%202.jpeg?v=1603248568601','2158,2162,1894,1743'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FJPEG%20image.jpeg?v=1603248568932','2197,1227,1800,842'],  
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6613.jpg?v=1603162728724','484,1834,3843,2369'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6615.jpg?v=1603162731672','2877,2159,1638,842'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_6617.jpg?v=1603162724809','328,1314,776,1703'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_7286.jpg?v=1603162736021','1535,317,2005,595'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_7461.jpg?v=1603162727253','1419,1635,1726,1881'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_8661.jpg?v=1603162738187','1350,139,2518,655'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FXi%20Chen%20-%200D131E3B-5477-4225-8311-73CCBA1D5E8E.jpeg?v=1603162732561','1064,877,2209,1693'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9596.jpg?v=1603162738090','1031,1745,1905,2463'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9514.jpg?v=1607469266686', '1952,1749,1539,1435'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9515.jpg?v=1607469373462', '1373,1186,2050,1521'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9516.jpg?v=1607469447550', '1075,1189,1852,1594'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FIMG_9519.jpg?v=1607469506280', '1605,1126,2299,1453'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Dec%2008%2C%205%2054%2048%20PM.jpg?v=1607469620110', '1776,1831,2093,2041'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2007%2C%204%2041%2049%20PM.jpg?v=1607469698998', '1607,836,2024,1090'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2007%2C%204%2049%2018%20PM.jpg?v=1607469768354', '540,2625,1950,2935'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2007%2C%204%2054%2006%20PM.jpg?v=1607469853135', '2791,14,3058,313'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2007%2C%205%2010%2020%20PM.jpg?v=1607469975890', '1934,2875,2036,2937'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2009%2C%204%2035%2009%20PM.jpg?v=1607470025757', '2540,1029,2664,1115'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Oct%2026%2C%206%2044%2000%20PM.jpg?v=1607470160977', '2408,1967,2675,2230'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FAlvin%20-%2016032930109178994370019600876889.jpg?v=1607470224581', '1155,1986,1391,2140'],
  ['https://cdn.glitch.com/9aae71a1-b81a-4f4e-b805-07cbf597b47f%2FPhoto%20Nov%2017%2C%202%2035%2024%20PM.jpg?v=1607490069350','1877,432,2895,692']
];

// const imageMap = [
//   ['https://www.dropbox.com/s/zkolc2srqo5e4c3/IMG_1735.jpg?raw=1','2255,1079,2148,997'],
//   ['https://www.dropbox.com/s/z5hw90y3d6azjix/IMG_9285.jpg?raw=1','2005,1183,2525,1610'],
//   ['https://www.dropbox.com/s/hqa19rkrs7y6p1j/IMG_9282.jpg?raw=1','2383,1414,1660,933'],
//   ['https://www.dropbox.com/s/h6o8w56t3lkk6v4/IMG_9294.jpg?raw=1','2440,1553,2739,1738'],
//   ['https://www.dropbox.com/s/v3tpo3dnaklafec/IMG_1331.jpg?raw=1','819,217,2415,2985'],
//   ['https://www.dropbox.com/s/ozz66szgv50i48y/IMG_3772.jpg?raw=1','1161,705,1813,980'],
//   ['https://www.dropbox.com/s/6r1t0d3xhhpa7sl/IMG_3925.jpg?raw=1','1232,1076,2490,1599,2458,801,1297,192'],
//   ['https://www.dropbox.com/s/rfauxqzfks7tdys/IMG_4612.jpg?raw=1','1895,1852,2604,1432'],
//   ['https://www.dropbox.com/s/12jjk7qc7laft5a/IMG_5598.jpg?raw=1','1802,1254,2141,1738'],
//   ['https://www.dropbox.com/s/5dj2wcud3b13upf/IMG_5856.jpg?raw=1','1792,1795,780,1410'],
//   ['https://www.dropbox.com/s/qx4veyr6ysuts0j/IMG_6017.jpg?raw=1','1147,908,1553,638'],
//   ['https://www.dropbox.com/s/wl5tbms8h1qhk4r/IMG_6193.jpg?raw=1','1905,478,2181,627'],
//   ['https://www.dropbox.com/s/5oln27cvju2mb5n/IMG_6521.jpg?raw=1','1394,262,2113,1109'],
//   ['https://www.dropbox.com/s/dn5rhbnoo4wwceh/IMG_6526.jpg?raw=1','908,633,1472,1229'],
//   ['https://www.dropbox.com/s/8omch0samjxz4wt/IMG_6613.jpg?raw=1','484,1834,3843,2369'],
//   ['https://www.dropbox.com/s/0z4qna7g146vem7/IMG_6615.jpg?raw=1','2877,2159,1638,842'],
//   ['https://www.dropbox.com/s/obnds82nj3prnt8/IMG_6617.jpg?raw=1','328,1314,776,1703'],
//   ['https://www.dropbox.com/s/1xug10r96o0xgzz/IMG_7286.jpg?raw=1','1535,317,2005,595'],
//   ['https://www.dropbox.com/s/35pxctwzv5m2wex/IMG_7461.jpg?raw=1','1419,1635,1726,1881'],
//   ['https://www.dropbox.com/s/2u3szamljldlzm6/IMG_8661.jpg?raw=1','1350,139,2518,655'],
//   ['https://www.dropbox.com/s/q0e5bkx9vouegb3/IMG_9596.jpg?raw=1','1031,1745,1905,2463'],
//   ['https://www.dropbox.com/s/dafiluwejcl6qq2/Xi%20Chen%20-%200D131E3B-5477-4225-8311-73CCBA1D5E8E.jpeg?raw=1','1064,877,2209,1693']
// ];

// add to html
let template = ''

for (let i = 0; i < imageMap.length; i++) {
  template += `
    <img src="${imageMap[i][0]}" usemap="#image-map${i}" class="mySlides">
    <map name="image-map${i}">
      <area target="_self" alt="exit" title="EXIT!" coords="${imageMap[i][1]}" shape="rect" onclick="plusSlides(1)">
    </map>
    <div class="location" id="image-map${i}"></div>
  `
}

document.getElementById('slideshow-container').innerHTML = template

// change the cursor on hover
const exits = document.querySelectorAll('area')

for (let i = 0; i < exits.length; i++) {
  exits[i].addEventListener('mouseover', () => {
    exits[i].style.cursor = "alias"
  });
  exits[i].addEventListener('mouseout', () => {
    exits[i].style.cursor = "defult"
  });
}

// image slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // var i;
  const slides = document.getElementsByClassName("mySlides");
  const locationJS = document.querySelectorAll(".location")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      locationJS[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  locationJS[slideIndex-1].style.display = "block";
}




//exif exploration
// function getExif() {

//     let img = document.getElementById("img");
//     EXIF.getData(img, function() {
//         let allMetaData = EXIF.getAllTags(this);
//         console.log(allMetaData)
//         // let allMetaDataSpan = document.getElementById("allMetaDataSpan");
//         // allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
      
      
//     });
// }

// document.querySelector("h1").addEventListener("click", getExif)



