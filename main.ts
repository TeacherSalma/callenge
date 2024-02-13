let randomNumber = 0
blocks.onBlockBroken(GRASS, function () {
    randomNumber = randint(1, 10)
    if (randomNumber == 1) {
        mobs.spawn(HORSE, pos(0, 0, 10))
    } else if (randomNumber == 2) {
        mobs.spawn(PIG, pos(0, 0, 10))
    }
})
function randomEffect () {
	
}
player.onTravelled(WALK, function () {
    blocks.place(blocks.blockById(6), pos(0, 0, 0))
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    loops.pause(30000)
    randomEffect()
})
