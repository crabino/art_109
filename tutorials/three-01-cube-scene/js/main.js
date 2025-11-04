// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene



//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models
let scene, camera, renderer, cube;

function init() {

 scene = new THREE.Scene();


//  const helper = new THREE.DirectionalLight(light, 5);
//  scene.add(helper);  
 camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({antialias: true} );
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);
 const controls = new OrbitControls(camera, renderer.domElement);
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
// const material = new THREE.MeshBasicMaterial({ map:texture });
//  cube = new THREE.
// Mesh(geometry, material);
// scene.add(cube);
 const light = new THREE.DirectionalLight(0xffffff, 5);
 light.position.set(1,4,5);
    scene.add(light);

    const loader = new GLTFLoader();
loader.load('assets/guy.gltf', function(gltf){
    const chibi = gltf.scene;
    scene.add(chibi);
    chibi.scale.set(1,1,1);
});


camera.position.z = 5;
}

// ~~~~~~~~~~~~~~~~Set up scene, camera, + renderer~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~


// const loader = new GLTFLoader(); // to load 3d models



// ~~~~~~~~~~~~~~~~ Create Geometry ~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~Position Camera~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    // camera.position.z += .03;
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;



    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);
init();
animate(); // execute animation function
