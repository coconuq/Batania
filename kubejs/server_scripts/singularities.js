// priority: 2

var gemSing = [ [ 'kubejs:', 'coal'], [ 'kubejs:', 'fluorite'], [ 'kubejs:', 'certus_quartz'], [ 'kubejs:', 'aquamarine'], [ 'kubejs:', 'sapphire'], [ 'kubejs:', 'jasper'], [ 'kubejs:', 'topaz'],
    [ 'kubejs:', 'peridot'], [ 'kubejs:', 'garnet'], [ 'kubejs:', 'onyx'], [ 'kubejs:', 'amber'], [ 'kubejs:', 'tourmaline'], [ 'kubejs:', 'ruby'], [ 'kubejs:', 'jade'], [ 'kubejs:', 'tanzanite'],
    [ 'kubejs:', 'opal'], [ 'kubejs:', 'citrine'], [ 'avaritia:', 'emerald'], [ 'avaritia:', 'lapis'], [ 'avaritia:', 'diamond'], [ 'avaritia:', 'quartz'] ]
var metalSing = [ [ 'kubejs:', 'osmium'], [ 'kubejs:', 'uranium'], [ 'kubejs:', 'cobalt'], [ 'kubejs:', 'desh'], [ 'kubejs:', 'ostrum'], [ 'kubejs:', 'calorite'], [ 'kubejs:', 'draconium'],
    [ 'kubejs:', 'titanium'], [ 'kubejs:', 'zinc'], [ 'kubejs:', 'aluminum'], [ 'avaritia:', 'iron'], [ 'avaritia:', 'copper'], [ 'avaritia:', 'gold'], [ 'avaritia:', 'tin'], [ 'avaritia:', 'lead'],
    [ 'avaritia:', 'nickel'], [ 'avaritia:', 'silver'], [ 'avaritia:', 'platinum'], [ 'avaritia:', 'iridium'] ]
onEvent('recipes', event => {
    event.remove({output: /.*singularity.*/})

    gemSing.forEach(element => {
        event.custom({
            type: 'avaritia:compressor',
            result: {
                'item': element[0] + element[1] + '_singularity'
            },
            cost: 512,
            ingredients: [
                {
                    'tag': 'forge:gems/' + element[1]
                }
            ]
        })
    });
    
    metalSing.forEach(element => {
        event.custom({
            type: 'avaritia:compressor',
            result: {
                'item': element[0] + element[1] + '_singularity'
            },
            cost: 512,
            ingredients: [
                {
                    'tag': 'forge:ingots/' + element[1]
                }
            ]
        })
    });

    event.custom({
        type: 'avaritia:compressor',
        result: {
            'item': 'kubejs:coal_singularity'
        },
        cost: 512,
        ingredients: [
            {
                'tag': 'forge:gems/coal'
            }
        ]
    })

    event.custom({
        type: 'avaritia:compressor',
        result: {
            'item': 'avaritia:amethyst_singularity'
        },
        cost: 512,
        ingredients: [
            {
                'tag': 'forge:gems/amethyst'
            }
        ]
    })

    event.custom({
        type: 'avaritia:compressor',
        result: {
            'item': 'avaritia:redstone_singularity'
        },
        cost: 512,
        ingredients: [
            {
                'tag': 'forge:dusts/redstone'
            }
        ]
    })

    event.custom({
        type: 'avaritia:compressor',
        result: {
            'item': 'avaritia:netherite_singularity'
        },
        cost: 512,
        ingredients: [
            {
                'tag': 'forge:ingots/netherite_scrap'
            }
        ]
    })
})