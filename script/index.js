console.log('It works!')

//Creazione della classe "User"
class User {
  //funzione costruttore in cui definisco le proprietà che avranno gli oggetti creati
  constructor(_firstname, _lastname, _age, _location) {
    this.firstname = _firstname
    this.lastname = _lastname
    this.age = _age
    this.location = _location
  }

  //metodo di User per confrontare l'età di due istanze
  ageComparison(newUser) {
    if (this.age > newUser.age) {
      return `Ciao sono ${this.firstname} è sono più vecchio di ${newUser.firstname}`
    } else {
      return `Ciao sono ${newUser.firstname} è sono più vecchio di ${this.firstname}`
    }
  }
}

const umberto = new User('Umberto', 'Tramontano', 32, 'Marsico Nuovo')
console.log(umberto)

const aldo = new User('Aldo', 'Baglio', 66, 'Milano')
console.log(aldo)

const anna = new User('Anna', 'Landi', 21, 'Bolzano')

const giovanni = new User('Giovanni', 'Storti', 67, 'Milano')

console.log(umberto.ageComparison(anna))

console.log(umberto.ageComparison(giovanni))

console.log(umberto.ageComparison(aldo))

console.log(giovanni.ageComparison(aldo))

console.log(aldo.ageComparison(giovanni))

class terrone extends User {
  constructor(_firstname, _lastname, _age, _location, _latitude) {
    super(_firstname, _lastname, _age, _location)
    this.latitude = _latitude
  }
  showTerr() {
    if (this.latitude === 'sud') {
      return `Ciao sono ${this.firstname} e sono terrone`
    } else {
      return 'Non sono un terrone'
    }
  }
}

const checco = new terrone('Checco', 'Zalone', '47', 'Capursi', 'sud')
console.log(checco)
console.log(checco.showTerr())
