// priority: 1

onEvent('item.registry', event => {
	var plates = [ 'Copper', 'Gold', 'Tin', 'Osmium', 'Lead', 'Cobalt', 'Ostrum', 'Calorite', 'Draconium', 'Awakened Draconium', 'Netherite', 'Manasteel', 'Terrasteel', 'Elementium', 'Alfsteel', 'Bronze',
		'Steel', 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Platinum', 'Silver', 'Iridium' ]
	plates.forEach(element => {
		event.create(element.replace(" ", "_").replace(" ", "_").toLowerCase() + '_plate')
			.tag('forge:plates')
			.tag('forge:plates/' + element.replace(" ", "_").replace(" ", "_").toLowerCase())
			.displayName(element + ' Plate')
	});
})
