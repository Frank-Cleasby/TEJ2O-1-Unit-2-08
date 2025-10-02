/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program displays a changing RGB LED
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// activate RGB LED
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showIcon(IconNames.Giraffe)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})

