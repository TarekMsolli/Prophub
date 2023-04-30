import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private torus!: THREE.Mesh;

  constructor() { }

  ngOnInit(): void {
    this.createScene();
    this.createCamera();
    this.addLights();
    this.loadModel();
    this.render();
  }

  private createScene(): void {
    this.scene = new THREE.Scene();
  }

  private createCamera(): void {
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(30, 50, 1);

  }

  private addLights(): void {
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 1, 1);
    this.scene.add(light);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load('../../assets/running_boy/scene.gltf', (gltf) => {
      this.torus = gltf.scene.children[0] as THREE.Mesh;
      this.torus.position.set(0, -15, -100);
      this.torus.scale.set(20, 20, 20);
      window.addEventListener('scroll', () => {
        if (this.torus) {
          const scrollY = window.scrollY;
          this.torus.rotation.z = scrollY * 0.002;
        }
      });

      const textureLoader = new TextureLoader();
      const texture = textureLoader.load('../../assets/running_boy/textures/lambert3SG_baseColor.png');
      const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });

      this.torus.material = material;

      this.scene.add(this.torus);
    });
  }

  private createControls(): void {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.update();

    // Add scroll event listener
    
  }

  private updateSize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private render(): void {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngAfterViewInit(): void {
    this.renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha channel
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setClearAlpha(0); // Set the background color to null
  }
  
}
