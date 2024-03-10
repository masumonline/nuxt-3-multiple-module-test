<script setup lang="ts">
import {
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TextureLoader,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  MathUtils,
} from "three";

const container = ref();

const props = defineProps({
  panoramaUrl: {
    type: String,
  },
});

let camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer;
let isUserInteracting = false,
  onPointerDownMouseX = 0,
  onPointerDownMouseY = 0,
  lon = 0,
  onPointerDownLon = 0,
  lat = 0,
  onPointerDownLat = 0,
  phi = 0,
  theta = 0;

camera = new PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  1,
  1100,
);
scene = new Scene();
const geometry = new SphereGeometry(1000, 100, 100);
const reader = new FileReader();

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const onPointerDown = (event: {
  isPrimary: boolean;
  clientX: number;
  clientY: number;
}) => {
  if (event.isPrimary === false) return;
  isUserInteracting = true;
  onPointerDownMouseX = event.clientX;
  onPointerDownMouseY = event.clientY;
  onPointerDownLon = lon;
  onPointerDownLat = lat;
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
};

const onPointerMove = (event: {
  isPrimary: boolean;
  clientX: number;
  clientY: number;
}) => {
  if (event.isPrimary === false) return;
  lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
  lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
};

const onPointerUp = () => {
  if (event.isPrimary === false) return;
  isUserInteracting = false;
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
};

const onDocumentMouseWheel = (event: { deltaY: number }) => {
  const fov = camera.fov + event.deltaY * 0.05;
  camera.fov = MathUtils.clamp(fov, 10, 75);
  camera.updateProjectionMatrix();
};

const animate = () => {
  requestAnimationFrame(animate);
  update();
};

const update = () => {
  if (isUserInteracting === false) {
    lon += 0.1;
  }

  lat = Math.max(-85, Math.min(85, lat));
  phi = MathUtils.degToRad(90 - lat);
  theta = MathUtils.degToRad(lon);
  const x = 500 * Math.sin(phi) * Math.cos(theta);
  const y = 500 * Math.cos(phi);
  const z = 500 * Math.sin(phi) * Math.sin(theta);
  camera.lookAt(x, y, z);
  renderer.render(scene, camera);
};

const dragover = (event: {
  preventDefault: () => void;
  dataTransfer: { dropEffect: string };
}) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
};

const dragenter = () => {
  document.body.style.opacity = 0.5;
};

const dragleave = () => {
  document.body.style.opacity = 1;
};

const load1 = (event: { target: { result: any } }) => {
  material.map.image.src = event.target.result;
  material.map.needsUpdate = true;
};

const drop = () => {
  event.preventDefault();
  reader.addEventListener("load", load1);
  reader.readAsDataURL(event.dataTransfer.files[0]);
  document.body.style.opacity = 1;
};

onMounted(() => {
  init();
  animate();

  function init() {
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);
    const texture = new TextureLoader().load(props.panoramaUrl);
    const material = new MeshBasicMaterial({ map: texture });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    renderer = new WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value.appendChild(renderer.domElement);
    container.value.style.touchAction = "none";
    container.value.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("wheel", onDocumentMouseWheel);
    document.addEventListener("dragover", dragover);
    document.addEventListener("dragenter", dragenter);
    document.addEventListener("dragleave", dragleave);
    document.addEventListener("drop", drop);
    window.addEventListener("resize", onWindowResize);
  }
});

onUnmounted(() => {
  reader.removeEventListener("load", load1);
  // container.value.replaceWith(container.value.cloneNode(true));
  document.removeEventListener("wheel", onDocumentMouseWheel);
  document.removeEventListener("dragover", dragover);
  document.removeEventListener("dragenter", dragenter);
  document.removeEventListener("dragleave", dragleave);
  document.removeEventListener("drop", drop);
  window.removeEventListener("resize", onWindowResize);
});
</script>

<template>
  <div class="h-[800px] w-full max-w-full overflow-hidden">
    <div ref="container"></div>
  </div>
</template>
