// Create a plane, add texture to it, position it and then add to the scene

function Background(scene, height) {

	var geometry = new THREE.PlaneGeometry(2000, 30000);

	const textureLoader = new THREE.TextureLoader();
	var material = new THREE.MeshBasicMaterial({ map: textureLoader.load("/static/Proyecto-final-master/assets/textures/bg.png")});
	var bg = new THREE.Mesh(geometry, material);

	bg.position.z = -900;
	bg.position.y = 1000;

	scene.add(bg);

	this.update = function() {

	}

}
