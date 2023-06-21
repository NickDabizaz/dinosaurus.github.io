// Nama dan Nrp
// Nicklaus Dabizaz - 221116978
// Ramaditya Satriawan - 221116983

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";

let scene, camera, renderer, controls;

let mixer;
let clickableObject;
let isAnimationPlaying = false;
let gltfData;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(-12, 8, 0);

controls = new FirstPersonControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

const dino1Loader = new GLTFLoader();
dino1Loader.load("./asset/dino1/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(9, 1.7, -18);
  model.scale.set(4, 4, 4);
  scene.add(model);

  gltfData = gltf;
  clickableObject = model;
  mixer = new THREE.AnimationMixer(model);
  const action = mixer.clipAction(gltf.animations[1]);
  action.setLoop(THREE.LoopOnce);
  action.clampWhenFinished = true;
});

const dino2Loader = new GLTFLoader();
dino2Loader.load("./asset/dino2/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-9, 1.7, -14);
  model.scale.set(3.5, 3.5, 3.5);
  scene.add(model);
});

const dino3Loader = new GLTFLoader();
dino3Loader.load("./asset/dino3/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-9, 1.7, 13);
  model.scale.set(1, 1, 1);
  model.rotation.y = Math.PI;
  scene.add(model);
});

const dino4Loader = new GLTFLoader();
dino4Loader.load("./asset/dino4/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(9, 1.7, 13);
  model.scale.set(4, 4, 4);
  model.rotation.y = Math.PI;
  scene.add(model);
});

const dino5Loader = new GLTFLoader();
dino5Loader.load("./asset/dino7/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-21, 3.5, -2.5);
  model.scale.set(3, 3, 3);
  model.rotation.y = Math.PI / 2;
  scene.add(model);
});

const jalan = new GLTFLoader();
jalan.load("./asset/jalan_bebatuan/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-6.5, -1, -1.6);
  model.scale.set(10.82, 10, 5.65);
  scene.add(model);
});

const atap = new GLTFLoader();
atap.load("./asset/roof/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-6.5, -1, -4.5);
  model.scale.set(2.7, 2, 2.2);
  scene.add(model);
});

const kandang = new GLTFLoader();
kandang.load("./asset/kandang/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-17, 1.7, 3);
  model.scale.set(5, 3, 5);
  scene.add(model);
});

const wall_besi = new GLTFLoader();
wall_besi.load("./asset/wall_dalam/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.scale.set(0.5, 1, 1);
  model.position.set(3, 1.5, -21.3);

  // Kandang Dino 1

  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.z += i * 2;
    clone.position.y += 0.2;
    scene.add(clone);
  }

  for (let i = 0; i < 3; i++) {
    const rotatedModel = model.clone();
    rotatedModel.rotation.y = Math.PI / 2;
    rotatedModel.position.y += 0.2;
    rotatedModel.position.z += 13;
    rotatedModel.position.x += i * 3 + 3;
    scene.add(rotatedModel);
  }

  //End Kandang Dino 1

  // Kandang Dino 2

  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.x -= 7;
    clone.position.y += 0.2;
    clone.position.z += i * 2;
    clone.rotation.y = (Math.PI / 2) * 2;
    scene.add(clone);
  }

  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.x -= 17;
    clone.position.y += 0.2;

    clone.position.z += i * 2;
    scene.add(clone);
  }

  for (let i = 0; i < 3; i++) {
    const rotatedModel = model.clone();
    rotatedModel.rotation.y = Math.PI / 2;
    rotatedModel.position.y += 0.2;

    rotatedModel.position.z += 13;
    if (i == 2) {
      rotatedModel.position.x += i * 2 - 14;
    } else {
      rotatedModel.position.x += i * 3 - 14;
    }
    scene.add(rotatedModel);
  }

  //End Kandang Dino 2

  // Kandang Dino 3
  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.x -= 7;
    clone.position.y += 0.2;
    clone.rotation.y = (Math.PI / 2) * 2;

    clone.position.z += i * 2 + 28.5;
    scene.add(clone);
  }

  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.x -= 17;
    clone.position.y += 0.2;

    clone.position.z += i * 2 + 28.5;
    scene.add(clone);
  }

  for (let i = 0; i < 3; i++) {
    const rotatedModel = model.clone();
    rotatedModel.rotation.y = Math.PI / 2 + Math.PI;
    rotatedModel.position.z += 25.5;
    rotatedModel.position.y += 0.2;

    if (i == 2) {
      rotatedModel.position.x += i * 2 - 14;
    } else {
      rotatedModel.position.x += i * 3 - 14;
    }
    scene.add(rotatedModel);
  }

  //End Kandang Dino 3

  // Kandang Dino 4

  for (let i = 0; i < 6; i++) {
    const clone = model.clone();
    clone.position.y += 0.2;

    clone.position.z += i * 2 + 28.5;
    scene.add(clone);
  }

  for (let i = 0; i < 3; i++) {
    const rotatedModel = model.clone();
    rotatedModel.rotation.y = Math.PI / 2 + Math.PI;
    rotatedModel.position.y += 0.2;

    rotatedModel.position.z += 25.5;
    rotatedModel.position.x += i * 3 + 3;
    scene.add(rotatedModel);
  }

  //End Kandang Dino 4
});

