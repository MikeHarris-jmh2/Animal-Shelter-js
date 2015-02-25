animalShelter.factory("PetsFactory", function PetsFactory() {
  var factory = {};
  factory.pets = [
    { name: "Fluffy", species: "Dog", type: "Pomerainian", description: "She is small and cute.", adopted: false },
    { name: "Benji", species: "Dog", type: "Rottweiler", description: "Use him to guard your ice cream.", adopted: false },
    { name: "Samantha", species: "Fish", type: "Goldfish", description: "Enjoys swimming", adopted: false },
    { name: "Gabe", species: "Reptile", type: "Ball Python", description: "Coil him up", adopted: false },
    { name: "Spades", species: "Rodent", type: "Wombat", description: "Will destroy your face, take him!.", adopted: false },
    { name: "LuLu", species: "Bird", type: "Toucan", description: "Cousin of Toucan Sam.", adopted: false },
    { name: "Whiskers", species: "Cat", type: "Maine Coon", description: "Hates water and people", adopted: false }
  ];

  factory.abandonConfirm = function() {
  var first = confirm("Are you sure you want to abandon your dear pet?");
    if (first === true) {
      var second = confirm("Are you really sure you want this?");
    } else {
      alert("Thank you for keeping your pet!");
    } if (second === true) {
        var third = confirm("Are you very, very certain? They will not forgive you.");
      } else {
        alert("Thank you for keeping your pet!");
      } if (third === true) {
            alert("Really?! You are heartless!");
            alert("Seriously you are so cruel.");
            factory.abandonPet()
          } else {
            alert("Thank you for keeping your pet!");
          }

  };

  factory.abandonPet = function() {  // Leave a pet at the shelter (add to shelter)

    var pet = { name: factory.petName, species: factory.petSpecies, type: factory.petType, description: factory.petDescription, adopted: false };
    factory.pets.push(pet);
    factory.petName = null;
    factory.petDescription = null;
    factory.petSpecies = null;
    factory.petType = null;
  };

  return factory;
});
