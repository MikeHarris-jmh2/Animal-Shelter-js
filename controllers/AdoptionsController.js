animalShelter.controller("AdoptionsCtrl", function AdoptionsCtrl($scope, PetsFactory){
  $scope.pets = PetsFactory.pets;
  $scope.addAdoptedPet = function(pet){
    pet.adopted = true;
  };
});
