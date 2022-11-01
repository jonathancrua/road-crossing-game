// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0e001800000000000000040004000000000000000000000004000400000000000101010101010207030101010101050606060606060006060606060600000000000000000000000000000101010101010101010101010101050606060606060606060606060600000000000000000000000000000101010101010101010101010101050606060606060606060606060600000000000000000000000000000101010101010101010101010101050606060606060606060606060600000000000000000000000000000101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
..............
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
