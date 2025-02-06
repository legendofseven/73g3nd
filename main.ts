I2C_LCD1602.on()
I2C_LCD1602.BacklightOff()
I2C_LCD1602.BacklightOn()
if (makerbit.isLcdConnected()) {
    music.play(music.stringPlayable("B E E G B E E G ", 100), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    makerbit.showStringOnLcd1602("LEGEND", makerbit.position1602(LcdPosition1602.Pos1), 14, TextOption.AlignLeft)
} else {
	
}
basic.forever(function () {
	
})
