console.log('It works')

const petName = document.getElementById('name')
const owner = document.getElementById('owner')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const petsForm = document.getElementById('pets-form')

const arrayOfPets = []

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.specied = _species
    this.breed = _breed
  }

  sameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true
    } else {
      return false
    }

    // return this.owner === otherPet.owner
  }
}

petsForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const newPet = new Pet(petName.value, owner.value, species.value, breed.value)

  arrayOfPets.push(newPet)
  console.log(newPet)

  console.log(arrayOfPets)
  e.target.reset()
})

const compareButton = document.getElementById('compareButton')

compareButton.addEventListener('click', function () {
  alert(
    arrayOfPets[arrayOfPets.length - 1].sameOwner(
      arrayOfPets[arrayOfPets.lenght - 2]
    )
  )
})
