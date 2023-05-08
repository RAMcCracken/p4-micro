
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function() {
    basic.showIcon(IconNames.Heart)
    pause(100)
    basic.clearScreen()
})

input.onButtonPressed(Button.A, function() {
    serial.writeString("a\n")
})