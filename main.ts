namespace SpriteKind {
    export const wizard = SpriteKind.create()
    export const slime_boss = SpriteKind.create()
    export const firedragon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    the_player.setImage(img`
        ...................
        ...................
        ...................
        ......fffff......f.
        .....f77777f....f7f
        ....f7777777ffff77f
        ....f7777777777777f
        ....f7777777777fff.
        .....ffffffffff....
        .....f55555555f....
        .....f55f55f55f....
        .....f55555555f....
        .....f5f555555f....
        .....f55ffff55f....
        .....f55555555f....
        .....ffffffffff....
        ..ffff77777777ffff.
        .f7777777ff7777777f
        .f777777777777ff77f
        .f77ff777ff755ff77f
        .f77ff777777557777f
        .f77ff777ff755ffff.
        .fff..fffffbbbb....
        f222ffeeeffe66f....
        f2f2ffeeeffe66f....
        f222ffeeeffe66f....
        .f2f.feeeffeeef....
        ..f.ffeeeffeeeff...
        ...feeeeeffeeeeef..
        ..feeeeeeffeeeeeef.
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    fire_dragon.follow(the_player, 50)
    firedragon_agro = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wizard, function (sprite, otherSprite) {
    game.splash("hello I am the old man")
    game.splash("you must escape")
    game.splash("I,m in here 100 years ( ´･･)ﾉ(._.`)")
    pause(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.slime_boss, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        slime_boss_health += -1
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.firedragon, function (sprite, otherSprite) {
    if (firedragon_agro == true) {
        if (controller.A.isPressed()) {
            firedragonhealth += -1
            pause(1000)
        }
        pause(1000)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(1000)
    if (controller.A.isPressed()) {
        otherSprite.destroy()
    }
    pause(1000)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let slimeball: Sprite = null
let firedragon_agro = false
let fire_dragon: Sprite = null
let the_player: Sprite = null
info.setScore(10)
let fireball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let fire_ball3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let fireball2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 f 5 5 5 f 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
    . . . 4 4 5 5 5 5 5 5 5 4 4 . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let spawn_ball = sprites.create(img`
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
tiles.placeOnRandomTile(fireball, assets.tile`myTile2`)
tiles.placeOnRandomTile(fire_ball3, assets.tile`myTile2`)
tiles.placeOnRandomTile(fireball2, assets.tile`myTile2`)
let slime_boss2 = sprites.create(assets.image`slime boss`, SpriteKind.slime_boss)
the_player = sprites.create(img`
    .................ff
    ................f7f
    .......ffff...ff77f
    ......f7777fff7777f
    ......f7777777777f.
    .....f77777777777f.
    .....f777777777ff..
    .....ffffffffff....
    .....f55555555f....
    .....f55f55f55f....
    .....f55555555f....
    .....f5f555555f....
    .....f55ffff55f....
    .....f55555555f....
    ......ffffffff.....
    .....f77777777f....
    ..ffff777ff777fff..
    .f777777777777777f.
    .f7777777ff7777777f
    .f77ff77777777ff77f
    .fffff777ff777ff77f
    f2222f77777777ff77f
    f2ff2ffffffffff.ee.
    f2222feeeffeeef.ee.
    .f22ffeeeffeeefbbbb
    ..ff.feeeffeeef.66.
    .....feeeffeeef.66.
    ....feeeeffeeeef66.
    ...feeeeeffeeeeef..
    ...ffffffffffffff..
    `, SpriteKind.Player)
let enemy1 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ........77..........
    .......7777.........
    ......777777........
    ......717717........
    ......7f77f7........
    ......7f77f7........
    ......777777........
    ......777777........
    ......77..77........
    .....777..777.......
    ....777....777......
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
let slime_boss_health = 5
fire_dragon = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ....................fffff.........................
    ...................f77777.........................
    ...................f77777.........................
    ...................f77777..ffffff.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................f77777.f777777.................
    ...................ffffffffffff77.................
    .............ffffff777777777777ff.................
    ..........fff77f77777777777777777ffff.............
    .......ffffb777f77777777777777777777ff............
    .....ff777c1777f777777777777777777777f............
    ....f7777777777f7777777777777777fff77f............
    .....fffff77777f77777777ffffffff..f77f............
    ..........fffffffffffffff7f.f7f...f7ff............
    ..................f7ff7ff7f.f7f...f7f.............
    ..................f7ff7ff7f.f7f...f7f.............
    ..................f7ff7ff7f.f7f....f..............
    ..................f7ff7ff7f.f7f...................
    ..................f7ff7ff7f.f7f...................
    ..................f7f.f..f...f....................
    ..................f7f.............................
    ..................f7f.............................
    ..................f7f.............................
    ...................f..............................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.firedragon)
tiles.placeOnRandomTile(fire_dragon, assets.tile`myTile4`)
slime_boss2.follow(the_player)
tiles.placeOnRandomTile(enemy1, assets.tile`tile`)
tiles.placeOnRandomTile(slime_boss2, assets.tile`myTile1`)
enemy1.follow(the_player)
controller.moveSprite(the_player)
scene.cameraFollowSprite(the_player)
scene.setBackgroundColor(11)
info.setLife(5)
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
    . 8 8 b 8 b b b b b b 8 8 8 . . 
    . 8 b b 8 8 b b b b b 8 8 8 . . 
    . 8 b b b b b b b b 8 8 8 8 . . 
    . 8 8 8 b b b b b b 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . f f f f . . . f f f f . . 
    `, 0)
old_man.setPosition(78, 105)
old_man.setKind(SpriteKind.wizard)
let firedragonhealth = 5
firedragon_agro = false
game.onUpdateInterval(2000, function () {
    slimeball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 6 6 6 7 7 7 7 7 . . . 
        . . . 7 7 6 6 6 7 7 7 7 7 7 . . 
        . . 7 7 7 6 6 6 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, slime_boss2, 0, 50)
    slimeball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 6 6 6 7 7 7 7 7 . . . 
        . . . 7 7 6 6 6 7 7 7 7 7 7 . . 
        . . 7 7 7 6 6 6 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, slime_boss2, 0, -50)
    slimeball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 6 6 6 7 7 7 7 7 . . . 
        . . . 7 7 6 6 6 7 7 7 7 7 7 . . 
        . . 7 7 7 6 6 6 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, slime_boss2, -50, 0)
    slimeball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 6 6 6 7 7 7 7 7 . . . 
        . . . 7 7 6 6 6 7 7 7 7 7 7 . . 
        . . 7 7 7 6 6 6 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 6 6 6 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, slime_boss2, 50, 0)
})
forever(function () {
    if (slime_boss_health == 0) {
        slime_boss2.destroy()
        info.setLife(7)
        slime_boss_health = 1
    }
})
forever(function () {
    if (firedragon_agro == true) {
        fire_dragon.setImage(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ....................fffff.........................
            ...................f77777.........................
            ...................f77777.........................
            ...................f77777..ffffff.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................f77777.f777777.................
            ...................ffffffffffff77.................
            .............ffffff777777777777ff.................
            .44.......fff77f77777777777777777ffff.............
            4544...ffffb777f77777777777777777777ff............
            45544ff777c1777f777777777777777777777f............
            455544777777777f7777777777777777fff77f............
            45544fffff77777f77777777ffffffff..f77f............
            4544......fffffffffffffff7f.f7f...f7ff............
            44................f7ff7ff7f.f7f...f7f.............
            ..................f7ff7ff7f.f7f...f7f.............
            ..................f7ff7ff7f.f7f....f..............
            ..................f7ff7ff7f.f7f...................
            ..................f7ff7ff7f.f7f...................
            ..................f7f.f..f...f....................
            ..................f7f.............................
            ..................f7f.............................
            ..................f7f.............................
            ...................f..............................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `)
    }
})
forever(function () {
    console.log(firedragonhealth)
})
forever(function () {
    if (the_player.overlapsWith(slimeball)) {
        info.changeLifeBy(-1)
        pause(5000)
    }
})
forever(function () {
    if (firedragonhealth == 0) {
        fire_dragon.destroy()
        info.setLife(6)
        firedragonhealth = 1
    }
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
forever(function () {
    if (controller.left.isPressed() || controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed())) {
        the_player.setImage(img`
            .................ff
            ................f7f
            .......ffff...ff77f
            ......f7777fff7777f
            ......f7777777777f.
            .....f77777777777f.
            .....f777777777ff..
            .....ffffffffff....
            .....f55555555f....
            .....f55f55f55f....
            .....f55555555f....
            .....f5f555555f....
            .....f55ffff55f....
            .....f55555555f....
            ......ffffffff.....
            .....f77777777f....
            ..ffff777ff777fff..
            .f777777777777777f.
            .f7777777ff7777777f
            .f77ff77777777ff77f
            .fffff777ff777ff77f
            f2222f77777777ff77f
            f2ff2ffffffffff.ee.
            f2222feeeffeeef.ee.
            .f22ffeeeffeeefbbbb
            ..ff.feeeffeeef.66.
            .....feeeffeeef.66.
            ....feeeeffeeeef66.
            ...feeeeeffeeeeef..
            ...ffffffffffffff..
            `)
        pause(100)
        the_player.setImage(img`
            ...................
            ...................
            ...................
            ......fffff......f.
            .....f77777f....f7f
            ....f7777777ffff77f
            ....f7777777777777f
            ....f7777777777fff.
            .....ffffffffff....
            .....f55555555f....
            .....f55f55f55f....
            .....f55555555f....
            .....f5f555555f....
            .....f55ffff55f....
            .....f55555555f....
            .....ffffffffff....
            ..ffff77777777ffff.
            .f7777777ff7777777f
            .f7777777777777777f
            .f77ff777ff777ff77f
            .f77ff77777777ff77f
            .f77ff777ff777f.ee.
            .fff..fffffffff.ee.
            f222ffeeeffeeefbbbb
            f2f2ffeeeffeeef.66.
            f222ffeeeffeeef.66.
            .f2f.feeeffeeef.66.
            ..f.ffeeeffeeeff...
            ...feeeeeffeeeeef..
            ..feeeeeeffeeeeeef.
            `)
        pause(100)
    }
})
forever(function () {
    if (controller.B.isPressed() && info.life() < 5) {
        projectile = sprites.createProjectileFromSprite(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, the_player, 0, 50)
        projectile = sprites.createProjectileFromSprite(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, the_player, 0, -50)
        projectile = sprites.createProjectileFromSprite(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, the_player, 50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, the_player, -50, 0)
        pause(1000)
    }
})
forever(function () {
    if (slime_boss_health == 1) {
        fireball.follow(the_player)
        fire_ball3.follow(the_player)
        fireball2.follow(the_player)
    }
})
