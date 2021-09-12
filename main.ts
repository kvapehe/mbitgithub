/**
 * Unngå å telle forbi 9. pga. "scrolling", og test med modulus..
 * 
 * Teller opp med A og ned med B
 * 
 * Telle opp reset til 0
 * 
 * Telle ned reset til 9
 * 
 * Lurt å teste på enkle ting for å brukes senere.
 * 
 * Lyden er med for å se det er liv i Mbit.
 * 
 * Endrer nok intervall etter hvert.
 */
input.onButtonPressed(Button.A, function () {
    tallet += 1
    if (tallet % startigjen0 == 0) {
        tallet = 0
        basic.showLeds(`
            # # # # #
            . . . . #
            . # . . #
            # # # # #
            . # . . .
            `)
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
    basic.showNumber(tallet)
})
input.onButtonPressed(Button.B, function () {
    tallet += -1
    if (tallet % startigjen0 == 0) {
        tallet = 9
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . # .
            # # # # #
            . . . # .
            `)
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
    basic.showNumber(tallet)
})
let startigjen0 = 0
let tallet = 0
tallet = 0
startigjen0 = 10
let startigjen10 = 10
basic.showNumber(tallet)
basic.forever(function () {
    music.ringTone(147)
    basic.pause(25)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(9000)
})
