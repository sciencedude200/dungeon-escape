namespace SpriteKind {
    export const wizard = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wizard, function (sprite, otherSprite) {
    game.splash("hello I am the old man")
    game.splash("you must escape")
    game.splash("they locked me in here 100 years ago")
    pause(5000)
})
let mySprite2 = sprites.create(img`
    .................................
    .............ffffffff............
    ...........fff6bbbb6fff..........
    .........ff6bbb6666bbb6ff........
    .......ff6bb6666ff6666bb6f.......
    ......f6bbb66ffffffff666bbf......
    .....f6bb1bb66fffffffff66bbf.....
    ....f6bb111bb66ffffffffff6bbf....
    ....fbbb111b66ffffffffffff6bbf...
    ...f6bb111b66ffffffffffffff6bf...
    ...fbb611b66fffffffffffffff66bf..
    ..f6b6b11b66ffffffffffffffff6bf..
    ..fbb6b1b66fffffffffffffffff6bff.
    ..fb6fb1b6fffffffffffffffffff66f.
    ..fb6f6b6ffffffffffffffffffff66f.
    ..fb6ff6fffffffffffffffffffff6bf.
    ..fb6ffffffffffffffffffffffff6bf.
    ..fb6ffffffffffffffffffffffff6bf.
    ..fb6ffffffffffffffffffffffff6bf.
    ..f66ffffffffffffffffffffffff66f.
    ..f66ffffffffffffffffffffffff66f.
    ..ffb6ffffffffffffffffffffff6bff.
    ...fb6ffffffffffffffffffffff6bf..
    ...fb66ffffffffffffffffffff66bf..
    ....fb6ffffffffffffffffffff6bf...
    ....fbb6ffffffffffffffffff6bbf...
    .....fbb6ffffffffffffffff6bbf....
    ......fbb66ffffffffffff66bbf.....
    .......fbb666ffffffff666bbf......
    ........f6bb6666ff6666bb6f.......
    .........ff6bbb6666bbb6ff........
    ...........fff6bbbb6fff..........
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    ......ffff......
    .....f7777ff....
    ....f7777777f...
    .f.ff477774f7ff.
    f4f3ff4444ff7f4f
    f4f333ffff33ff4f
    fe4f33333333f4ef
    fef3ffffffff3fef
    .fefe11ee11efef.
    ..fee1f44f1eef..
    ..ffe4f44f4eff..
    .f76fe4444ef67f.
    fef66ffeeff66fef
    feef676ff676feef
    f4ff66777776ff4f
    f44f66677666f44f
    f4f655f55f556f4f
    .fff66555566fff.
    ..f2ff6666ff2f..
    ..ff42ffff24ff..
    ...ffffffffff...
    .....ffffff.....
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(11)
info.setLife(3)
let old_man = sprites.create(img`
    . 8 8 8 8 8 8 8 8 8 8 . . . . . 
    8 8 . 8 8 8 8 8 8 8 8 8 . . . . 
    8 . . . . d d d d d d 8 . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d f d d f d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d f d d d d f d . . . . 
    . d d . b d f f f f d b d d . . 
    . d d . b b d d d d b b d d . . 
    . 8 8 b . b b b b b b . 8 8 . . 
    . 8 b b . . b b b b b . 8 8 . . 
    . 8 b b b b b b b b 8 8 8 8 . . 
    . 8 8 8 b b b b b b 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . f f f f . . . f f f f . . 
    `, 0)
old_man.setPosition(78, 105)
old_man.setKind(SpriteKind.wizard)
forever(function () {
    if (controller.left.isPressed() || controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed())) {
        mySprite.setImage(img`
            ........f.......
            .......f7f......
            .....ff77fff....
            ....ff7777fff...
            ....f777777eff..
            fffff777777fefff
            f4f3ff7777ffef4f
            f4f333ffff33ff4f
            fe4f33333333f4ef
            fef3ffffffff3fef
            ffefe11ee11efeff
            .ffee1f44f1eeff.
            ffffe4f44f4efff.
            feeefe4444efeef.
            ffef6ffeeff6feef
            f4ff676ff76ffeef
            fff6667776f44fef
            ..f6566776f44fff
            ..ff66555f5fff..
            ..feff655566ff..
            ..f2eef666ff2f..
            ..f422ffffffff..
            `)
        pause(100)
        mySprite.setImage(img`
            ......ffff......
            .....f7777ff....
            ....f7777777f...
            .f.ff477774f7ff.
            f4f3ff4444ff7f4f
            f4f333ffff33ff4f
            fe4f33333333f4ef
            fef3ffffffff3fef
            .fefe11ee11efef.
            ..fee1f44f1eef..
            ..ffe4f44f4eff..
            .f76fe4444ef67f.
            fef66ffeeff66fef
            feef676ff676feef
            f4ff66777776ff4f
            f44f66677666f44f
            f4f655f55f556f4f
            .fff66555566fff.
            ..f2ff6666ff2f..
            ..ff42ffff24ff..
            ...ffffffffff...
            .....ffffff.....
            `)
        pause(100)
    }
})
