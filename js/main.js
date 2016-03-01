var insects = [{
  name: 'Ant Nest Beetle',
  image: 'images/ant-nest-beetle.jpg',
  family: 'Carabidae',
  min size: 6,
  max size: 20,
  eats insects: 'Yes',
  eats dung: 'No',
  eats plants: 'No'
}, {
  name: 'Dung Beetle',
  image: 'images/dung-beetle.jpg',
  family: 'Scarabidae',
  min size: 20,
  max size: 30,
  eats insects: 'No',
  eats dung: 'Yes',
  eats plants: 'No'
}, {
  name: 'Stag Beetle',
  image: 'images/stag-beetle.jpg',
  family: 'Lucanidae',
  min size: 5,
  max size: 120,
  eats insects: 'No',
  eats dung: 'No',
  eats plants: 'Yes'
}, {
  name: 'Tortoise Beetle',
  image: 'images/tortoise-beetle.jpg',
  family: 'Cassidinae',
  min size: 1,
  max size: 18,
  eats insects: 'No',
  eats dung: 'No',
  eats plants: 'Yes'
}]

// Create your variable here, name it `insects`

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
