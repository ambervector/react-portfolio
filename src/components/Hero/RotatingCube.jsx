import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const RotatingCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Load textures
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load("../../images/FB_IMG_1572607249818.jpg");
    const texture2 = loader.load("../../images/FB_IMG_1572607249818.jpg");
    const texture3 = loader.load("../../images/FB_IMG_1572607249818.jpg");
    const texture4 = loader.load("../../images/FB_IMG_1572607249818.jpg");
    const texture5 = loader.load("../../images/FB_IMG_1572607249818.jpg");
    const texture6 = loader.load("../../images/FB_IMG_1572607249818.jpg");

    // Create an array of materials for each face of the cube
    const materials = [
      new THREE.MeshBasicMaterial({ map: texture1 }),
      new THREE.MeshBasicMaterial({ map: texture2 }),
      new THREE.MeshBasicMaterial({ map: texture3 }),
      new THREE.MeshBasicMaterial({ map: texture4 }),
      new THREE.MeshBasicMaterial({ map: texture5 }),
      new THREE.MeshBasicMaterial({ map: texture6 }),
    ];

    // Create a cube and apply the materials
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default RotatingCube;
