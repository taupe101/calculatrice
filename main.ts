input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        numéro_1 += 1
        basic.showNumber(numéro_1)
    }
    if (_switch == 1) {
        numéro_2 += 1
        basic.showNumber(numéro_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    opération += 1
    if (opération == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (opération == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (opération == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (opération == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    opération = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (opération == 1) {
            basic.showNumber(numéro_1 + numéro_2)
        } else {
            if (opération == 2) {
                basic.showNumber(numéro_1 - numéro_2)
            } else {
                if (opération == 3) {
                    basic.showNumber(numéro_1 * numéro_2)
                } else {
                    basic.showNumber(numéro_1 / numéro_2)
                }
            }
        }
    }
})
let _switch = 0
let numéro_2 = 0
let numéro_1 = 0
let opération = 0
opération = 0
numéro_1 = 0
numéro_2 = 0
_switch = 0
