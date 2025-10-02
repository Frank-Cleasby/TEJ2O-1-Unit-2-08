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
    
    // red on
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    
    // green on
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    
    // blue on
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    
    // violet on
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    
    // cyan on
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    
    // yellow on
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    
    // white on
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})

