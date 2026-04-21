import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  
  // Distortion
  float noise = snoise(uv * 3.0 + uTime * 0.2);
  float noise2 = snoise(uv * 5.0 - uTime * 0.15 + uMouse * 0.5);
  
  float f = snoise(uv * 2.0 + noise + noise2 * 0.5 + uTime * 0.1);
  
  // Colors (Dark to Gold)
  vec3 color1 = vec3(0.01, 0.01, 0.01); // Dark
  vec3 color2 = vec3(0.79, 0.66, 0.29); // #C9A84C Gold
  
  float mixVal = smoothstep(-1.0, 1.0, f);
  vec3 finalColor = mix(color1, color2, mixVal * 0.4); // extremely dark/subtle
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const LiquidPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(0, 0) }
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      // Interpolate mouse for smooth liquid reaction
      mat.uniforms.uMouse.value.x = THREE.MathUtils.lerp(mat.uniforms.uMouse.value.x, state.mouse.x, 0.05);
      mat.uniforms.uMouse.value.y = THREE.MathUtils.lerp(mat.uniforms.uMouse.value.y, state.mouse.y, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export const LiquidBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 mix-blend-screen z-0">
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        dpr={[1, 2]}
      >
        <LiquidPlane />
      </Canvas>
    </div>
  );
};
