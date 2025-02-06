makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Hoy!", makerbit.position1602(LcdPosition1602.Pos7), 4)
makerbit.showStringOnLcd1602("7EGEND", makerbit.position1602(LcdPosition1602.Pos22), 6)
music.play(music.tonePlayable(440, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `)
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("Down", makerbit.position1602(LcdPosition1602.Pos7), 4)
music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
makerbit.showStringOnLcd1602("Down", makerbit.position1602(LcdPosition1602.Pos23), 4)
music.play(music.tonePlayable(370, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("Down", makerbit.position1602(LcdPosition1602.Pos7), 4)
music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
makerbit.showStringOnLcd1602("the road", makerbit.position1602(LcdPosition1602.Pos21), 8)
music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(370, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("Down", makerbit.position1602(LcdPosition1602.Pos7), 4)
music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
makerbit.showStringOnLcd1602("the Witches Road", makerbit.position1602(LcdPosition1602.Pos17), 16)
music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(247, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
