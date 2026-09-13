import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberMotionCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020712, 0.022);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 2, 28);

    // --- 2. WebGL Renderer ---
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // fully transparent background so CSS gradients show through
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- 3. Interactive Mouse Parallax ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- 4. Lights ---
    const ambientLight = new THREE.AmbientLight(0x0044aa, 1.8);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00eaff, 3, 60);
    cyanPointLight.position.set(-15, 12, 10);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x2563eb, 4, 70);
    bluePointLight.position.set(18, -8, 5);
    scene.add(bluePointLight);

    // --- 5. Moving Holographic Tech Frames (16:9 Glass Screens & Wireframe Cubes) ---
    const framesGroup = new THREE.Group();
    scene.add(framesGroup);

    const frameObjects = [];

    // Colors: Electric Cyan, Neon Sky Blue, Royal Sapphire, Platinum Blue
    const frameColors = [0x00eaff, 0x38bdf8, 0x0070f3, 0x60a5fa, 0x00f5d4];

    // Helper: Create a 16:9 Floating Hologram Tech Frame
    const createHoloScreenFrame = (width, height, color) => {
      const group = new THREE.Group();

      // Semi-transparent holographic glass pane
      const planeGeo = new THREE.PlaneGeometry(width, height);
      const planeMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.045,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const planeMesh = new THREE.Mesh(planeGeo, planeMat);
      group.add(planeMesh);

      // Glowing outer border frame
      const edges = new THREE.EdgesGeometry(planeGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.75,
      });
      const frameLine = new THREE.LineSegments(edges, lineMat);
      group.add(frameLine);

      // Tech corner brackets / ticks on the frame
      const cornerSize = width * 0.18;
      const cornerGeo = new THREE.BufferGeometry();
      const cornerVerts = [];
      const halfW = width / 2;
      const halfH = height / 2;

      // Top-Left corner
      cornerVerts.push(
        -halfW, halfH - cornerSize, 0.02,
        -halfW, halfH, 0.02,
        -halfW, halfH, 0.02,
        -halfW + cornerSize, halfH, 0.02
      );
      // Top-Right corner
      cornerVerts.push(
        halfW - cornerSize, halfH, 0.02,
        halfW, halfH, 0.02,
        halfW, halfH, 0.02,
        halfW, halfH - cornerSize, 0.02
      );
      // Bottom-Left corner
      cornerVerts.push(
        -halfW, -halfH + cornerSize, 0.02,
        -halfW, -halfH, 0.02,
        -halfW, -halfH, 0.02,
        -halfW + cornerSize, -halfH, 0.02
      );
      // Bottom-Right corner
      cornerVerts.push(
        halfW - cornerSize, -halfH, 0.02,
        halfW, -halfH, 0.02,
        halfW, -halfH, 0.02,
        halfW, -halfH + cornerSize, 0.02
      );

      cornerGeo.setAttribute('position', new THREE.Float32BufferAttribute(cornerVerts, 3));
      const cornerMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.95,
      });
      const corners = new THREE.LineSegments(cornerGeo, cornerMat);
      group.add(corners);

      // Horizontal tech scanner line inside the screen
      const scanLineGeo = new THREE.BufferGeometry();
      scanLineGeo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute([-halfW + 0.1, 0, 0.03, halfW - 0.1, 0, 0.03], 3)
      );
      const scanLineMat = new THREE.LineBasicMaterial({
        color: 0x00eaff,
        transparent: true,
        opacity: 0.8,
      });
      const scanLine = new THREE.LineSegments(scanLineGeo, scanLineMat);
      group.add(scanLine);

      return { group, scanLine, halfH };
    };

    // Helper: Create a 3D Wireframe Geometric Polyhedron Frame
    const createWirePolyFrame = (radius, color, type = 'octahedron') => {
      const group = new THREE.Group();
      let geo;
      if (type === 'octahedron') {
        geo = new THREE.OctahedronGeometry(radius);
      } else if (type === 'icosahedron') {
        geo = new THREE.IcosahedronGeometry(radius);
      } else {
        geo = new THREE.BoxGeometry(radius, radius, radius);
      }

      const edges = new THREE.EdgesGeometry(geo);
      const lineMat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });
      const lines = new THREE.LineSegments(edges, lineMat);
      group.add(lines);

      return { group, scanLine: null, halfH: radius };
    };

    // Instantiate 14 floating frames with diverse sizes, positions, and drift speeds
    for (let i = 0; i < 14; i++) {
      const color = frameColors[i % frameColors.length];
      let frameObj;

      if (i % 3 === 0) {
        // Floating 16:9 Screen Frames (large and medium)
        const w = 4.5 + Math.random() * 3.5;
        const h = w * 0.58;
        frameObj = createHoloScreenFrame(w, h, color);
      } else if (i % 3 === 1) {
        // 3D Octahedron Wireframes
        frameObj = createWirePolyFrame(2.2 + Math.random() * 2, color, 'octahedron');
      } else {
        // 3D Cyber Cube Frames
        frameObj = createWirePolyFrame(2.5 + Math.random() * 2, color, 'box');
      }

      // Initial distributed coordinates
      const angle = (i / 14) * Math.PI * 2;
      const radius = 14 + Math.random() * 12;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 22;
      const z = -15 + Math.random() * 25;

      frameObj.group.position.set(x, y, z);
      frameObj.group.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      framesGroup.add(frameObj.group);

      frameObjects.push({
        ...frameObj,
        baseX: x,
        baseY: y,
        baseZ: z,
        rotSpeedX: (Math.random() - 0.5) * 0.006,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        rotSpeedZ: (Math.random() - 0.5) * 0.005,
        floatSpeed: 0.6 + Math.random() * 0.8,
        floatPhase: Math.random() * Math.PI * 2,
        scanSpeed: 1.5 + Math.random() * 2,
      });
    }

    // --- 6. Flowing Cyber Grid Wave Floor ---
    const gridCols = 54;
    const gridRows = 54;
    const gridGeo = new THREE.PlaneGeometry(110, 110, gridCols, gridRows);
    gridGeo.rotateX(-Math.PI / 2);

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x0070f3,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.position.y = -13;
    gridMesh.position.z = -15;
    scene.add(gridMesh);

    const posAttr = gridGeo.attributes.position;
    const originalY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      originalY[i] = posAttr.getY(i);
    }

    // --- 7. Floating Cosmic Cyber Particles (750 points) ---
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color(0x00eaff);
    const colorB = new THREE.Color(0x38bdf8);
    const colorC = new THREE.Color(0x2563eb);
    const palette = [colorA, colorB, colorC];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 90;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = chosen.r;
      particleColors[i * 3 + 1] = chosen.g;
      particleColors[i * 3 + 2] = chosen.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 8. Animation Loop with Smooth Drift & Wave Dynamics ---
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera interpolation toward mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      camera.position.x = mouse.x * 3.5;
      camera.position.y = 2 + mouse.y * 2.2;
      camera.lookAt(0, 0, -5);

      // Rotate and float moving holographic frames
      for (let i = 0; i < frameObjects.length; i++) {
        const item = frameObjects[i];
        item.group.rotation.x += item.rotSpeedX;
        item.group.rotation.y += item.rotSpeedY;
        item.group.rotation.z += item.rotSpeedZ;

        // Gentle sinusoidal floating motion
        const floatY = Math.sin(elapsedTime * item.floatSpeed + item.floatPhase) * 1.5;
        item.group.position.y = item.baseY + floatY;

        // Animate internal scan lines on screen frames
        if (item.scanLine) {
          const scanY =
            Math.sin(elapsedTime * item.scanSpeed + item.floatPhase) * (item.halfH * 0.85);
          item.scanLine.position.y = scanY;
        }
      }

      // Dynamic undulating cyber grid terrain
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);
        const wave =
          Math.sin(x * 0.12 + elapsedTime * 1.6) * 1.6 +
          Math.cos(z * 0.14 + elapsedTime * 1.2) * 1.4;
        posAttr.setY(i, originalY[i] + wave);
      }
      posAttr.needsUpdate = true;

      // Slow particle field drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- 9. Window Resize Handling ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // --- 10. Clean Up ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="cyber-motion-canvas-layer" />;
};

export default CyberMotionCanvas;
