onEvent("recipes", event => {
    event.remove({type: 'botania:orechid'})

    var ores = [ 'minecraft:gold_ore', 'minecraft:redstone_ore', 'minecraft:lapis_ore', 'mekanism:osmium_ore', 'mekanism:fluorite_ore', 'mekanism:lead_ore', 'ae2:quartz_ore', 'kubejs:zinc_ore',
        'kubejs:nickel_ore', 'kubejs:aluminum_ore', 'kubejs:silver_ore', 'kubejs:aquamarine_ore', 'kubejs:sapphire_ore', 'kubejs:jasper_ore', 'kubejs:topaz_ore', 'kubejs:peridot_ore', 'kubejs:garnet_ore',
        'kubejs:onyx_ore', 'kubejs:amber_ore', 'kubejs:tourmaline_ore', 'kubejs:ruby_ore', 'kubejs:jade_ore', 'kubejs:tanzanite_ore', 'kubejs:opal_ore', 'kubejs:citrine_ore' ]
    var rareOres = [ 'minecraft:emerald_ore', 'minecraft:diamond_ore', 'mekanism:uranium_ore', 'kubejs:titanium_ore', 'kubejs:platinum_ore' ]
    var commonOres = [ 'minecraft:coal_ore', 'minecraft:iron_ore', 'minecraft:copper_ore', 'mekanism:tin_ore' ]
    ores.forEach(element => {
        event.recipes.botania.orechid(element, 'minecraft:smooth_stone', 4000)
    });
    rareOres.forEach(element => {
        event.recipes.botania.orechid(element, 'minecraft:smooth_stone', 1000)
    });
    commonOres.forEach(element => {
        event.recipes.botania.orechid(element, 'minecraft:smooth_stone', 15000)
    });
})
