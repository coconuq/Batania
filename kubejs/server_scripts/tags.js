// priority: 1

onEvent('item.tags', event => {
    event.add('forge:gems', 'minecraft:coal')
    event.add('forge:gems/coal', 'minecraft:coal')

    event.remove('forge:plates', 'create:copper_sheet')
    event.remove('forge:plates/copper', 'create:copper_sheet')

    event.remove('forge:plates', 'create:brass_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')

    event.remove('forge:plates', 'create:iron_sheet')
    event.remove('forge:plates/iron', 'create:iron_sheet')

    event.remove('forge:plates', 'create:golden_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')

    event.remove('forge:plates', 'createaddition:zinc_sheet')
    event.remove('forge:plates/zinc', 'createaddition:zinc_sheet')

    event.remove('forge:ingots', 'create:zinc_ingot')
    event.remove('forge:ingots/zinc', 'create:zinc_ingot')
    event.remove('create:create_ingots', 'create:zinc_ingot')
    event.remove('minecraft:beacon_payment_items', 'create:zinc_ingot')

    event.remove('forge:raw_materials', 'create:raw_zinc')
    event.remove('forge:raw_materials/zinc', 'create:raw_zinc')

    event.remove('forge:storage_blocks', 'create:zinc_block')
    event.remove('forge:storage_blocks/zinc', 'create:zinc_block')

    event.remove('forge:ores', 'create:zinc_ore')
    event.remove('forge:ores/zinc', 'create:zinc_ore')
    event.remove('forge:ores_in_ground/stone', 'create:zinc_ore')

    event.remove('forge:ores', 'create:deepslate_zinc_ore')
    event.remove('forge:ores/zinc', 'create:deepslate_zinc_ore')
    event.remove('forge:ores_in_ground/deepslate', 'create:deepslate_zinc_ore')

    event.remove('forge:ingots/draconium_awakened', 'draconicevolution:awakened_draconium_ingot')
    event.add('forge:ingots/awakened_draconium', 'draconicevolution:awakened_draconium_ingot')
})