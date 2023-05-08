
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function() {
    basic.showIcon(IconNames.Heart)
    pause(100)
    basic.clearScreen()
})

input.onButtonPressed(Button.A, function() {
    if(input.buttonIsPressed(Button.B)){
        serial.writeString("submit\n")
    }else{
        serial.writeString("a\n")
    }
})

input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A)) {
        serial.writeString("submit\n")
    } else {
        serial.writeString("b\n")
    }
})