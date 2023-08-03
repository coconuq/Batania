onEvent("recipes", event => {
    var empty = 'minecraft:barrier'
    var craftingTable = [ [ 'minecraft:chainmail_helmet', 'minecraft:leather_helmet', 'minecraft:iron_ingot', empty ],
                          [ 'minecraft:iron_helmet', 'minecraft:chainmail_helmet', '#forge:plates/iron', empty ],
                          [ 'botania:manasteel_helmet', 'minecraft:iron_helmet', '#forge:ingots/manasteel', 'botania:manaweave_helmet' ],
                          [ 'minecraft:chainmail_chestplate', 'minecraft:leather_chestplate', 'minecraft:iron_ingot', empty ],
                          [ 'minecraft:iron_chestplate', 'minecraft:chainmail_chestplate', '#forge:plates/iron', empty ],
                          [ 'botania:manasteel_chestplate', 'minecraft:iron_chestplate', '#forge:ingots/manasteel', 'botania:manaweave_chestplate' ],
                          [ 'minecraft:chainmail_leggings', 'minecraft:leather_leggings', 'minecraft:iron_ingot', empty ],
                          [ 'minecraft:iron_leggings', 'minecraft:chainmail_leggings', '#forge:plates/iron', empty ],
                          [ 'botania:manasteel_leggings', 'minecraft:iron_leggings', '#forge:ingots/manasteel', 'botania:manaweave_leggings' ],
                          [ 'minecraft:chainmail_boots', 'minecraft:leather_boots', 'minecraft:iron_ingot', empty ],
                          [ 'minecraft:iron_boots', 'minecraft:chainmail_boots', '#forge:plates/iron', empty ],
                          [ 'botania:manasteel_boots', 'minecraft:iron_boots', '#forge:ingots/manasteel', 'botania:manaweave_boots' ] ]
    craftingTable.forEach(element => {
        event.remove({output: element[0]})
        if(element[3] == empty) {
            event.shaped(Item.of(element[0], '{Damage:0}'), [
                ' B ',
                'BAB',
                ' B '
            ], {
                A: Item.of(element[1], '{Damage:0}'),
                B: element[2]
            })
        }
        else {
            event.shaped(Item.of(element[0], '{Damage:0}'), [
                ' C ',
                'CAC',
                ' B '
            ], {
                A: Item.of(element[1], '{Damage:0}'),
                B: element[3],
                C: element[2]
            })
        }
    });
})
