console.log('***** Music Collection *****')

let collection = [];

function addtoCollection(title, artist, yearPublished) {
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(record);
  return record;
}

console.log(addtoCollection('Sad Night Dynamite', 'Sad Night Dynamite', '2021'));
console.log(addtoCollection('The Moss', 'Cosmo Sheldrake', '2014'));
console.log(addtoCollection('Neotheater', 'AJR', '2019'));
console.log(addtoCollection('The Fall of Hobo Johnson', 'Hobo Johnson', '2019'));
console.log(addtoCollection('Daylight', 'Joji', '2020'));
console.log(addtoCollection('Minecraft', 'c418', '2011'));

console.log(collection);



function showCollection( array ) {
  console.log(array.length);
  array.forEach((item, i) => {
    console.log(item.title, 'by ', item.artist, ', published in', item.yearPublished);

  });

}

showCollection(collection);



function findByArtist( artist ) {
  let artistArray = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistArray.push(artist);
    }
  }
  if (artistArray.length === 0) {
    console.log([]);
  } else {
  console.log(artistArray);
}
  }
findByArtist('Cosmo Sheldrake');
findByArtist('Shawn White');
findByArtist();
findByArtist('AJR');



//STRETCH//

function search(artist, year) {
  searchResults = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === artist || year) {
      searchResults.push(artist || year);
    }
  }
  if (searchResults.length === 0) {
    console.log([]);
  } else {
  console.log(searchResults);
  }
}

search('AJR')
