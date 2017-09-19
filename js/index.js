let scene,camera,renderer,controls,light;
let model;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 20000 );
    camera.position.set(0,150,400);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        antialias:true,
        preserveDrawingBuffer: true
    });
    renderer.setClearColor(0xffffff,1);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    light  = new THREE.PointLight(0xffffff);
    light.position.set(0,150,100);
    scene.add(light);

    let sphereGeom = new THREE.SphereGeometry(50,32,16);

    let darkMaterial = new THREE.MeshBasicMaterial({ color:0x000088 });
    let darkMaterialL = new THREE.MeshLambertMaterial({ color:0x000088 });
    let darkMaterialP = new THREE.MeshPhongMaterial({ color:0x000088 });

    let modelL = new THREE.Mesh(sphereGeom.clone(),darkMaterial);
    modelL.position.set(-150,50,0);
    scene.add(modelL);

    let modelM = new THREE.Mesh(sphereGeom.clone(),darkMaterialL);
    modelM.position.set(0,50,0);
    scene.add(modelM);

    let modelR = new THREE.Mesh(sphereGeom.clone(),darkMaterialP);
    modelR.position.set(150,50,0);
    scene.add(modelR);

    let lightbulb = new THREE.Mesh(
        new THREE.SphereGeometry( 10, 16, 8 ),
        new THREE.MeshBasicMaterial( { color: 0xffaa00 } )
    );
    lightbulb.position.set(0,150,100);
    scene.add( lightbulb );

    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.target.set(0,0,0);
    controls.enableDamping = true;
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene, camera);
    controls.update();
}

init();

animate();