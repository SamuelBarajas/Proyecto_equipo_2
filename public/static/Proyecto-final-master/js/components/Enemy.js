
function Enemy(scene, x, y) {

	var modelLoader = new THREE.GLTFLoader();
	this.model;
	this.height;
	this.width;

	modelLoader.load
		(
			"/static/Proyecto-final-master/assets/models/enemy/scene.gltf",
			( function(obj) {
				this.model = obj.scene;

				this.model.rotation.x = Math.PI / 2;
				//this.model.rotation.y = -Math.PI / 2;

				this.model.position.set(x, y, -100);
				this.model.scale.set(3,3,3);

				scene.add(this.model);
				var enemyBndBox = new THREE.Box3().setFromObject(this.model);
				this.height = enemyBndBox.getSize().y;
				this.width = enemyBndBox.getSize().x;
			}).bind(this)
		)

	this.destroy = function() {
		scene.remove(this.model);
	}
}
