animalShelter.factory("PetsFactory", function PetsFactory() {
  var factory = {};
  factory.pets = [];

  factory.abandonPet = function() {  // Leave a pet at the shelter (add to shelter)
    var pet = { name: factory.petName, species: factory.petSpecies, type: factory.petType, description: factory.petDescription, adopted: false };
    factory.pets.push(pet);
    factory.petName = null;
    factory.petDescription = null;
    factory.petSpecies = null;
    factory.petType = null;
  };

  // factory.adoptPet = function(pet) {
  //   var index = factory.pets.indexOf(pet)
  //
  // }
  return factory;
});
