import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit,AfterViewInit {

  inicio = true;
  // Start Setup 
  @ViewChild('canvas') private canvasRef!: ElementRef;
  private get canvas(): HTMLCanvasElement { return this.canvasRef.nativeElement }
  

  @Input() public fieldOfView: number = 1;
  private loaderGLTF = new GLTFLoader();
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private model: any;

  // Controls MouseMovement
  x : number = -700
  y : number = 50

  // Scene Properties
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private ambientLight!: THREE.AmbientLight;
  private light1!: THREE.PointLight;
  private light2!: THREE.PointLight;
  private light3!: THREE.PointLight;
  private light4!: THREE.PointLight;
  private directionalLight!: THREE.DirectionalLight;

  // Create Controls
  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(1,1);

    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.update();
  };

  //Create Scene
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFFFFF)
    this.loaderGLTF.load('assets/Final_NoAnima/Hous_Join.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position);

      this.model.position.y = 0
      this.model.rotation.y = -1.35
      this.scene.add(this.model);
    });
    
  //Camera Setup
  this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView
  )
  this.camera.position.x = 20;
  this.camera.position.y = 0;
  this.camera.position.z = 90;
  //Light
  const ambientLight = new THREE.AmbientLight(0xffffff  , 1.8);
  this.scene.add( ambientLight );

  // const pointLight = new THREE.PointLight( 0xffffff, , );
  // this.scene.add( pointLight );

  this.light1 = new THREE.PointLight(0xffffff , 1,);
  this.light1.position.set(0, 120, 200);
  this.scene.add(this.light1);
  }
  
  // MouseMovement Event Angular
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e:any) {
    if(e['screenX'] >= window.innerWidth*0.225 && e['screenY']-71 >= (window.innerHeight*0.175) && 
    e['screenX'] <= (window.innerWidth*0.225+window.innerWidth*0.55) && e['screenY']-71 <= (window.innerHeight*0.175+window.innerHeight*0.65)){
      if(this.inicio == true && e['screenX'] <= ((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= ((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.y = -2.3
        this.model.rotation.x =  -0.25
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] <= 1*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 2*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.y = -2.3
        this.model.rotation.x =0
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] <= 1*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 3*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.y = -2.3
        this.model.rotation.x =  0.5
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] <= 2*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 1*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.x =  -0.25
        this.model.rotation.y = -1.35
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] <= 2*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 3*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.x =  0.4
        this.model.rotation.y = -1.35
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] >= 3*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 1*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.x =  -0.25
        this.model.rotation.y = -1
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] >= 3*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 2*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.x =  0
        this.model.rotation.y = -1
        this.inicio = false
      }
      if(this.inicio == true && e['screenX'] >= 3*((window.innerWidth*0.58)/4)+window.innerWidth*0.225 && e['screenY'] <= 3*((window.innerHeight*0.7)/3)+window.innerHeight*0.29){
        this.model.rotation.x =  0.5
        this.model.rotation.y = -1
        this.inicio = false
      }
      // izquierda
      if(e['screenX'] < this.x && this.model.rotation.y >= -2.3){
        if ((Math.abs(this.x - e['screenX']))/800 < 0.05 && (Math.abs(this.x - e['screenX']))/800 > 0.00125){
          this.model.rotation.y -= (Math.abs(this.x - e['screenX']))/800;
        }
      }
      // derecha
      if(e['screenX'] > this.x && this.model.rotation.y <= -1){
        if ((Math.abs(e['screenX'] - this.x))/800 < 0.05 && (Math.abs(e['screenX'] - this.x))/800 > 0.00125){
          this.model.rotation.y += (Math.abs(e['screenX'] - this.x))/800;
        }
      }
      // arriba 
      if(e['screenY'] < this.y && this.model.rotation.x >= -0.25){
        if ((Math.abs(this.y - e['screenY']))/800 < 0.05 && (Math.abs(this.y - e['screenY']))/800 > 0.00125){
          this.model.rotation.x -= (Math.abs(this.y - e['screenY']))/800;
        }
      }
      // abajo
      if(e['screenY'] > this.y && this.model.rotation.x  <= 0.5){
        if ((Math.abs(e['screenY'] - this.y))/800 < 0.05 && (Math.abs(e['screenY'] - this.y))/800 > 0.00125){
          this.model.rotation.x += (Math.abs(e['screenY'] - this.y))/800;
        } 
      }
      this.y = e['screenY']
      this.x = e['screenX']
      console.log(e['screenX'])
      //  this.model.rotation.x += -0.001
      // console.log("z: ",this.model.rotation.z,"x: ",this.model.rotation.x,"y: ",this.model.rotation.y)
      // console.log("x: ",this.model.rotation.x,"y: ",this.model.rotation.y)
    }else this.inicio = true
  }

  // Main() 3D
  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: CasaComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      requestAnimationFrame(render);
    }());
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();
    this.createControls();
    this.startRenderingLoop();
    console.log(window.innerWidth,window.innerHeight)
  }

}