// priority: 2
settings.logAddedRecipes = true

// Plates
onEvent('recipes', event => {
    var plateCreatePressing = [ 'iron', 'copper', 'gold', 'cobalt', 'desh', 'ostrum', 'calorite', 'tin', 'osmium', 'lead', 'draconium', 'awakened_draconium', 'manasteel', 'elementium', 'terrasteel', 'alfsteel',
        'titanium', 'zinc', 'nickel', 'aluminum', 'silver', 'platinum', 'iridium', 'steel', 'bronze' ]
        plateCreatePressing.forEach(element => {
        event.recipes.create.pressing('#forge:plates/' + element, '#forge:ingots/' + element)
    });

    event.recipes.tconstruct.casting_table('#forge:plates/awakened_draconium', 'materialis:molten_draconium_awakened', 90)
        .cast('#tconstruct:casts/multi_use/plate')
    event.recipes.tconstruct.casting_table('#forge:plates/titanium', 'kubejs:molten_titanium', 90)
        .cast('#tconstruct:casts/multi_use/plate')
    event.recipes.tconstruct.casting_table('#forge:plates/iridium', 'kubejs:molten_iridium', 90)
        .cast('#tconstruct:casts/multi_use/plate')
    event.recipes.tconstruct.casting_table('#forge:plates/awakened_draconium', 'materialis:molten_draconium_awakened', 90)
        .cast('#tconstruct:casts/single_use/plate')
        .consumeCast()
    event.recipes.tconstruct.casting_table('#forge:plates/titanium', 'kubejs:molten_titanium', 90)
        .cast('#tconstruct:casts/single_use/plate')
        .consumeCast()
    event.recipes.tconstruct.casting_table('#forge:plates/iridium', 'kubejs:molten_iridium', 90)
        .cast('#tconstruct:casts/single_use/plate')
        .consumeCast()
})

// Custom Fluids to Tinkers Smeltery
onEvent('recipes', event => {
    var customFluidsToTinkersSmeltery = [ 'titanium', 'iridium' ]
    customFluidsToTinkersSmeltery.forEach(element => {
        // Smelting
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:ingots/' + element
            },
            result: {
                fluid: 'kubejs:molten_' + element,
                amount: 90
            },
            temperature: 400,
            time: 43
        })
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:plates/' + element
            },
            result: {
                fluid: 'kubejs:molten_' + element,
                amount: 90
            },
            temperature: 400,
            time: 43
        })
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:dusts/' + element
            },
            result: {
                fluid: 'kubejs:molten_' + element,
                amount: 90
            },
            temperature: 400,
            time: 33
        })
        event.custom({
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:storage_blocks/' + element
            },
            result: {
                fluid: 'kubejs:molten_' + element,
                amount: 810
            },
            temperature: 400,
            time: 130
        })
        // Casting
        event.recipes.tconstruct.casting_basin('kubejs:' + element + '_block', 'kubejs:molten_' + element)
        event.recipes.tconstruct.casting_table('kubejs:' + element + '_ingot', 'kubejs:molten_' + element)
            .cast('#tconstruct:casts/multi_use/ingot')
        event.recipes.tconstruct.casting_table('kubejs:' + element + '_ingot', 'kubejs:molten_' + element)
            .cast('#tconstruct:casts/single_use/ingot')
            .consumeCast()
    });
    event.custom({
        type: 'tconstruct:ore_melting',
        rate: 'metal',
        ingredient: {
            tag: 'forge:ores/titanium'
        },
        result: {
            fluid: 'kubejs:molten_titanium',
            amount: 180
        },
        temperature: 400,
        time: 109,
        byproducts: [{
            fluid: 'kubejs:molten_iridium',
            amount: 90
        }]
    })
    event.custom({
        type: 'tconstruct:ore_melting',
        rate: 'metal',
        ingredient: {
            tag: 'forge:raw_materials/titanium'
        },
        result: {
            fluid: 'kubejs:molten_titanium',
            amount: 90
        },
        temperature: 400,
        time: 65,
        byproducts: [{
            fluid: 'kubejs:molten_iridium',
            amount: 45
        }]
    })
})

// Ores in Furnace
onEvent('recipes', event => {
    let MultiSmelt = (item_output, item_input) => {
        event.smelting(item_output, item_input)
            .xp(1.0)
        event.blasting(item_output, item_input)
            .xp(1.0)
    }

    var metalOres = [ 'titanium', 'zinc', 'nickel', 'aluminum', 'silver' ]
    var gemOres = [ 'aquamarine', 'sapphire', 'jasper', 'topaz', 'peridot', 'garnet', 'onyx', 'amber', 'tourmaline', 'ruby', 'jade',
        'tanzanite', 'opal', 'citrine' ]
    var rawOres = [ 'titanium', 'zinc', 'nickel', 'aluminum', 'silver' ]
    metalOres.forEach(element => {
        MultiSmelt('kubejs:' + element + '_ingot', '#forge:ores/' + element)
    });
    gemOres.forEach(element => {
        MultiSmelt('kubejs:' + element, '#forge:ores/' + element)
    });
    rawOres.forEach(element => {
        MultiSmelt('kubejs:' + element + '_ingot', '#forge:raw_materials/' + element)
    });
})
