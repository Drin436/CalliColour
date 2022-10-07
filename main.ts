input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0xff0000), 0, cbrightness.hp2)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    CalliColor.setGradient(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0x00ff00), 0, 11)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x4df243), 0, cbrightness.hp2)
})
CalliColor.ShowColorPixel(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0xFF7F00), CalliColor.CalliColorNumberPicker(0xFFFE00), CalliColor.CalliColorNumberPicker(0x7FFF00), CalliColor.CalliColorNumberPicker(0x00FF00), CalliColor.CalliColorNumberPicker(0x00FF7F), CalliColor.CalliColorNumberPicker(0x00FFFE), CalliColor.CalliColorNumberPicker(0x0040FF), CalliColor.CalliColorNumberPicker(0x0000FF), CalliColor.CalliColorNumberPicker(0x6000FF), CalliColor.CalliColorNumberPicker(0xFE00FF), CalliColor.CalliColorNumberPicker(0xFF0040))
basic.forever(function () {
    CalliColor.ShowColorPixel(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0xFF7F00), CalliColor.CalliColorNumberPicker(0xFFFE00), CalliColor.CalliColorNumberPicker(0x7FFF00), CalliColor.CalliColorNumberPicker(0x00FF00), CalliColor.CalliColorNumberPicker(0x00FF7F), CalliColor.CalliColorNumberPicker(0x00FFFE), CalliColor.CalliColorNumberPicker(0x0040FF), CalliColor.CalliColorNumberPicker(0x0000FF), CalliColor.CalliColorNumberPicker(0x6000FF), CalliColor.CalliColorNumberPicker(0xFE00FF), CalliColor.CalliColorNumberPicker(0xFF0040))
})
