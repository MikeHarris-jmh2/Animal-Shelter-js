animalShelter.factory("PetsFactory", function PetsFactory() {
  var factory = {};
  factory.pets = [];

  factory.abandonPet = function() {  // Leave a pet at the shelter (add to shelter)
    var pet = { name: factory.petName, description: factory.petDescription, adopted: false };
    factory.pets.push(pet);
    factory.petName = null;
    factory.petDescription = null;
  };
  return factory;
});
