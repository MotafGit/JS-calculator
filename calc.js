const currentoperationHTML = document.querySelector('[current-operation]')
const previousoperationHTML = document.querySelector('[previous-operation]')
const selectedButton = document.querySelectorAll('[buttons]')
const operationButton = document.querySelectorAll('[buttonOperation]')
const equalsButton = document.querySelector('[equalsButton]')

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
    if (this.currentoperand === '') return
    if (this.previous !== ''){
        this.compute()
        console.log ("1o")
    }
   this.operation = operation
   this.previous = this.currentoperand
   this.currentoperand =''
}

compute(){
    let result
    const previousInt = parseFloat(this.previous)
    const currentInt = parseFloat(this.currentoperand)
    switch (this.operation){
        case '+':
            result = previousInt + currentInt
            break
        case '-':
            result = previousInt - currentInt
            break
        case '*':
            result = previousInt * currentInt
            break
        case '/':
            result = previousInt / currentInt
            break
        default:
            return

    }
   
    this.currentoperand = result
    this.operation = undefined
    this.previous = ''
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


equalsButton.addEventListener("click",button => {
    calculator.compute()
    calculator.updateDisplay()
})

