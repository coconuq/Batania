// priority: 1

onEvent('block.registry', event => {
	var ores = [ 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Platinum', 'Silver', 'Aquamarine', 'Sapphire', 'Jasper', 'Topaz', 'Peridot', 'Garnet', 'Onyx', 'Amber', 'Tourmaline', 'Ruby', 'Jade',
		'Tanzanite', 'Opal', 'Citrine' ]
	ores.forEach(element => {
		event.create(element.toLowerCase() + '_ore')
			.material('stone')
			.hardness(3.0)
			.resistance(3.0)
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_iron_tool')
			.requiresTool(true)
			.displayName(element + ' Ore')
			.tagBoth('forge:ores')
			.tagBoth('forge:ores/' + element.toLowerCase())
	});
})
