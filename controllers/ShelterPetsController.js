animalShelter.controller("ShelterPetsCtrl", function ShelterPetsCtrl($scope, PetsFactory){
  $scope.pets = PetsFactory.pets;
  $scope.PetsFactory = PetsFactory;
});
