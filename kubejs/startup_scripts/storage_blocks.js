// priority: 1

onEvent('block.registry', event => {
	var blocks = [ 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Platinum', 'Silver', 'Iridium' ]
	blocks.forEach(element => {
		event.create(element.toLowerCase() + '_block')
			.material('metal')
			.hardness(5.0)
			.resistance(6.0)
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_iron_tool')
			.requiresTool(true)
			.displayName(element + ' Block')
			.tagBoth('forge:storage_blocks')
			.tagBoth('forge:storage_blocks/' + element.toLowerCase())
	});
})
