controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 3 3 . . . . . . . . 
    . . 3 e e e e 3 . . . . . . . . 
    . . 3 1 e e 1 3 . . . . . . . . 
    . . 3 e 1 1 e 3 . . . . . . . . 
    . . 3 e e e e 3 . . . . . . . . 
    . 3 . e 2 2 e . 3 . . . . . . . 
    . . . e 2 2 e . . . . . . . . . 
    . . . . e e . . . . . . . . . . 
    . . . . e e . . . . . . . . . . 
    . e e e . . e e e . . . . . . . 
    . e e e . . e e e . . . . . . . 
    . e e e . . e e e . . . . . . . 
    e e e e . . e e e e . . . . . . 
    e e e e . . e e e e . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 100) 
When place up button go foword