//depan kiri
const wall_luar = new GLTFLoader();
wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(14, 5.4, 3.9);
  model.scale.set(0.013, 0.031, 0.008);
  model.rotation.y = Math.PI / 2;
  scene.add(model);
});

for (let i = 0; i < 3; i++) {
  const wall_luar = new GLTFLoader();
  let positionOffset = i * 5; // Menghitung offset untuk setiap duplikat

  wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
    const model = gltf.scene;
    model.position.set(14, 5.4, 8 + positionOffset);
    model.scale.set(0.02, 0.031, 0.008);
    model.rotation.y = Math.PI / 2;
    scene.add(model);
  });
}

//sebelah kiri
for (let i = 0; i < 8; i++) {
  const wall_luar = new GLTFLoader();
  let positionOffset = i * 5; // Menghitung offset untuk setiap duplikat

  wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
    const model = gltf.scene;
    model.position.set(12.3 - positionOffset, 5.4, 19.465);
    model.scale.set(0.02, 0.031, 0.008);
    scene.add(model);
  });
}

const wall_luar2 = new GLTFLoader();
wall_luar2.load("./asset/wall_luar/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-26.58, 5.4, 19.465);
  model.scale.set(0.011, 0.031, 0.008);
  scene.add(model);
});

// belakang
for (let i = 0; i < 9; i++) {
  const wall_luar = new GLTFLoader();
  const positionOffset = i * 5; // Menghitung offset untuk setiap duplikat

  wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
    const model = gltf.scene;
    model.position.set(-27.15, 5.4, 18 - positionOffset); // Mengubah nilai parameter ketiga dengan pengurangan offset
    model.scale.set(0.02, 0.031, 0.008);
    model.rotation.y = -(Math.PI / 2);
    scene.add(model);
  });
}

//sebelah kanan
for (let i = 0; i < 8; i++) {
  const wall_luar = new GLTFLoader();
  let positionOffset = i * 5; // Menghitung offset untuk setiap duplikat

  wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
    const model = gltf.scene;
    model.position.set(12.3 - positionOffset, 5.4, -23.535);
    model.scale.set(0.02, 0.031, 0.008);
    model.rotation.y = -Math.PI;
    scene.add(model);
  });
}

const wall_luar3 = new GLTFLoader();
wall_luar3.load("./asset/wall_luar/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(-26.58, 5.4, -23.535);
  model.scale.set(0.011, 0.031, 0.008);
  model.rotation.y = -Math.PI;
  scene.add(model);
});

//depan kanan
for (let i = 0; i < 4; i++) {
  const wall_luar = new GLTFLoader();
  const positionOffset = i * 5; // Menghitung offset untuk setiap duplikat

  wall_luar.load("./asset/wall_luar/scene.gltf", function (gltf) {
    const model = gltf.scene;
    model.position.set(14, 5.4, -6.85 - positionOffset); // Mengubah nilai parameter ketiga dengan pengurangan offset
    model.scale.set(0.02, 0.031, 0.008);
    model.rotation.y = Math.PI / 2;
    scene.add(model);
  });
}

const gate_luar = new GLTFLoader();
gate_luar.load("./asset/gate_luar/scene.gltf", function (gltf) {
  const model = gltf.scene;
  model.position.set(15, 2, 0);
  model.scale.set(0.4, 0.4, 0.4);
  scene.add(model);
});

document.addEventListener("keydown", onDocumentKeyDown, false);
document.addEventListener("keyup", onDocumentKeyUp, false);

function playAnimation() {
  isAnimationPlaying = true;
  mixer.addEventListener("finished", function () {
    isAnimationPlaying = false;
  });
  mixer.timeScale = 1; // Atur kecepatan animasi (1 = normal)
  mixer.clipAction(gltfData.animations[1]).play(); // Gunakan gltfData.animations
}

// Event listener untuk klik pada objek yang dijadikan clickable
document.addEventListener("click", function (event) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Hitung koordinat mouse dalam koordinat dunia
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Cast ray dari kamera melalui koordinat mouse
  raycaster.setFromCamera(mouse, camera);

  // Dapatkan semua objek yang bertabrakan dengan raycaster
  const intersects = raycaster.intersectObject(clickableObject, true);

  if (intersects.length > 0) {
    console.log("Clicked");
    playAnimation();
  }
});

const clock = new THREE.Clock();
const keyboard = {};
controls.lookSpeed = 0.05;
function animate() {
  requestAnimationFrame(animate);
  if (mixer && isAnimationPlaying) {
    mixer.update(clock.getDelta());
  } else {
    controls.update(clock.getDelta());
  }

  const moveSpeed = 0.2; // Kecepatan gerakan kamera

  if (keyboard["KeyW"]) {
    controls.object.position.z -= moveSpeed;
  }

  if (keyboard["KeyS"]) {
    controls.object.position.z += moveSpeed;
  }

  if (keyboard["KeyA"]) {
    controls.object.position.x -= moveSpeed;
  }

  if (keyboard["KeyD"]) {
    controls.object.position.x += moveSpeed;
  }

  if (keyboard["KeyZ"]) {
    controls.object.position.y -= moveSpeed;
  }

  if (keyboard["Space"]) {
    controls.object.position.y += moveSpeed;
  }

  renderer.render(scene, camera);
}

function onDocumentKeyDown(event) {
  keyboard[event.code] = true;
}

function onDocumentKeyUp(event) {
  keyboard[event.code] = false;
}


window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
