// priority: 1

onEvent('item.registry', event => {
	event.create('module_applied')
		.displayName("AE Module")
})

onEvent('block.registry', event => {
	event.create('smooth_netherrack')
		.material('stone')
		.hardness(2.0)
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.displayName('Smooth Netherrack')
})
