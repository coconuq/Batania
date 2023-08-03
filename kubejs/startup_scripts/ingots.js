// priority: 1

onEvent('item.registry', event => {
	var ingots = [ 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Platinum', 'Silver', 'Iridium', 'Conductive Iron', 'Construction Alloy', 'Crude Steel', 'Crystalline Alloy', 'Crystalline Pink Slime',
		'Dark Steel', 'Electrical Steel', 'End Steel', 'Energetic Alloy', 'Energetic Silver', 'Melodic Alloy', 'Pulsating Iron', 'Redstone Alloy', 'Soularium', 'Stellar Alloy', 'Vibrant Alloy', 'Vivid Alloy' ]
	ingots.forEach(element => {
		event.create(element.replace(" ", "_").replace(" ", "_").toLowerCase() + '_ingot')
			.tag('forge:ingots')
			.tag('forge:ingots/' + element.replace(" ", "_").replace(" ", "_").toLowerCase())
			.displayName(element + ' Ingot')
	});
})
