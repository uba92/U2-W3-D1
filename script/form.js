console.log('It works')

const petName = document.getElementById('name')
const owner = document.getElementById('owner')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const petsForm = document.getElementById('pets-form')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.specied = _species
    this.breed = _breed
  }

  sameOwner(otherPet) {
    if (this.owner === otherPet.owner) {
      return true
    }
  }
}
let pet = []

petsForm.addEventListener('submit', (e) => {
  e.preventDefault()

  newPet = new Pet(petName.value, owner.value, species.value, breed.value)
  pet.push(newPet)
  console.log(pet)

  e.target.reset()
})
