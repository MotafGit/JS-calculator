const currentoperationHTML = document.querySelector('[current-operation]')
const previousoperationHTML = document.querySelector('[previous-operation]')
const selectedButton = document.querySelectorAll('[buttons]')
const operationButton = document.querySelectorAll('[buttonOperation]')


class Calculator {
    constructor(previousoperationHTML,currentoperationHTML){
        this.previousoperationHTML = previousoperationHTML
        this.currentoperationHTML = currentoperationHTML
        this.clear()
    }

clear () {
    this.currentoperand = ''
    this.previous = ''
    
}


appendNumber(number) {
    if (number === '.' && this.currentoperand.includes('.')){return}
    else
    {
        this.currentoperand =  this.currentoperand + number
    }
}

operation(operation) {
   this.operation = operation
   this.previous = this.currentoperand
   console.log (this.previous)
   this.currentoperand =''
}

updateDisplay (){
    this.currentoperationHTML.innerText =  this.currentoperand 
    this.previousoperationHTML.innerText = this.previous
}
}





const calculator = new Calculator(previousoperationHTML,currentoperationHTML)

selectedButton.forEach(button => {
    button.addEventListener("click", () => {
        
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay() 
    })
})

operationButton.forEach(button => {
    button.addEventListener("click", () => {
        
        calculator.operation(button.innerText)
        calculator.updateDisplay() 
    })
})