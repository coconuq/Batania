// priority: 2

onEvent('recipes', event => {
    event.remove({id: 'beyond_earth:desh_plate'})
    event.remove({id: 'beyond_earth:iron_plate'})
})