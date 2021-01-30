@namespace
class SpriteKind:
    wizard = SpriteKind.create()

def on_a_pressed():
    mySprite.set_image(img("""
        ..................
        ..................
        ..................
        ..................
        ......fffffff.....
        .....ffee7efff....
        .....fee7777eff...
        .fffff4ee7e4fefff.
        .f4f3ff4444ffef4f.
        .f4f333ffff33ff4f.
        .fe4f33333333f4ef.
        .fef3ffffffff3fef.
        .ffefe11ee11efeff.
        ..ffee1f44f1eeff..
        .ffffe4f44f4efff..
        .feeefe4444efeef..
        .ffef6ffeeff6feef.
        .f4ff676ff76ffeef.
        .fff6667776f44fef.
        ...f6566776f44fff.
        ...ff66555f5fff...
        ...feff655566ff...
        ...f2eef666ff2f...
        ...f422ffffffff...
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    game.splash("hello I am the old man")
    game.splash("you must escape")
    game.splash("they locked me in here 100 years ago")
    pause(5000)
sprites.on_overlap(SpriteKind.player, SpriteKind.wizard, on_on_overlap)

mySprite: Sprite = None
tiles.set_tilemap(tilemap("""
    level2
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
scene.set_background_color(11)
info.set_life(3)
old_man = sprites.create(img("""
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
    """),
    0)
old_man.set_position(78, 105)
old_man.set_kind(SpriteKind.wizard)