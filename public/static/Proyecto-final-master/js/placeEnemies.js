
function placeEnemies(scene) {
	var n = 28;
	const theEnemies = [];

	[...Array(n).keys()].map(y => {

		getRandomPositions().map(x => {
			const e = new Enemy(scene, 200*(x-4), 500*(y+1));
			theEnemies.push(e);
		});
	});
	return theEnemies;

	function getRandomPositions() {

		var noEnemies = Math.floor((Math.random() * 25));

		var arr = [...Array(8).keys()];

		for (let i = arr.length - 1; i > 0; i--) {

		    const j = Math.floor(Math.random() * i);
		    const temp = arr[i];
		    arr[i] = arr[j];
		    arr[j] = temp;
		}

		return arr.slice(0, noEnemies);
    }


}
