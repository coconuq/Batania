var ores = [ 'titanium', 'zinc', 'nickel', 'aluminum', 'platinum', 'silver' ]
var gemOres = [ 'aquamarine', 'sapphire', 'jasper', 'topaz', 'peridot', 'garnet', 'onyx', 'amber', 'tourmaline', 'ruby', 'jade', 'tanzanite', 'opal', 'citrine' ]

onEvent('block.loot_tables', event => {
    ores.forEach(element => {
        event.addBlock('kubejs:' + element + '_ore', table => {
            table.addPool(pool => {
                pool.rolls = 1
                pool.survivesExplosion()
                pool.addEntry({
                    "type": "minecraft:alternatives",
                    "children": [{
                        "type": "minecraft:item",
                        "name": "kubejs:" + element + "_ore",
                        "conditions": [
                        {
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [{
                                    "enchantment": "minecraft:silk_touch",
                                    "levels": 1
                                }]
                            }
                        }]
                    },
                    {
                        "type": "minecraft:item",
                        "name": "kubejs:raw_" + element,
                        "functions": [{
                            "function": "minecraft:explosion_decay"
                        },
                        {
                            "function": "minecraft:apply_bonus",
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops"
                        }]
                    }]
                })
            })
        })
    });
    gemOres.forEach(element => {
        event.addBlock('kubejs:' + element + '_ore', table => {
            table.addPool(pool => {
                pool.rolls = 1
                pool.survivesExplosion()
                pool.addEntry({
                    "type": "minecraft:alternatives",
                    "children": [{
                        "type": "minecraft:item",
                        "name": "kubejs:" + element + "_ore",
                        "conditions": [
                        {
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [{
                                    "enchantment": "minecraft:silk_touch",
                                    "levels": 1
                                }]
                            }
                        }]
                    },
                    {
                        "type": "minecraft:item",
                        "name": "kubejs:" + element,
                        "functions": [{
                            "function": "minecraft:explosion_decay"
                        },
                        {
                            "function": "minecraft:apply_bonus",
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops"
                        }]
                    }]
                })
            })
        })
    });
})