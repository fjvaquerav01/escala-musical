basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
})
