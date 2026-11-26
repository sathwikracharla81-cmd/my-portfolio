/**
 * SATHWIK RACHARLA — INTERACTIVE 3D PORTFOLIO
 * Inspired by Bruno Simon | Original 3D Environment & Architecture
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. PORTFOLIO DATA (AUTHENTIC & COMPREHENSIVE)
     ========================================================================== */

  const PORTFOLIO_DATA = {
    profile: {
      name: "Sathwik Racharla",
      location: "Vemulawada, Telangana, India",
      education: "Computer Science and Engineering (CSE), Newton School of Technology",
      tagline: "Student at Newton School of Technology | Aspiring Developer & Backend Engineer",
      email: "sathwikracharla81@gmail.com",
      github: "https://github.com/sathwikracharla81-cmd",
      linkedin: "https://www.linkedin.com/in/sathwik-racharla-34354a32b/",
      academics: {
        class10: "9.7 CGPA (Government School)",
        class12: "978 / 1000",
        jeePercentile: "85.978 Percentile"
      }
    },

    skills: [
      { name: "Python", level: "Familiar", icon: "🐍", desc: "Core backend programming, data structures, algorithm implementation, and automation scripts." },
      { name: "Git & GitHub", level: "Familiar", icon: "🔀", desc: "Version control, git plumbing commands, branch orchestration, index inspection, and open-source workflows." },
      { name: "Backend Development", level: "Learning", icon: "⚙️", desc: "FastAPI REST services, request validation, state management, and client-server architecture." },
      { name: "Game Engine Logic", level: "Familiar", icon: "🎲", desc: "Deterministic game state transitions, rule execution pipelines, turn management, and board game mechanics." },
      { name: "Three.js & 3D Web", level: "Familiar", icon: "🌐", desc: "Procedural low-poly modeling, WebGL rendering, lighting, camera animation, and custom interactive physics." },
      { name: "Problem Solving", level: "Growing", icon: "🧠", desc: "Algorithmic thinking, test-driven validation, regression analysis, and debugging complex edge cases." },
      { name: "Linux & Shell", level: "Familiar", icon: "💻", desc: "macOS/Linux terminal environments, bash scripting, file permissions, and automated test execution." }
    ],

    // All 10 S&AI Pull Requests verified from GitHub API
    prs: [
      {
        taskId: "R46-T001",
        number: 91,
        title: "R46-T001: Prove what the template ignores",
        url: "https://github.com/S-AI-Projects/gitignore/pull/91",
        template: "Dart.gitignore",
        patterns: [".dart_tool/", ".packages", "build/"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T001",
        testResult: "14/14 checks passed",
        testCommand: "python3 work/R46-T001/check.py",
        description: "Documented and verified the existing ignore behavior of Dart.gitignore for generated Dart package metadata (.dart_tool/, .packages) and build output (build/). Added positive and negative fixtures without changing functional patterns.",
        whyItMattered: "Ensures developers working with Flutter and Dart do not accidentally commit heavy build artifacts and ephemeral package caches while verifying that legitimate source files remain tracked.",
        learning: "Deepened understanding of how Git evaluates folder-level ignores versus individual file rules, and the use of 'git check-ignore -v --no-index' for rule attribution."
      },
      {
        taskId: "R46-T002",
        number: 92,
        title: "R46-T002: Explain nested path matching",
        url: "https://github.com/S-AI-Projects/gitignore/pull/92",
        template: "Global/EiffelStudio.gitignore",
        patterns: ["EIFGENs"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T002",
        testResult: "19/19 checks passed",
        testCommand: "python3 work/R46-T002/check.py",
        description: "Documented and verified how the bare EIFGENs pattern matches target build directories at arbitrary depths in an EiffelStudio repository. Tested root-level, nested, and deeply nested directory structures.",
        whyItMattered: "EiffelStudio creates compilation targets at various depths depending on subproject structures. Proving the pattern catches all instances prevents repository bloat without over-ignoring adjacent code.",
        learning: "Demonstrated how patterns without a leading slash match anywhere in the directory tree, in contrast to rooted patterns."
      },
      {
        taskId: "R46-T003",
        number: 93,
        title: "R46-T003: Demonstrate negation order",
        url: "https://github.com/S-AI-Projects/gitignore/pull/93",
        template: "Global/Ninja.gitignore",
        patterns: [".ninja_deps", ".ninja_log"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T003",
        testResult: "15/15 checks passed",
        testCommand: "python3 work/R46-T003/check.py",
        description: "Documented and verified ignore behavior of Ninja dependency and build logs. Demonstrated Git's last-match rule using a temporary local negation rule (!build/.ninja_log) in a controlled test repository.",
        whyItMattered: "Provides clear empirical proof that negation rules in Git are order-dependent and only take precedence if placed after the broad ignore pattern.",
        learning: "Mastered Git's sequential evaluation pipeline and the exact conditions under which an exclamation mark (!) re-includes previously ignored paths."
      },
      {
        taskId: "R46-T004",
        number: 94,
        title: "R46-T004: Distinguish directories from files",
        url: "https://github.com/S-AI-Projects/gitignore/pull/94",
        template: "Lilypond.gitignore",
        patterns: ["*.pdf", "*.ps", "*.midi"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T004",
        testResult: "27/27 checks passed",
        testCommand: "python3 work/R46-T004/check.py",
        description: "Created identical basename file and directory fixtures in separate test repos to prove that bare wildcard patterns (like *.pdf) match both files and directories, whereas trailing-slash rules (*.pdf/) exclusively match directories.",
        whyItMattered: "Avoids subtle bugs where developers unintentionally ignore directories whose names end with an extension meant only for generated output documents.",
        learning: "Learned the exact semantic distinction between trailing-slash path matching and bare glob patterns in Git's internal pattern matcher."
      },
      {
        taskId: "R46-T005",
        number: 95,
        title: "R46-T005: Explain already-tracked files",
        url: "https://github.com/S-AI-Projects/gitignore/pull/95",
        template: "ModelSim.gitignore",
        patterns: ["[_@]*", "*.mti", "*.dat"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T005",
        testResult: "All checks passed",
        testCommand: "python3 work/R46-T005/check.py",
        description: "Documented and verified how ModelSim simulation output patterns work. Demonstrated why adding an ignore rule to .gitignore never automatically untracks a file that was previously staged or committed to Git's index.",
        whyItMattered: "Solves one of the most persistent developer misconceptions in version control, emphasizing the necessary use of 'git rm --cached' to remove tracked artifacts.",
        learning: "Gained firsthand mastery over Git's staging index lifecycle and how .gitignore exclusively gates untracked file discovery."
      },
      {
        taskId: "R46-T006",
        number: 96,
        title: "R46-T006: Check path and case assumptions",
        url: "https://github.com/S-AI-Projects/gitignore/pull/96",
        template: "Modelica.gitignore",
        patterns: ["*~", "*.bak", "*.bak-mo"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T006",
        testResult: "11/11 checks passed",
        testCommand: "python3 work/R46-T006/check.py",
        description: "Documented Modelica backup file patterns. Tested paths containing spaces and examined case-matching behavior under core.ignorecase across different operating systems (macOS vs Linux).",
        whyItMattered: "Highlights cross-platform discrepancies in Git repositories where case sensitivity differences can cause unexpected file tracking on Linux CI environments vs developer laptops.",
        learning: "Understood the critical role of the 'core.ignorecase' Git configuration variable and testing on paths containing whitespace."
      },
      {
        taskId: "R46-T007",
        number: 97,
        title: "R46-T007: Document the pattern's origin",
        url: "https://github.com/S-AI-Projects/gitignore/pull/97",
        template: "Global/Virtuoso.gitignore",
        patterns: ["*.log", "panic*.log.*", "*.cdslck*"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T007",
        testResult: "12/12 checks passed",
        testCommand: "python3 work/R46-T007/check.py",
        description: "Connected Cadence Virtuoso log outputs and OpenAccess database lock files to their exact EDA tool origins. Proved that panic.log is matched by *.log, whereas panic*.log.* handles timestamped crash logs with arbitrary suffixes.",
        whyItMattered: "Clarified why specialized engineering templates contain patterns that appear redundant at first glance but are essential for preventing distributed database locking leaks.",
        learning: "Understood the balance between general wildcards and specific timestamped crash dump file formats in production engineering tools."
      },
      {
        taskId: "R46-T008",
        number: 98,
        title: "R46-T008: Build a regression check",
        url: "https://github.com/S-AI-Projects/gitignore/pull/98",
        template: "CodeIgniter.gitignore",
        patterns: ["application/config/development/", "!application/config/development/index.html"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T008",
        testResult: "13/13 checks passed",
        testCommand: "python3 work/R46-T008/check.py",
        description: "Built a robust regression checker for CodeIgniter. Verified development configuration and log ignore rules while proving that index.html directory defense files remain tracked via negation rules.",
        whyItMattered: "Prevents regression failures in security-sensitive directory indexes (which prevent public Apache directory browsing in PHP applications) during template refactorings.",
        learning: "Demonstrated automated regression test construction with isolated temporary Git repositories."
      },
      {
        taskId: "R46-T009",
        number: 99,
        title: "R46-T009: Explain the narrowest rule",
        url: "https://github.com/S-AI-Projects/gitignore/pull/99",
        template: "Global/Otto.gitignore",
        patterns: [".otto/"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T009",
        testResult: "18/18 checks passed",
        testCommand: "python3 work/R46-T009/check.py",
        description: "Analyzed the .otto/ directory rule and compared it against broader (.otto) and narrower (/.otto/) variants. Proved that .otto causes false positives on regular files, while /.otto/ fails on nested projects.",
        whyItMattered: "Established an empirical methodology for proving that a gitignore pattern is the 'narrowest correct choice', minimizing both false positives and false negatives.",
        learning: "Mastered formal comparative analysis between candidate ignore rules across multi-tier test repositories."
      },
      {
        taskId: "R46-T010",
        number: 100,
        title: "R46-T010: Add a realistic usage example",
        url: "https://github.com/S-AI-Projects/gitignore/pull/100",
        template: "Global/Dreamweaver.gitignore",
        patterns: ["_notes", "_compareTemp", "configs/"],
        state: "Open",
        branch: "student/e26b07f0690/R46-T010",
        testResult: "26/26 checks passed",
        testCommand: "python3 work/R46-T010/check.py",
        description: "Constructed an authentic Dreamweaver project tree containing production assets (HTML, CSS, JS, images, docs). Verified that editor artifacts (_notes, _compareTemp, configs/) are safely ignored while all legitimate web files remain preserved.",
        whyItMattered: "Replaced abstract single-file checks with realistic end-to-end repository structures, ensuring high confidence for live web development teams.",
        learning: "Reinforced best practices in building end-to-end multi-tier test trees to validate software tools under authentic user conditions."
      }
    ]
  };

  /* ==========================================================================
     2. AUDIO ENGINE (PROCEDURAL WEB AUDIO API)
     ========================================================================== */

  class SimpleAudioEngine {
    constructor() {
      this.ctx = null;
      this.engineOsc = null;
      this.engineGain = null;
      this.enabled = false;
      this.initialized = false;
    }

    init() {
      if (this.initialized) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        this.ctx = new AudioCtx();

        // Engine oscillator
        this.engineOsc = this.ctx.createOscillator();
        this.engineOsc.type = 'sawtooth';
        this.engineOsc.frequency.setValueAtTime(45, this.ctx.currentTime);

        this.engineGain = this.ctx.createGain();
        this.engineGain.gain.setValueAtTime(0, this.ctx.currentTime);

        // Lowpass filter for smooth engine rumble
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, this.ctx.currentTime);

        this.engineOsc.connect(filter);
        filter.connect(this.engineGain);
        this.engineGain.connect(this.ctx.destination);

        this.engineOsc.start();
        this.initialized = true;
      } catch (e) {
        console.warn('AudioContext unavailable:', e);
      }
    }

    toggle() {
      this.init();
      if (!this.ctx) return false;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.enabled = !this.enabled;
      if (!this.enabled && this.engineGain) {
        this.engineGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      }
      return this.enabled;
    }

    updateEngine(speed, isAccelerating) {
      if (!this.enabled || !this.ctx || !this.engineOsc || !this.engineGain) return;
      const absSpeed = Math.abs(speed);
      const targetFreq = 45 + absSpeed * 4.5 + (isAccelerating ? 25 : 0);
      const targetVol = absSpeed > 0.5 ? Math.min(0.12, 0.03 + absSpeed * 0.003) : (isAccelerating ? 0.05 : 0.015);
      this.engineOsc.frequency.setTargetAtTime(targetFreq, this.ctx.currentTime, 0.08);
      this.engineGain.gain.setTargetAtTime(targetVol, this.ctx.currentTime, 0.08);
    }

    playChime() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 0.3); // C6
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);
      } catch (e) {}
    }
  }

  const audio = new SimpleAudioEngine();

  /* ==========================================================================
     3. 3D APPLICATION CORE & SCENE SETUP
     ========================================================================== */

  // Landmarks Coordinates & Metadata
  const DESTINATIONS = {
    about: {
      id: "about",
      name: "About Me",
      tagline: "The Story Behind the Journey",
      icon: "👤",
      pos: { x: -32, y: 0, z: -20 },
      radius: 8.5,
      color: 0x38bdf8
    },
    education: {
      id: "education",
      name: "Education",
      tagline: "Academic Path & Milestones",
      icon: "🎓",
      pos: { x: -32, y: 0, z: 24 },
      radius: 8.5,
      color: 0xa855f7
    },
    achievements: {
      id: "achievements",
      name: "Achievements",
      tagline: "Hacktoberfest 1st Prize · Gemma Track",
      icon: "🏆",
      pos: { x: 0, y: 0, z: -36 },
      radius: 8.5,
      color: 0xf59e0b
    },
    projects: {
      id: "projects",
      name: "Featured Projects",
      tagline: "AMENDMENT & S&AI Gitignore",
      icon: "🚀",
      pos: { x: 34, y: 0, z: -20 },
      radius: 8.5,
      color: 0x10b981
    },
    prs: {
      id: "prs",
      name: "S&AI Open Source (10 PRs)",
      tagline: "All 10 Verified Pull Requests",
      icon: "🔀",
      pos: { x: 34, y: 0, z: 12 },
      radius: 8.5,
      color: 0x3b82f6
    },
    skills: {
      id: "skills",
      name: "Skills & Tools",
      tagline: "Technical Toolkit & Capabilities",
      icon: "⚡",
      pos: { x: -6, y: 0, z: 36 },
      radius: 8.5,
      color: 0xf43f5e
    },
    contact: {
      id: "contact",
      name: "Contact & Connect",
      tagline: "Let's Build Together",
      icon: "📫",
      pos: { x: 24, y: 0, z: 36 },
      radius: 8.5,
      color: 0x06b6d4
    }
  };

  // State Manager
  const state = {
    quality: "high",
    timeOfDay: "day", // day, sunset, night
    activeModal: null,
    activeTab: "amendment",
    activeDestinationNear: null,
    isWarping: false,
    controlsHelpOpen: false,
    readerMode: false
  };

  // Input Manager
  const input = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    handbrake: false,
    interact: false
  };

  // Three.js Core Objects
  let scene, camera, renderer;
  let sunLight, hemiLight;
  let carGroup, carBody, wheels = [], headlights = [];
  let animatedObjects = [];
  let minimapCanvas, minimapCtx;

  // Car Physics State
  const car = {
    pos: new THREE.Vector3(0, 0.4, 0),
    rot: 0,
    speed: 0,
    maxSpeed: 28,
    maxReverse: -10,
    accel: 24,
    decel: 14,
    brake: 36,
    steerAngle: 0,
    maxSteer: 0.65,
    steerSpeed: 3.5,
    drift: 0,
    pitch: 0,
    roll: 0
  };

  // Camera Orbit State
  const camControl = {
    distance: 14,
    height: 7,
    pitch: 0.32,
    yaw: 0,
    isDragging: false,
    prevPointer: { x: 0, y: 0 }
  };

  /* ==========================================================================
     4. PROCEDURAL 3D ASSETS & WORLD CREATION
     ========================================================================== */

  function initThreeScene() {
    const canvas = document.getElementById('webgl-canvas');
    if (!window.WebGLRenderingContext) {
      console.warn('WebGL unsupported. Falling back to Reader Mode.');
      enableReaderMode();
      return;
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0d8ef);
    scene.fog = new THREE.FogExp2(0xa0d8ef, 0.012);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 500);
    camera.position.set(0, 10, 16);

    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
    } catch (e) {
      console.error('WebGL init error:', e);
      enableReaderMode();
      return;
    }

    setupLighting();
    buildWorldEnvironment();
    buildLandmarks();
    buildVehicle();

    setupInputListeners();
    setupMinimap();
    setupModalAndHUD();

    window.addEventListener('resize', onWindowResize, false);

    // Initial Loading Completion
    finishLoading();
  }

  function setupLighting() {
    hemiLight = new THREE.HemisphereLight(0xffffff, 0x445566, 0.7);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    sunLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
    sunLight.position.set(45, 65, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 160;
    const d = 60;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);
  }

  function applyTimeOfDay(mode) {
    state.timeOfDay = mode;
    if (mode === 'day') {
      scene.background.setHex(0x9bd8f5);
      scene.fog.color.setHex(0x9bd8f5);
      hemiLight.color.setHex(0xffffff);
      hemiLight.groundColor.setHex(0x445566);
      hemiLight.intensity = 0.75;
      sunLight.color.setHex(0xfff5e6);
      sunLight.intensity = 1.2;
      headlights.forEach(l => l.intensity = 0);
    } else if (mode === 'sunset') {
      scene.background.setHex(0xe88d67);
      scene.fog.color.setHex(0xe88d67);
      hemiLight.color.setHex(0xffcba4);
      hemiLight.groundColor.setHex(0x553344);
      hemiLight.intensity = 0.6;
      sunLight.color.setHex(0xff7733);
      sunLight.intensity = 1.4;
      headlights.forEach(l => l.intensity = 1.5);
    } else if (mode === 'night') {
      scene.background.setHex(0x080e1a);
      scene.fog.color.setHex(0x080e1a);
      hemiLight.color.setHex(0x223355);
      hemiLight.groundColor.setHex(0x050a12);
      hemiLight.intensity = 0.3;
      sunLight.color.setHex(0x4466aa);
      sunLight.intensity = 0.4;
      headlights.forEach(l => l.intensity = 3.5);
    }
  }

  /* ==========================================================================
     5. PROCEDURAL LOW-POLY ENVIRONMENT
     ========================================================================== */

  function buildWorldEnvironment() {
    // 1. Base Floating Island Landscape
    const groundGeo = new THREE.CylinderGeometry(62, 56, 4, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x56a64b, // Vibrant low-poly meadow grass
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Stone cliff underneath
    const cliffGeo = new THREE.CylinderGeometry(56, 12, 14, 24);
    const cliffMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.9,
      flatShading: true
    });
    const cliff = new THREE.Mesh(cliffGeo, cliffMat);
    cliff.position.y = -10;
    scene.add(cliff);

    // 2. Road Network (Interconnected Loop & Plazas)
    buildRoadNetwork();

    // 3. Low-Poly Vegetation (Pine trees, leafy trees, rocks)
    buildVegetation();

    // 4. Moving Elements (Windmill, Radio Tower, Clouds, Water)
    buildDynamicWorldElements();
  }

  function buildRoadNetwork() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      roughness: 0.7,
      flatShading: true
    });

    // Central circular plaza
    const plazaGeo = new THREE.CylinderGeometry(10, 10, 0.1, 32);
    const plaza = new THREE.Mesh(plazaGeo, roadMat);
    plaza.position.y = 0.05;
    plaza.receiveShadow = true;
    scene.add(plaza);

    // Roundabout center garden
    const gardenGeo = new THREE.CylinderGeometry(4, 4, 0.3, 16);
    const gardenMat = new THREE.MeshStandardMaterial({ color: 0x48943f, flatShading: true });
    const garden = new THREE.Mesh(gardenGeo, gardenMat);
    garden.position.y = 0.15;
    garden.receiveShadow = true;
    scene.add(garden);

    // Fountain in garden
    const fountainBase = new THREE.Mesh(
      new THREE.CylinderGeometry(2, 2.2, 0.8, 12),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 })
    );
    fountainBase.position.y = 0.55;
    scene.add(fountainBase);

    // Four primary connecting roads radiating to the 6 destinations
    const roadSpecs = [
      { x: -16, z: -10, rotY: Math.PI / 4, len: 32 },  // Toward About
      { x: -16, z: 12, rotY: -Math.PI / 4, len: 32 }, // Toward Education
      { x: 0, z: -18, rotY: 0, len: 28 },             // Toward Achievements
      { x: 18, z: -10, rotY: -Math.PI / 4, len: 32 }, // Toward Projects
      { x: 18, z: 12, rotY: Math.PI / 4, len: 32 },   // Toward 10 PRs
      { x: 0, z: 18, rotY: 0, len: 28 }               // Toward Skills / Contact
    ];

    roadSpecs.forEach(spec => {
      const roadGeo = new THREE.BoxGeometry(5.5, 0.1, spec.len);
      const road = new THREE.Mesh(roadGeo, roadMat);
      road.position.set(spec.x, 0.05, spec.z);
      road.rotation.y = spec.rotY;
      road.receiveShadow = true;
      scene.add(road);

      // Dashed lane stripes
      const stripeGeo = new THREE.BoxGeometry(0.3, 0.12, spec.len * 0.85);
      const stripeMat = new THREE.MeshBasicMaterial({ color: 0xf1f5f9 });
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.position.set(spec.x, 0.06, spec.z);
      stripe.rotation.y = spec.rotY;
      scene.add(stripe);
    });

    // Paved Curbs along the outer ring
    const ringRoadGeo = new THREE.RingGeometry(38, 44, 32);
    const ringRoadMat = new THREE.MeshStandardMaterial({
      color: 0x272d38,
      roughness: 0.8,
      side: THREE.DoubleSide
    });
    const ringRoad = new THREE.Mesh(ringRoadGeo, ringRoadMat);
    ringRoad.rotation.x = -Math.PI / 2;
    ringRoad.position.y = 0.04;
    ringRoad.receiveShadow = true;
    scene.add(ringRoad);
  }

  function buildVegetation() {
    // Pine Tree generator
    function createPine(x, z, scale = 1) {
      const tree = new THREE.Group();
      // Trunk
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, flatShading: true });
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3 * scale, 0.45 * scale, 1.8 * scale, 6), trunkMat);
      trunk.position.y = 0.9 * scale;
      trunk.castShadow = true;
      tree.add(trunk);

      // Conical needle layers
      const needleMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, flatShading: true });
      for (let i = 0; i < 3; i++) {
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry((1.8 - i * 0.4) * scale, 1.8 * scale, 7),
          needleMat
        );
        cone.position.y = (1.8 + i * 1.1) * scale;
        cone.castShadow = true;
        cone.receiveShadow = true;
        tree.add(cone);
      }
      tree.position.set(x, 0, z);
      scene.add(tree);
    }

    // Deciduous Tree generator
    function createOak(x, z, scale = 1) {
      const tree = new THREE.Group();
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, flatShading: true });
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35 * scale, 0.5 * scale, 2.2 * scale, 6), trunkMat);
      trunk.position.y = 1.1 * scale;
      trunk.castShadow = true;
      tree.add(trunk);

      const foliageMat = new THREE.MeshStandardMaterial({ color: 0x43a047, flatShading: true });
      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6 * scale, 1), foliageMat);
      foliage.position.y = 2.8 * scale;
      foliage.castShadow = true;
      foliage.receiveShadow = true;
      tree.add(foliage);

      tree.position.set(x, 0, z);
      scene.add(tree);
    }

    // Boulder generator
    function createRock(x, z, scale = 1) {
      const rockMat = new THREE.MeshStandardMaterial({ color: 0x78909c, flatShading: true, roughness: 0.9 });
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.9 * scale, 0), rockMat);
      rock.position.set(x, 0.45 * scale, z);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.castShadow = true;
      rock.receiveShadow = true;
      scene.add(rock);
    }

    // Scatter trees & rocks around the islands away from roads
    const treeCoords = [
      // Left / West region
      [-18, -4], [-22, -6], [-26, -10], [-20, 4], [-24, 6], [-16, 14], [-24, 18],
      // Center North
      [-8, -26], [8, -26], [-12, -30], [12, -30], [-6, -42], [6, -42],
      // Right / East region
      [18, -4], [22, -6], [26, -10], [18, 4], [22, 6], [26, 4], [20, 22], [24, 26],
      // South region
      [-14, 30], [-18, 34], [10, 30], [14, 34], [-2, 44], [4, 44], [10, 42]
    ];

    treeCoords.forEach(([x, z], idx) => {
      const s = 0.8 + Math.random() * 0.5;
      if (idx % 2 === 0) createPine(x, z, s);
      else createOak(x, z, s);
      if (idx % 3 === 0) createRock(x + (Math.random() - 0.5) * 4, z + (Math.random() - 0.5) * 4, 0.7 + Math.random() * 0.6);
    });
  }

  function buildDynamicWorldElements() {
    // 1. Windmill on the northwest hill
    const windmill = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, flatShading: true });
    const millBody = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.6, 6.5, 8), bodyMat);
    millBody.position.y = 3.25;
    millBody.castShadow = true;
    windmill.add(millBody);

    const roofMat = new THREE.MeshStandardMaterial({ color: 0xef4444, flatShading: true });
    const millRoof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 2.2, 8), roofMat);
    millRoof.position.y = 7.6;
    windmill.add(millRoof);

    // Windmill rotating sails
    const sailsGroup = new THREE.Group();
    sailsGroup.position.set(0, 6.2, 1.9);

    const sailMat = new THREE.MeshStandardMaterial({ color: 0xdbeafe, flatShading: true });
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 4.8, 0.05), sailMat);
      arm.rotation.z = (Math.PI / 2) * i;
      sailsGroup.add(arm);
    }
    windmill.add(sailsGroup);
    windmill.position.set(-42, 0, -8);
    scene.add(windmill);

    animatedObjects.push({
      update: (dt) => {
        sailsGroup.rotation.z += 1.2 * dt;
      }
    });

    // 2. Radio Beacon / Communication Mast (near Contact destination)
    const tower = new THREE.Group();
    const mastMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.6, roughness: 0.3 });
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, 12, 6), mastMat);
    mast.position.y = 6;
    tower.add(mast);

    const beaconLight = new THREE.PointLight(0xef4444, 2, 25);
    beaconLight.position.y = 12.2;
    tower.add(beaconLight);

    const dishGroup = new THREE.Group();
    dishGroup.position.set(0, 9, 0);
    const dish = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 0.2, 0.4, 12),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 })
    );
    dish.rotation.x = Math.PI / 3;
    dishGroup.add(dish);
    tower.add(dishGroup);

    tower.position.set(38, 0, 32);
    scene.add(tower);

    animatedObjects.push({
      update: (dt, time) => {
        dishGroup.rotation.y += 0.8 * dt;
        beaconLight.intensity = Math.sin(time * 5) > 0 ? 3 : 0.2;
      }
    });

    // 3. Floating Clouds
    const clouds = [];
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
    for (let i = 0; i < 12; i++) {
      const cloud = new THREE.Group();
      const numPuffs = 4 + Math.floor(Math.random() * 4);
      for (let p = 0; p < numPuffs; p++) {
        const puff = new THREE.Mesh(
          new THREE.DodecahedronGeometry(2.5 + Math.random() * 2, 1),
          cloudMat
        );
        puff.position.set((p - numPuffs / 2) * 2.5, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 2);
        cloud.add(puff);
      }
      cloud.position.set(
        (Math.random() - 0.5) * 120,
        22 + Math.random() * 10,
        (Math.random() - 0.5) * 120
      );
      cloud.userData = { speed: 1.5 + Math.random() * 2 };
      scene.add(cloud);
      clouds.push(cloud);
    }

    animatedObjects.push({
      update: (dt) => {
        clouds.forEach(c => {
          c.position.x += c.userData.speed * dt;
          if (c.position.x > 80) c.position.x = -80;
        });
      }
    });
  }

  /* ==========================================================================
     6. THE SIX RUBRIC DESTINATIONS & 3D LANDMARKS
     ========================================================================== */

  function buildLandmarks() {
    Object.values(DESTINATIONS).forEach(dest => {
      // 1. Glowing ground trigger platform
      const triggerGroup = new THREE.Group();
      const ringGeo = new THREE.RingGeometry(dest.radius * 0.7, dest.radius, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: dest.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.08;
      triggerGroup.add(ring);

      // Inner pulse circle
      const innerGeo = new THREE.CircleGeometry(dest.radius * 0.5, 24);
      const innerMat = new THREE.MeshBasicMaterial({
        color: dest.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.15
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      inner.rotation.x = -Math.PI / 2;
      inner.position.y = 0.07;
      triggerGroup.add(inner);

      triggerGroup.position.set(dest.pos.x, 0, dest.pos.z);
      scene.add(triggerGroup);

      // Pulse animation
      animatedObjects.push({
        update: (dt, time) => {
          ring.scale.setScalar(1 + Math.sin(time * 3) * 0.06);
          innerMat.opacity = 0.12 + Math.sin(time * 4) * 0.08;
        }
      });

      // 2. Specific Architectural Landmark for each Section
      let landmarkMesh;
      if (dest.id === "about") {
        // Celestial Observatory & Library
        landmarkMesh = buildObservatoryLandmark();
      } else if (dest.id === "education") {
        // Academic Temple / Newton School Campus
        landmarkMesh = buildCampusLandmark();
      } else if (dest.id === "achievements") {
        // Giant Golden Trophy Arena & Hacktoberfest Podium
        landmarkMesh = buildTrophyLandmark();
      } else if (dest.id === "projects") {
        // AMENDMENT Cyber Arena & Game Board
        landmarkMesh = buildProjectsLandmark();
      } else if (dest.id === "prs") {
        // Git Tree & 10 PR Monoliths
        landmarkMesh = buildGitTreeLandmark();
      } else if (dest.id === "skills") {
        // Tech Power Forge with Orbiting Crystals
        landmarkMesh = buildSkillsLandmark();
      } else if (dest.id === "contact") {
        // Lighthouse & Communication Tower
        landmarkMesh = buildContactLandmark();
      }

      if (landmarkMesh) {
        landmarkMesh.position.set(dest.pos.x, 0, dest.pos.z);
        scene.add(landmarkMesh);
      }

      // 3. Floating 3D Title Sign
      const sign = createFloatingSign(dest.name, dest.color);
      sign.position.set(dest.pos.x, 8.5, dest.pos.z);
      scene.add(sign);

      animatedObjects.push({
        update: (dt, time) => {
          sign.position.y = 8.5 + Math.sin(time * 2 + dest.pos.x) * 0.3;
          sign.rotation.y = Math.sin(time * 0.8) * 0.1;
        }
      });
    });
  }

  function createFloatingSign(text, colorHex) {
    const group = new THREE.Group();
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Background pill
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.roundRect(10, 10, 492, 108, 24);
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#' + colorHex.toString(16).padStart(6, '0');
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const planeGeo = new THREE.PlaneGeometry(6, 1.5);
    const planeMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    group.add(plane);
    return group;
  }

  // Landmark 1: Observatory (About Me)
  function buildObservatoryLandmark() {
    const group = new THREE.Group();
    // Marble tiered base
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(5.5, 6, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x334155, flatShading: true })
    );
    base.position.y = 0.6;
    base.receiveShadow = true;
    group.add(base);

    // Observatory Dome
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(3.6, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.3, roughness: 0.4, flatShading: true })
    );
    dome.position.y = 1.2;
    dome.castShadow = true;
    group.add(dome);

    // Revolving Astrolabe rings
    const astrolabe = new THREE.Group();
    astrolabe.position.y = 5.2;
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.6 + i * 0.4, 0.08, 8, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 })
      );
      ring.rotation.x = i * (Math.PI / 3);
      astrolabe.add(ring);
    }
    // Glowing central core
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    astrolabe.add(core);
    group.add(astrolabe);

    animatedObjects.push({
      update: (dt) => {
        astrolabe.rotation.y += 1.0 * dt;
        astrolabe.rotation.x += 0.5 * dt;
      }
    });

    return group;
  }

  // Landmark 2: Academic Temple / Campus (Education)
  function buildCampusLandmark() {
    const group = new THREE.Group();
    // Stepped plinth
    const plinth = new THREE.Mesh(
      new THREE.BoxGeometry(9, 0.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, flatShading: true })
    );
    plinth.position.y = 0.4;
    group.add(plinth);

    // Classical Columns
    const colMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, flatShading: true });
    const colCoords = [[-3.5, -2.8], [3.5, -2.8], [-3.5, 2.8], [3.5, 2.8], [-1.2, -2.8], [1.2, -2.8]];
    colCoords.forEach(([cx, cz]) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 4.5, 8), colMat);
      col.position.set(cx, 3.0, cz);
      col.castShadow = true;
      group.add(col);
    });

    // Pediment Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(5.8, 2, 4),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, flatShading: true })
    );
    roof.position.y = 6.2;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);

    // Graduation Mortarboard Totem
    const cap = new THREE.Group();
    cap.position.y = 7.6;
    const capBoard = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 2), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    capBoard.rotation.y = Math.PI / 4;
    cap.add(capBoard);
    const capSkull = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 8), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    capSkull.position.y = -0.3;
    cap.add(capSkull);
    group.add(cap);

    return group;
  }

  // Landmark 3: Champions Trophy Pavilion (Achievements)
  function buildTrophyLandmark() {
    const group = new THREE.Group();
    // Octagonal arena podium
    const podium = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6.5, 1.2, 8),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, flatShading: true })
    );
    podium.position.y = 0.6;
    group.add(podium);

    // Giant Rotating Golden Trophy Cup
    const trophy = new THREE.Group();
    trophy.position.y = 2.4;
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xffb703,
      metalness: 0.9,
      roughness: 0.15
    });

    const cupStem = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.8, 1.8, 12), goldMat);
    cupStem.position.y = 0.9;
    trophy.add(cupStem);

    const cupBowl = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 0.8, 2.4, 16), goldMat);
    cupBowl.position.y = 2.8;
    cupBowl.castShadow = true;
    trophy.add(cupBowl);

    // Handles
    for (let h = -1; h <= 1; h += 2) {
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.15, 8, 16, Math.PI), goldMat);
      handle.position.set(h * 1.8, 2.8, 0);
      handle.rotation.z = h * -Math.PI / 2;
      trophy.add(handle);
    }
    group.add(trophy);

    // Winner Spotlights
    const spot = new THREE.PointLight(0xffb703, 3, 20);
    spot.position.y = 6;
    group.add(spot);

    animatedObjects.push({
      update: (dt) => {
        trophy.rotation.y += 1.4 * dt;
      }
    });

    return group;
  }

  // Landmark 4: AMENDMENT & Cyber Arena (Featured Projects)
  function buildProjectsLandmark() {
    const group = new THREE.Group();
    // Grid game board base
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });
    const board = new THREE.Mesh(new THREE.BoxGeometry(8, 0.6, 8), boardMat);
    board.position.y = 0.3;
    group.add(board);

    // Glowing Board Game Tiles
    const colors = [0x10b981, 0x3b82f6, 0xa855f7, 0xf59e0b];
    for (let x = -3; x <= 3; x += 2) {
      for (let z = -3; z <= 3; z += 2) {
        const c = colors[Math.abs(x + z) % colors.length];
        const tile = new THREE.Mesh(
          new THREE.BoxGeometry(1.6, 0.2, 1.6),
          new THREE.MeshStandardMaterial({ color: c, metalness: 0.5, roughness: 0.3 })
        );
        tile.position.set(x, 0.65, z);
        group.add(tile);
      }
    }

    // Holographic Spinning Dice in center
    const diceMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.8,
      roughness: 0.1,
      wireframe: true
    });
    const dice = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.8), diceMat);
    dice.position.y = 3.6;
    group.add(dice);

    animatedObjects.push({
      update: (dt) => {
        dice.rotation.x += 1.2 * dt;
        dice.rotation.y += 1.5 * dt;
      }
    });

    return group;
  }

  // Landmark 5: Git Tree & 10 PRs Hub (Open-Source)
  function buildGitTreeLandmark() {
    const group = new THREE.Group();
    // Circular repository platform
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(5.5, 6, 0.6, 16),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, flatShading: true })
    );
    base.position.y = 0.3;
    group.add(base);

    // Git Branching Monolith in center
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.7, 5, 8),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.6, roughness: 0.2 })
    );
    trunk.position.y = 2.8;
    group.add(trunk);

    // 10 Glowing PR Nodes arranged in an orbit
    const nodesGroup = new THREE.Group();
    nodesGroup.position.y = 3.2;
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 12, 12),
        new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0x10b981 : 0x38bdf8,
          metalness: 0.7,
          roughness: 0.2
        })
      );
      node.position.set(Math.cos(angle) * 3.4, Math.sin(angle * 2) * 0.6, Math.sin(angle) * 3.4);
      nodesGroup.add(node);
    }
    group.add(nodesGroup);

    animatedObjects.push({
      update: (dt) => {
        nodesGroup.rotation.y += 0.8 * dt;
      }
    });

    return group;
  }

  // Landmark 6: Tech Power Forge (Skills)
  function buildSkillsLandmark() {
    const group = new THREE.Group();
    const anvil = new THREE.Mesh(
      new THREE.CylinderGeometry(4.5, 5, 1, 12),
      new THREE.MeshStandardMaterial({ color: 0x334155, flatShading: true })
    );
    anvil.position.y = 0.5;
    group.add(anvil);

    // Central pulsing energy conduit
    const conduit = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 5.5, 16),
      new THREE.MeshStandardMaterial({ color: 0xf43f5e, metalness: 0.8, roughness: 0.2, wireframe: true })
    );
    conduit.position.y = 3.2;
    group.add(conduit);

    // Orbiting Polyhedral Skill Crystals
    const crystalsGroup = new THREE.Group();
    crystalsGroup.position.y = 3.6;
    const crystalColors = [0x38bdf8, 0x10b981, 0xa855f7, 0xf59e0b, 0xef4444];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const crystal = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.65, 0),
        new THREE.MeshStandardMaterial({ color: crystalColors[i], metalness: 0.9, roughness: 0.1 })
      );
      crystal.position.set(Math.cos(a) * 2.8, Math.sin(a * 3) * 0.5, Math.sin(a) * 2.8);
      crystalsGroup.add(crystal);
    }
    group.add(crystalsGroup);

    animatedObjects.push({
      update: (dt) => {
        crystalsGroup.rotation.y -= 1.2 * dt;
      }
    });

    return group;
  }

  // Landmark 7: Lighthouse & Telegram Array (Contact)
  function buildContactLandmark() {
    const group = new THREE.Group();
    // Lighthouse Tower
    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 2.8, 9, 10),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, flatShading: true })
    );
    tower.position.y = 4.5;
    tower.castShadow = true;
    group.add(tower);

    // Lantern room & revolving beacon
    const lantern = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.4, 1.8, 10),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.8, roughness: 0.2, wireframe: true })
    );
    lantern.position.y = 9.8;
    group.add(lantern);

    const beaconLight = new THREE.SpotLight(0x06b6d4, 4, 35, Math.PI / 5, 0.4);
    beaconLight.position.set(0, 9.8, 0);
    beaconLight.target.position.set(10, 0, 10);
    group.add(beaconLight);
    group.add(beaconLight.target);

    animatedObjects.push({
      update: (dt, time) => {
        const lx = Math.cos(time * 2) * 15;
        const lz = Math.sin(time * 2) * 15;
        beaconLight.target.position.set(lx, 0, lz);
      }
    });

    return group;
  }

  /* ==========================================================================
     7. THE CUSTOM 3D VEHICLE
     ========================================================================== */

  function buildVehicle() {
    carGroup = new THREE.Group();

    // 1. Aerodynamic Cyber Coupe Chassis
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.6,
      roughness: 0.25,
      flatShading: true
    });
    carBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.55, 3.2), bodyMat);
    carBody.position.y = 0.55;
    carBody.castShadow = true;
    carGroup.add(carBody);

    // 2. Cabin & Windshield
    const cabinMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.1,
      flatShading: true
    });
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.6), cabinMat);
    cabin.position.set(0, 0.95, -0.2);
    cabin.castShadow = true;
    carGroup.add(cabin);

    // 3. Rear Aerodynamic Spoiler
    const spoilerMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, flatShading: true });
    const wing = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.08, 0.4), spoilerMat);
    wing.position.set(0, 1.15, 1.3);
    carGroup.add(wing);

    // 4. Wheels (4 Independent Spinning Wheels with Steering)
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.2 });

    const wheelPositions = [
      { x: -0.95, y: 0.35, z: -1.0, isFront: true },  // Front Left
      { x: 0.95, y: 0.35, z: -1.0, isFront: true },   // Front Right
      { x: -0.95, y: 0.35, z: 1.0, isFront: false },  // Rear Left
      { x: 0.95, y: 0.35, z: 1.0, isFront: false }    // Rear Right
    ];

    wheels = [];
    wheelPositions.forEach(pos => {
      const wheelMount = new THREE.Group();
      wheelMount.position.set(pos.x, pos.y, pos.z);

      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.28, 12), wheelMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelMount.add(tire);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.3, 8), rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelMount.add(rim);

      carGroup.add(wheelMount);
      wheels.push({
        mount: wheelMount,
        mesh: tire,
        isFront: pos.isFront
      });
    });

    // 5. Headlights & Light Cones
    headlights = [];
    [-0.55, 0.55].forEach(hx => {
      // Glow bulb
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      bulb.position.set(hx, 0.55, -1.6);
      carGroup.add(bulb);

      // Real Spotlight
      const spot = new THREE.SpotLight(0xffffff, 0, 24, Math.PI / 6, 0.35);
      spot.position.set(hx, 0.55, -1.6);
      spot.target.position.set(hx, 0, -12);
      carGroup.add(spot);
      carGroup.add(spot.target);
      headlights.push(spot);
    });

    // 6. Rear Taillights
    [-0.55, 0.55].forEach(rx => {
      const tail = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.12, 0.05),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      tail.position.set(rx, 0.55, 1.6);
      carGroup.add(tail);
    });

    carGroup.position.copy(car.pos);
    scene.add(carGroup);
  }

  /* ==========================================================================
     8. VEHICLE PHYSICS & ANIMATION LOOP
     ========================================================================== */

  let prevTime = performance.now();

  function updatePhysics(dt) {
    if (state.isWarping) return;

    // Acceleration & Braking inputs
    const isAcc = input.forward;
    const isRev = input.backward;
    const isBrake = input.handbrake;

    if (isAcc) {
      car.speed += car.accel * dt;
      if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
    } else if (isRev) {
      car.speed -= car.brake * 0.6 * dt;
      if (car.speed < car.maxReverse) car.speed = car.maxReverse;
    } else {
      // Natural rolling friction deceleration
      if (car.speed > 0) {
        car.speed = Math.max(0, car.speed - car.decel * dt);
      } else if (car.speed < 0) {
        car.speed = Math.min(0, car.speed + car.decel * dt);
      }
    }

    if (isBrake) {
      if (car.speed > 0) car.speed = Math.max(0, car.speed - car.brake * dt);
      else if (car.speed < 0) car.speed = Math.min(0, car.speed + car.brake * dt);
      car.drift = 1.0;
    } else {
      car.drift = Math.max(0, car.drift - dt * 2);
    }

    // Steering physics with speed scaling
    const speedRatio = Math.min(1.0, Math.abs(car.speed) / (car.maxSpeed * 0.4));
    let targetSteer = 0;
    if (input.left) targetSteer += car.maxSteer;
    if (input.right) targetSteer -= car.maxSteer;

    car.steerAngle += (targetSteer - car.steerAngle) * Math.min(1, car.steerSpeed * dt * 3);

    // Car rotation (heading)
    const direction = car.speed >= 0 ? 1 : -1;
    if (Math.abs(car.speed) > 0.1) {
      car.rot += car.steerAngle * speedRatio * direction * dt * 2.2;
    }

    // Velocity update
    car.pos.x -= Math.sin(car.rot) * car.speed * dt;
    car.pos.z -= Math.cos(car.rot) * car.speed * dt;

    // Boundaries bounce check (keep inside 52 units radius)
    const distFromCenter = Math.sqrt(car.pos.x * car.pos.x + car.pos.z * car.pos.z);
    if (distFromCenter > 52) {
      const normalX = car.pos.x / distFromCenter;
      const normalZ = car.pos.z / distFromCenter;
      car.pos.x = normalX * 51.5;
      car.pos.z = normalZ * 51.5;
      car.speed = -car.speed * 0.4; // Soft bounce
    }

    // Suspension tilting (Pitch & Roll)
    car.pitch = THREE.MathUtils.lerp(car.pitch, (isAcc ? 0.05 : (isBrake || isRev ? -0.06 : 0)), 0.1);
    car.roll = THREE.MathUtils.lerp(car.roll, car.steerAngle * (car.speed / car.maxSpeed) * 0.12, 0.1);

    // Update Three.js Car Transforms
    carGroup.position.copy(car.pos);
    carGroup.rotation.y = car.rot;
    carBody.rotation.x = car.pitch;
    carBody.rotation.z = car.roll;

    // Rotate Wheels and Turn Front Wheels
    const wheelRotSpeed = (car.speed / 0.35) * dt;
    wheels.forEach(w => {
      w.mount.rotation.x += wheelRotSpeed;
      if (w.isFront) {
        w.mount.rotation.y = car.steerAngle;
      }
    });

    // Update Audio Engine
    audio.updateEngine(car.speed, isAcc);

    // Update Speedometer HUD
    updateSpeedometer();

    // Check Proximity to 6 Landmarks
    checkDestinationProximity();
  }

  function updateSpeedometer() {
    const kmh = Math.round(Math.abs(car.speed) * 2.8);
    const speedEl = document.getElementById('hud-speed-display');
    const gearEl = document.getElementById('hud-gear-display');
    if (speedEl) speedEl.textContent = kmh;
    if (gearEl) {
      if (car.speed < -0.5) gearEl.textContent = 'R';
      else if (Math.abs(car.speed) < 0.5) gearEl.textContent = 'N';
      else gearEl.textContent = 'D';
    }
  }

  function checkDestinationProximity() {
    let nearest = null;
    let minDistance = Infinity;

    Object.values(DESTINATIONS).forEach(dest => {
      const dx = car.pos.x - dest.pos.x;
      const dz = car.pos.z - dest.pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < dest.radius && dist < minDistance) {
        nearest = dest;
        minDistance = dist;
      }
    });

    const promptEl = document.getElementById('hud-prompt');
    const promptText = document.getElementById('prompt-text');
    const promptIcon = document.getElementById('prompt-icon');

    if (nearest) {
      if (state.activeDestinationNear !== nearest.id) {
        state.activeDestinationNear = nearest.id;
        audio.playChime();
      }
      if (promptEl) promptEl.classList.add('visible');
      if (promptText) promptText.textContent = `Explore ${nearest.name}`;
      if (promptIcon) promptIcon.textContent = nearest.icon;

      if (input.interact) {
        openModal(nearest.id);
        input.interact = false;
      }
    } else {
      state.activeDestinationNear = null;
      if (promptEl) promptEl.classList.remove('visible');
    }
  }

  function updateCamera() {
    if (state.isWarping) return;

    // Follow car smoothly from behind
    const idealOffset = new THREE.Vector3(
      Math.sin(car.rot + camControl.yaw) * camControl.distance,
      camControl.height,
      Math.cos(car.rot + camControl.yaw) * camControl.distance
    );

    const targetCamPos = new THREE.Vector3().copy(car.pos).add(idealOffset);
    camera.position.lerp(targetCamPos, 0.08);

    const lookTarget = new THREE.Vector3(
      car.pos.x,
      car.pos.y + 1.2,
      car.pos.z
    );
    camera.lookAt(lookTarget);
  }

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - prevTime) / 1000, 0.1);
    prevTime = now;

    // Animate moving world elements
    const timeSec = now / 1000;
    animatedObjects.forEach(obj => obj.update(dt, timeSec));

    // Update Physics and Camera
    updatePhysics(dt);
    updateCamera();

    // Render Minimap
    drawMinimap();

    // Render Scene
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  /* ==========================================================================
     9. CAMERA WARPING & DESTINATION NAVIGATION
     ========================================================================== */

  function warpToDestination(destId) {
    const dest = DESTINATIONS[destId];
    if (!dest) return;

    state.isWarping = true;
    audio.playChime();

    // Smoothly transition car position near destination
    const targetCarPos = new THREE.Vector3(
      dest.pos.x - 4,
      0.4,
      dest.pos.z + 4
    );

    // Reset speeds
    car.speed = 0;
    car.steerAngle = 0;
    car.rot = Math.atan2(dest.pos.x - targetCarPos.x, dest.pos.z - targetCarPos.z);

    const startPos = new THREE.Vector3().copy(car.pos);
    const startCamPos = new THREE.Vector3().copy(camera.position);
    const targetCamPos = new THREE.Vector3(dest.pos.x, 9, dest.pos.z + 14);

    let progress = 0;
    const warpDuration = 1000; // ms
    const startTime = performance.now();

    function stepWarp(currentTime) {
      const elapsed = currentTime - startTime;
      progress = Math.min(1.0, elapsed / warpDuration);
      // Ease in-out cubic
      const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      car.pos.lerpVectors(startPos, targetCarPos, ease);
      carGroup.position.copy(car.pos);

      camera.position.lerpVectors(startCamPos, targetCamPos, ease);
      camera.lookAt(dest.pos.x, 2, dest.pos.z);

      if (progress < 1.0) {
        requestAnimationFrame(stepWarp);
      } else {
        state.isWarping = false;
        // Open modal presentation for that section
        openModal(dest.id);
      }
    }

    requestAnimationFrame(stepWarp);
  }

  function resetCar() {
    car.pos.set(0, 0.4, 0);
    car.rot = 0;
    car.speed = 0;
    car.steerAngle = 0;
    carGroup.position.copy(car.pos);
    carGroup.rotation.y = 0;
    audio.playChime();
  }

  /* ==========================================================================
     10. 2D MINIMAP RADAR
     ========================================================================== */

  function setupMinimap() {
    minimapCanvas = document.getElementById('minimap-canvas');
    if (minimapCanvas) {
      minimapCtx = minimapCanvas.getContext('2d');
    }
  }

  function drawMinimap() {
    if (!minimapCtx || !minimapCanvas) return;
    const ctx = minimapCtx;
    const w = minimapCanvas.width;
    const h = minimapCanvas.height;
    const scale = w / 120; // 120 units world map size

    ctx.clearRect(0, 0, w, h);

    // Map Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // Island boundary circle
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 58 * scale, 0, Math.PI * 2);
    ctx.stroke();

    // Roads
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 41 * scale, 0, Math.PI * 2);
    ctx.stroke();

    // Landmarks dots
    Object.values(DESTINATIONS).forEach(dest => {
      const mx = w / 2 + dest.pos.x * scale;
      const my = h / 2 + dest.pos.z * scale;
      ctx.fillStyle = '#' + dest.color.toString(16).padStart(6, '0');
      ctx.beginPath();
      ctx.arc(mx, my, 4.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Player Vehicle Icon
    const px = w / 2 + car.pos.x * scale;
    const py = h / 2 + car.pos.z * scale;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-car.rot);
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4, 5);
    ctx.lineTo(-4, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /* ==========================================================================
     11. MODAL CONTENT GENERATION & INJECTION
     ========================================================================== */

  function setupModalAndHUD() {
    // Quick Warp Buttons in Header
    const warpButtons = document.querySelectorAll('[data-warp]');
    warpButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const destId = e.currentTarget.getAttribute('data-warp');
        warpToDestination(destId);
      });
    });

    // Central prompt click
    const promptPill = document.getElementById('prompt-action-pill');
    if (promptPill) {
      promptPill.addEventListener('click', () => {
        if (state.activeDestinationNear) {
          openModal(state.activeDestinationNear);
        }
      });
    }

    // Modal Close Buttons
    const closeBtn = document.getElementById('modal-close-btn');
    const resumeBtn = document.getElementById('modal-resume-drive');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (resumeBtn) resumeBtn.addEventListener('click', closeModal);

    // Sub-Tabs in Modal (AMENDMENT vs S&AI 10 PRs)
    const tabAmendment = document.getElementById('tab-btn-amendment');
    const tabPrs = document.getElementById('tab-btn-prs');
    if (tabAmendment && tabPrs) {
      tabAmendment.addEventListener('click', () => switchProjectTab('amendment'));
      tabPrs.addEventListener('click', () => switchProjectTab('prs'));
    }

    // Previous / Next Section in Modal Footer
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');
    const destKeys = Object.keys(DESTINATIONS);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const idx = destKeys.indexOf(state.activeModal);
        const prevIdx = (idx - 1 + destKeys.length) % destKeys.length;
        openModal(destKeys[prevIdx]);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const idx = destKeys.indexOf(state.activeModal);
        const nextIdx = (idx + 1) % destKeys.length;
        openModal(destKeys[nextIdx]);
      });
    }

    // Brand Home button resets car
    const homeBtn = document.getElementById('hud-brand-home');
    if (homeBtn) homeBtn.addEventListener('click', resetCar);

    // Audio Toggle
    const audioBtn = document.getElementById('btn-audio-toggle');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const enabled = audio.toggle();
        audioBtn.textContent = enabled ? '🔊' : '🔇';
        audioBtn.classList.toggle('active', enabled);
      });
    }

    // Time of Day Toggle
    const timeBtn = document.getElementById('btn-time-toggle');
    if (timeBtn) {
      timeBtn.addEventListener('click', () => {
        if (state.timeOfDay === 'day') {
          applyTimeOfDay('sunset');
          timeBtn.textContent = '🌅';
        } else if (state.timeOfDay === 'sunset') {
          applyTimeOfDay('night');
          timeBtn.textContent = '🌙';
        } else {
          applyTimeOfDay('day');
          timeBtn.textContent = '☀️';
        }
      });
    }

    // Quality Toggle
    const qualBtn = document.getElementById('btn-quality-toggle');
    if (qualBtn) {
      qualBtn.addEventListener('click', () => {
        state.quality = state.quality === 'high' ? 'low' : 'high';
        renderer.shadowMap.enabled = state.quality === 'high';
        renderer.setPixelRatio(state.quality === 'high' ? Math.min(window.devicePixelRatio, 2) : 1);
        qualBtn.textContent = state.quality === 'high' ? '⚡' : '🔋';
      });
    }

    // Controls Help Modal
    const helpBtn = document.getElementById('btn-controls-help');
    const helpModal = document.getElementById('controls-modal');
    const helpClose = document.getElementById('controls-modal-close');
    const helpGotIt = document.getElementById('btn-close-controls-help');

    if (helpBtn && helpModal) {
      helpBtn.addEventListener('click', () => helpModal.classList.add('active'));
    }
    if (helpClose && helpModal) {
      helpClose.addEventListener('click', () => helpModal.classList.remove('active'));
    }
    if (helpGotIt && helpModal) {
      helpGotIt.addEventListener('click', () => helpModal.classList.remove('active'));
    }

    // Classic Reader Mode Toggle
    const readerBtn = document.getElementById('btn-reader-mode');
    const exitReaderBtn = document.getElementById('btn-exit-reader');
    if (readerBtn) readerBtn.addEventListener('click', enableReaderMode);
    if (exitReaderBtn) exitReaderBtn.addEventListener('click', disableReaderMode);

    // Populate Reader View items as well
    populateReaderView();
  }

  function openModal(destId) {
    const dest = DESTINATIONS[destId];
    if (!dest) return;

    state.activeModal = destId;
    const overlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalIcon = document.getElementById('modal-icon');
    const modalTabs = document.getElementById('modal-tabs');
    const modalBody = document.getElementById('modal-body-content');

    if (!overlay || !modalTitle || !modalBody) return;

    modalTitle.textContent = dest.name;
    modalSubtitle.textContent = dest.tagline;
    modalIcon.textContent = dest.icon;

    // Show/hide sub-tabs for Projects & PRs
    if (destId === "projects" || destId === "prs") {
      modalTabs.style.display = 'flex';
      switchProjectTab(destId === "prs" ? "prs" : "amendment");
    } else {
      modalTabs.style.display = 'none';
      modalBody.innerHTML = renderSectionHTML(destId);
    }

    overlay.classList.add('active');
  }

  function closeModal() {
    state.activeModal = null;
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  function switchProjectTab(tabKey) {
    state.activeTab = tabKey;
    const tabAmendment = document.getElementById('tab-btn-amendment');
    const tabPrs = document.getElementById('tab-btn-prs');
    const modalBody = document.getElementById('modal-body-content');

    if (tabAmendment && tabPrs) {
      tabAmendment.classList.toggle('active', tabKey === 'amendment');
      tabPrs.classList.toggle('active', tabKey === 'prs');
    }

    if (modalBody) {
      if (tabKey === 'amendment') {
        modalBody.innerHTML = renderAmendmentHTML();
      } else {
        modalBody.innerHTML = renderPRsHTML();
        setupPRFilter();
      }
    }
  }

  /* ==========================================================================
     12. DYNAMIC TEMPLATE RENDERERS FOR EACH SECTION
     ========================================================================== */

  function renderSectionHTML(sectionId) {
    switch (sectionId) {
      case "about":
        return `
          <p class="content-lead">
            Hello, I'm Sathwik Racharla. I grew up in Vemulawada, a heritage town in Telangana, India. My background is rooted in consistent effort, intellectual curiosity, and building software that solves concrete problems.
          </p>
          <p class="content-paragraph">
            I studied at a local government school until Class 10, graduating with a <strong>9.7 CGPA</strong>. That environment taught me resourcefulness, hard work, and the importance of understanding fundamentals without taking shortcuts. In Class 12, I secured <strong>978 out of 1000</strong> marks and scored an <strong>85.978 percentile</strong> in the JEE entrance examination.
          </p>
          <p class="content-paragraph">
            Today, I am studying Computer Science and Engineering (CSE) at <strong>Newton School of Technology</strong>. I am deeply interested in backend systems, deterministic state machines, software architecture, and open-source software. I value genuine code, honest self-evaluation, and rigorous testing above empty buzzwords.
          </p>
          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-number">9.7</div>
              <div class="stat-desc">Class 10 CGPA (Govt School)</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">978/1000</div>
              <div class="stat-desc">Class 12 Higher Secondary</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">85.978</div>
              <div class="stat-desc">JEE Percentile</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">1st Place</div>
              <div class="stat-desc">Hacktoberfest Gemma Track</div>
            </div>
          </div>
        `;

      case "education":
        return `
          <div class="timeline-wrap">
            <div class="timeline-entry">
              <div class="timeline-header">
                <span class="timeline-role">Newton School of Technology</span>
                <span class="timeline-period">Present</span>
              </div>
              <p class="timeline-desc">
                B.Tech in Computer Science and Engineering (CSE). Actively studying software engineering, systems programming, and collaborative engineering. Regularly participating in hackathons and open-source repositories.
              </p>
            </div>
            <div class="timeline-entry">
              <div class="timeline-header">
                <span class="timeline-role">Higher Secondary Education (Class 12)</span>
                <span class="timeline-period">Score: 978 / 1000</span>
              </div>
              <p class="timeline-desc">
                Completed Class 12 with distinction, achieving 978 marks out of 1000 across core Mathematics, Physics, and Chemistry curricula.
              </p>
            </div>
            <div class="timeline-entry">
              <div class="timeline-header">
                <span class="timeline-role">Joint Entrance Examination (JEE)</span>
                <span class="timeline-period">85.978 Percentile</span>
              </div>
              <p class="timeline-desc">
                National engineering entrance examination demonstrating problem-solving speed, analytical depth, and mathematical discipline.
              </p>
            </div>
            <div class="timeline-entry">
              <div class="timeline-header">
                <span class="timeline-role">Government School (Class 10)</span>
                <span class="timeline-period">9.7 CGPA</span>
              </div>
              <p class="timeline-desc">
                Completed secondary school education with top academic marks, building a firm foundation of discipline and intrinsic motivation.
              </p>
            </div>
          </div>
        `;

      case "achievements":
        return `
          <div style="background:rgba(30,41,59,0.5); border:1px solid var(--border-card); border-radius:var(--radius-md); padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
              <h3 style="font-size:18px; color:#fff;">🏆 Hacktoberfest Hackathon — First Prize Winner</h3>
              <span style="background:rgba(56,189,248,0.15); color:var(--accent-cyan); font-weight:700; padding:4px 10px; border-radius:12px; font-size:12px;">Gemma &amp; Track Winner · ₹12,000</span>
            </div>
            <p class="content-paragraph">
              Competed in the national Hacktoberfest Hackathon and clinched First Prize on the prestigious Gemma track with <strong>AMENDMENT: The Board Game That Rewrites Its Own Rules</strong>.
            </p>
            <p class="content-paragraph" style="margin-top:10px;">
              My role encompassed <strong>Backend Development and Game Engine Architecture</strong>. I built the deterministic rule engine in Python/FastAPI that validates and enforces rules compiled by a local Gemma AI model running through Ollama.
            </p>
            <div class="photo-showcase-box" style="margin-top:16px;">
              <img src="assets/images/hackathon-winner.jpg" alt="Sathwik Racharla and teammates holding Hacktoberfest Gemma Track Winner certificates" class="showcase-img" />
              <div class="showcase-caption">
                <span>🏅</span> <strong>Official Winner Photo:</strong> Sathwik Racharla and teammates holding Hacktoberfest Gemma Track Winner certificates in front of the AMENDMENT game screen.
              </div>
            </div>
          </div>
        `;

      case "skills":
        return `
          <div class="skills-category-grid">
            ${PORTFOLIO_DATA.skills.map(s => `
              <div class="skill-card">
                <div class="skill-card-top">
                  <span class="skill-icon">${s.icon}</span>
                  <div>
                    <h4 class="skill-title">${s.name}</h4>
                    <span class="skill-level-badge badge-${s.level.toLowerCase()}">${s.level}</span>
                  </div>
                </div>
                <p class="skill-desc">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        `;

      case "contact":
        return `
          <p class="content-lead">
            I'm always keen to discuss software systems, backend engineering, collaborative open-source work, and exciting new projects.
          </p>
          <div class="contact-cards-grid">
            <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" rel="noopener noreferrer" class="contact-card">
              <span class="contact-icon">💻</span>
              <div>
                <div class="contact-info-label">GitHub</div>
                <div class="contact-info-val">sathwikracharla81-cmd</div>
              </div>
            </a>
            <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="contact-card">
              <span class="contact-icon">✉️</span>
              <div>
                <div class="contact-info-label">Email</div>
                <div class="contact-info-val">${PORTFOLIO_DATA.profile.email}</div>
              </div>
            </a>
            <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card">
              <span class="contact-icon">🔗</span>
              <div>
                <div class="contact-info-label">LinkedIn</div>
                <div class="contact-info-val">Sathwik Racharla</div>
              </div>
            </a>
          </div>
        `;

      default:
        return `<p>Content for ${sectionId}</p>`;
    }
  }

  function renderAmendmentHTML() {
    return `
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h3 style="font-size:20px; font-weight:800; color:#fff;">AMENDMENT: The Board Game That Rewrites Its Own Rules</h3>
            <p style="font-size:13px; color:var(--text-secondary);">1st Prize — Hacktoberfest Hackathon (Gemma Track · ₹12,000)</p>
          </div>
          <span class="pr-task-badge" style="font-size:12px;">FastAPI · Python · Gemma · Ollama</span>
        </div>

        <p class="content-lead">
          AMENDMENT is an innovative multiplayer board game where players write rule proposals in natural English. A local LLM judicial Court validates and compiles proposals into structured rulebook schemas, while a deterministic backend engine guarantees consistency and executes the rulebook.
        </p>

        <div style="border-radius:10px; overflow:hidden; border:1px solid var(--border-card);">
          <img src="assets/images/amendment-diagram.svg" alt="AMENDMENT System Architecture" style="width:100%; display:block;" />
        </div>

        <h4 style="color:var(--accent-cyan); font-size:16px;">My Architecture &amp; Game Engine Contributions:</h4>
        <ul style="padding-left:20px; color:var(--text-secondary); line-height:1.7; font-size:13.5px;">
          <li><strong>Deterministic Engine Core:</strong> Architected the backend turn simulator in Python/FastAPI. Evaluated game triggers (<code>on_turn_start</code>, <code>on_roll</code>, <code>on_land</code>, <code>on_pass</code>) and applied rule effects (scores, tile warps, turn reversals) deterministically.</li>
          <li><strong>The AI Court Decoupling:</strong> Enforced a clean separation of concerns: the Court (Gemma via Ollama) only outputs JSON conforming to the rule schema. It is completely forbidden from directly mutating state variables.</li>
          <li><strong>Rule Validation &amp; Invalidation:</strong> Built automated rulebook integrity checks preventing infinite loops, paradoxes, or unauthorized modifications to immutable base rules (such as R2).</li>
          <li><strong>REST API Endpoints:</strong> Engineered high-performance FastAPI endpoints (<code>/api/step</code>, <code>/api/propose</code>, <code>/api/state</code>) to synchronize the board game state across web clients in real time.</li>
        </ul>
      </div>
    `;
  }

  function renderPRsHTML() {
    return `
      <div style="display:flex; flex-direction:column; gap:18px;">
        <div class="pr-grid-header">
          <div>
            <h3 style="font-size:18px; font-weight:800; color:#fff;">S&amp;AI Open-Source Contributions: gitignore</h3>
            <p style="font-size:13px; color:var(--text-secondary);">10 Upstream Pull Requests Verified on GitHub (S-AI-Projects/gitignore)</p>
          </div>
          <input type="text" id="pr-search-box" class="pr-filter-input" placeholder="🔍 Filter by Task or Template..." />
        </div>

        <div style="border-radius:10px; overflow:hidden; border:1px solid var(--border-card);">
          <img src="assets/images/gitignore-diagram.svg" alt="S&amp;AI Gitignore Pipeline" style="width:100%; display:block;" />
        </div>

        <div class="pr-cards-grid" id="pr-cards-list">
          ${renderPRCardItems(PORTFOLIO_DATA.prs)}
        </div>
      </div>
    `;
  }

  function renderPRCardItems(prsList) {
    return prsList.map(pr => `
      <div class="pr-card" data-task="${pr.taskId.toLowerCase()}" data-template="${pr.template.toLowerCase()}">
        <div class="pr-card-top">
          <span class="pr-task-badge">${pr.taskId}</span>
          <span class="pr-status-badge">
            <span class="status-dot"></span> ${pr.state} (GitHub # ${pr.number})
          </span>
        </div>
        <a href="${pr.url}" target="_blank" rel="noopener noreferrer" class="pr-title-link">
          ${pr.title} ↗
        </a>
        <div class="pr-template-tag">Template: <strong>${pr.template}</strong></div>
        <p class="pr-summary">${pr.description}</p>
        <div class="pr-why-it-mattered">
          <strong>Why It Mattered:</strong> ${pr.whyItMattered}
        </div>
        <div class="pr-test-evidence">
          <span>✓ ${pr.testResult}</span>
          <code>${pr.testCommand}</code>
        </div>
        <div class="pr-card-footer">
          <span style="font-size:11px; color:var(--text-muted); font-family:var(--font-mono);">${pr.branch}</span>
          <a href="${pr.url}" target="_blank" rel="noopener noreferrer" class="github-link-btn">
            Open PR ↗
          </a>
        </div>
      </div>
    `).join('');
  }

  function setupPRFilter() {
    const input = document.getElementById('pr-search-box');
    const container = document.getElementById('pr-cards-list');
    if (!input || !container) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = PORTFOLIO_DATA.prs.filter(pr =>
        pr.taskId.toLowerCase().includes(q) ||
        pr.title.toLowerCase().includes(q) ||
        pr.template.toLowerCase().includes(q) ||
        pr.description.toLowerCase().includes(q)
      );
      container.innerHTML = renderPRCardItems(filtered);
    });
  }

  function populateReaderView() {
    const prContainer = document.getElementById('reader-pr-cards-container');
    const skillsContainer = document.getElementById('reader-skills-container');

    if (prContainer) {
      prContainer.innerHTML = renderPRCardItems(PORTFOLIO_DATA.prs);
    }
    if (skillsContainer) {
      skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(s => `
        <div class="skill-card">
          <div class="skill-card-top">
            <span class="skill-icon">${s.icon}</span>
            <div>
              <h4 class="skill-title">${s.name}</h4>
              <span class="skill-level-badge badge-${s.level.toLowerCase()}">${s.level}</span>
            </div>
          </div>
          <p class="skill-desc">${s.desc}</p>
        </div>
      `).join('');
    }
  }

  function enableReaderMode() {
    state.readerMode = true;
    const readerView = document.getElementById('reader-view');
    if (readerView) readerView.classList.add('active');
  }

  function disableReaderMode() {
    state.readerMode = false;
    const readerView = document.getElementById('reader-view');
    if (readerView) readerView.classList.remove('active');
  }

  /* ==========================================================================
     13. INPUT HANDLING (DESKTOP KEYBOARD, MOUSE & MOBILE TOUCH)
     ========================================================================== */

  function setupInputListeners() {
    // Keyboard inputs
    window.addEventListener('keydown', (e) => {
      if (state.activeModal) {
        if (e.key === 'Escape') closeModal();
        return;
      }

      switch (e.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
          input.forward = true;
          break;
        case 's':
        case 'S':
        case 'ArrowDown':
          input.backward = true;
          break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
          input.left = true;
          break;
        case 'd':
        case 'D':
        case 'ArrowRight':
          input.right = true;
          break;
        case ' ':
          input.handbrake = true;
          e.preventDefault();
          break;
        case 'Enter':
        case 'e':
        case 'E':
          input.interact = true;
          break;
        case 'r':
        case 'R':
          resetCar();
          break;
        case 'Escape':
          closeModal();
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
          input.forward = false;
          break;
        case 's':
        case 'S':
        case 'ArrowDown':
          input.backward = false;
          break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
          input.left = false;
          break;
        case 'd':
        case 'D':
        case 'ArrowRight':
          input.right = false;
          break;
        case ' ':
          input.handbrake = false;
          break;
        case 'Enter':
        case 'e':
        case 'E':
          input.interact = false;
          break;
      }
    });

    // Pointer events for camera orbit
    const canvas = document.getElementById('webgl-canvas');
    if (canvas) {
      canvas.addEventListener('pointerdown', (e) => {
        camControl.isDragging = true;
        camControl.prevPointer.x = e.clientX;
        camControl.prevPointer.y = e.clientY;
      });

      window.addEventListener('pointermove', (e) => {
        if (!camControl.isDragging) return;
        const dx = e.clientX - camControl.prevPointer.x;
        const dy = e.clientY - camControl.prevPointer.y;
        camControl.prevPointer.x = e.clientX;
        camControl.prevPointer.y = e.clientY;

        camControl.yaw -= dx * 0.006;
        camControl.pitch = Math.max(0.1, Math.min(0.8, camControl.pitch + dy * 0.004));
      });

      window.addEventListener('pointerup', () => {
        camControl.isDragging = false;
      });

      // Zoom via scroll wheel
      canvas.addEventListener('wheel', (e) => {
        camControl.distance = Math.max(8, Math.min(26, camControl.distance + e.deltaY * 0.015));
      }, { passive: true });
    }

    // Mobile Virtual Touch Controls
    const touchGas = document.getElementById('touch-btn-gas');
    const touchBrake = document.getElementById('touch-btn-brake');
    const touchInteract = document.getElementById('touch-btn-interact');

    if (touchGas) {
      touchGas.addEventListener('touchstart', (e) => { e.preventDefault(); input.forward = true; });
      touchGas.addEventListener('touchend', (e) => { e.preventDefault(); input.forward = false; });
    }
    if (touchBrake) {
      touchBrake.addEventListener('touchstart', (e) => { e.preventDefault(); input.backward = true; });
      touchBrake.addEventListener('touchend', (e) => { e.preventDefault(); input.backward = false; });
    }
    if (touchInteract) {
      touchInteract.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (state.activeDestinationNear) openModal(state.activeDestinationNear);
      });
    }

    // Touch Joystick for Steering
    const joyZone = document.getElementById('touch-joystick-zone');
    const joyNub = document.getElementById('touch-joystick-nub');
    if (joyZone && joyNub) {
      let joyActive = false;
      let startX = 0;

      joyZone.addEventListener('touchstart', (e) => {
        joyActive = true;
        startX = e.touches[0].clientX;
      });

      joyZone.addEventListener('touchmove', (e) => {
        if (!joyActive) return;
        const currentX = e.touches[0].clientX;
        const deltaX = Math.max(-40, Math.min(40, currentX - startX));
        joyNub.style.transform = `translateX(${deltaX}px)`;

        if (deltaX < -12) {
          input.left = true;
          input.right = false;
        } else if (deltaX > 12) {
          input.right = true;
          input.left = false;
        } else {
          input.left = false;
          input.right = false;
        }
      });

      const endJoy = () => {
        joyActive = false;
        joyNub.style.transform = `translateX(0px)`;
        input.left = false;
        input.right = false;
      };

      joyZone.addEventListener('touchend', endJoy);
      joyZone.addEventListener('touchcancel', endJoy);
    }
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /* ==========================================================================
     14. LOADING SCREEN LIFECYCLE
     ========================================================================== */

  function finishLoading() {
    const progressBar = document.getElementById('loader-progress-bar');
    const statusText = document.getElementById('loader-status-text');
    const startBtn = document.getElementById('btn-enter-world');
    const loaderScreen = document.getElementById('loader-screen');

    let p = 0;
    const interval = setInterval(() => {
      p += 20;
      if (progressBar) progressBar.style.width = p + '%';

      if (p === 40 && statusText) statusText.textContent = "Constructing Low-Poly Landmarks...";
      if (p === 80 && statusText) statusText.textContent = "Calibrating Vehicle Physics & Controls...";

      if (p >= 100) {
        clearInterval(interval);
        if (statusText) statusText.textContent = "Ready to explore!";
        if (startBtn) {
          startBtn.style.display = 'inline-block';
          startBtn.addEventListener('click', () => {
            if (loaderScreen) loaderScreen.classList.add('fade-out');
            audio.toggle(); // Auto-start audio if allowed by user gesture
          });
        }
      }
    }, 120);

    // Start render loop
    requestAnimationFrame(animate);
  }

  // Self-boot on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeScene);
  } else {
    initThreeScene();
  }

})();
