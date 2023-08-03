// priority: 1

onEvent('recipes', event => {
    event.replaceInput({}, 'create:raw_zinc', 'kubejs:raw_zinc')
    event.replaceOutput({}, 'create:raw_zinc', 'kubejs:raw_zinc')
    event.replaceInput({}, 'create:zinc_ore', 'kubejs:zinc_ore')
    event.replaceOutput({}, 'create:zinc_ore', 'kubejs:zinc_ore')
    event.remove({input: 'create:deepslate_zinc_ore'})
    event.remove({input: 'create:zinc_nugget'})

    var zinc = [ 'create:raw_zinc', 'create:zinc_ingot', 'create:zinc_nugget', 'create:zinc_ore', 'create:deepslate_zinc_ore', 'create:raw_zinc_block', 'create:zinc_block',
        'create:copper_sheet', 'create:brass_sheet', 'create:iron_sheet', 'create:golden_sheet', 'createaddition:zinc_sheet' ]
    zinc.forEach(element => {
        event.remove({output: element})
        event.remove({input: element})
    });
})