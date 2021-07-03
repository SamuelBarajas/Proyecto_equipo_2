@extends('layouts.app')

@section('content')

	<head>
		<meta charset=utf-8>
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<title>Avionsitos</title>
		<link rel="stylesheet" href="/static/Proyecto-final-master/css/style.css">
	</head>

	<body>
		<div id="scoreboard"><img id="corazon" src="/static/Proyecto-final-master/assets/textures/corazones/3.png">  VIDAS: 3  PUNTOS: 0</div>
		<div id="gameover"></div>
		<canvas id="canvas"></canvas>

	    <!-- CDN Link to Three.js -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js"></script>
		<script src="https://unpkg.com/three@0.87.0/examples/js/loaders/OBJLoader.js"> </script>
		<script src="https://unpkg.com/three@0.87.0/examples/js/loaders/GLTFLoader.js"> </script>

	    <!-- Link all other js files below -->
	    <script src="/static/Proyecto-final-master/js/destroyMissiles.js"></script>
	    <script src="/static/Proyecto-final-master/js/checkCollision.js"></script>
	    <script src="/static/Proyecto-final-master/js/components/Coin.js"></script>
	    <script src="/static/Proyecto-final-master/js/placeCoins.js"></script>
	    <script src="/static/Proyecto-final-master/js/components/Enemy.js"></script>
	    <script src="/static/Proyecto-final-master/js/placeEnemies.js"></script>
	    <script src="/static/Proyecto-final-master/js/components/Missile.js"></script>
	    <script src="/static/Proyecto-final-master/js/components/Background.js"></script>
	    <script src="/static/Proyecto-final-master/js/components/Spaceship.js"></script>
	    <script src="/static/Proyecto-final-master/js/SceneManager.js"></script>
	    <script src="/static/Proyecto-final-master/js/main.js"></script>

	</body>

     
        @endsection

