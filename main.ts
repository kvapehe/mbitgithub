input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    music.ringTone(131)
    basic.pause(40)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(6000)
})
