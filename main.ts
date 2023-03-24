let brillo = 0
while (pins.digitalReadPin(DigitalPin.P10) == 0) {
    pins.digitalWritePin(DigitalPin.P0, 0)
    brillo = 0
}
while (brillo == 800) {
    brillo += 100
    pins.analogWritePin(AnalogPin.P0, brillo)
}
brillo = 0
basic.forever(function () {
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P0, 0)
    brillo = 0
})
