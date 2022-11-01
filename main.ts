controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ThePlayer.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ThePlayer.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ThePlayer.x += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ThePlayer.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let car: Sprite = null
let shark: Sprite = null
let ThePlayer: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
ThePlayer = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
ThePlayer.setPosition(120, 328)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(ThePlayer)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        shark = sprites.create(img`
            ...........fffcc....................
            ...........fbbbbcfffffffff..........
            ............fbfffbbbbbbbbbf.........
            ............ffbbbbffb111bbf.........
            ..........ffcbbbbbff11111bf.........
            .........fcccbcbcbb11cccc1f.........
            ccccc...fcccbcbcbbb1c1c1cf..........
            cbbddccfccccbcbcbbb1333c............
            .ccbddbcccccbbbbbbb1c333c...........
            ..ccbbcccccccbbbbb11c133c...........
            ..fccbffccccccbbbb111c31cc..........
            ..fccf.cbbcccccbbbc111111c..........
            .fcbbf..cdddddfbbbc1111cc...........
            .fbbf....cdddfbbdbffccc.............
            fbbf......ccfbbdbf..................
            fff.........fffff...................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(shark, sprites.swamp.swampTile1)
        shark.setVelocity(50, 0)
        shark.x = 16
        shark.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        car = sprites.create(img`
            . . . . e e e e e . . . . . . . 
            . . . e 2 2 2 2 2 e e . . . . . 
            . . e 2 2 2 2 2 2 2 e e . . . . 
            . e b 4 2 2 2 4 4 4 9 e . . . . 
            e b 9 4 2 2 4 4 4 4 9 9 e e . . 
            e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
            e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
            e 9 9 e e e e e e e 9 9 2 2 2 e 
            e 9 b e b e b b b e b 9 2 2 2 e 
            e b e b b e b b b b e e e e 2 e 
            e e e 2 2 e 2 2 2 2 e e 3 3 e e 
            e e e e e e e e e e e e e 3 3 e 
            e e e e e e e e e e e e e e e e 
            e e f f f e e e e f f f e e e e 
            . f b f f f e e f b f f f e e . 
            . . b b c . . . . b b c . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(car, sprites.vehicle.roadHorizontal)
        car.setVelocity(50, 0)
        car.x = 200
        ThePlayer.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
