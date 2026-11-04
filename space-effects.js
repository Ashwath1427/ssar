/* Visual effects are illustrative; asteroid sizes and star locations are not to scale. */
window.SpaceEffects = {
  asteroidBelt(THREE, {inner, outer, count, rockSize, height=0}) {
    const geometry=new THREE.IcosahedronGeometry(1,0);
    const material=new THREE.MeshStandardMaterial({color:0xffffff,roughness:1});
    const rocks=new THREE.InstancedMesh(geometry,material,count);
    const dummy=new THREE.Object3D(),color=new THREE.Color();
    for(let i=0;i<count;i++){
      const angle=Math.random()*Math.PI*2;
      const r=Math.sqrt(inner*inner+Math.random()*(outer*outer-inner*inner));
      const size=rockSize*(.45+Math.random()*.9);
      dummy.position.set(Math.cos(angle)*r,height+(Math.random()-.5)*rockSize*5,Math.sin(angle)*r);
      dummy.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28);
      dummy.scale.set(size*(.7+Math.random()*.6),size*(.55+Math.random()*.4),size*(.7+Math.random()*.7));
      dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
      const shade=.4+Math.random()*.35;color.setRGB(shade*1.05,shade,shade*.9);rocks.setColorAt(i,color);
    }
    rocks.instanceMatrix.needsUpdate=true;if(rocks.instanceColor)rocks.instanceColor.needsUpdate=true;
    rocks.frustumCulled=false;return rocks;
  },
  starField(THREE, {count=1400, radius=150, spread=70, size=1.5, opacity=.8}={}) {
    const positions=new Float32Array(count*3),colors=new Float32Array(count*3);
    for(let i=0;i<count;i++){
      const angle=Math.random()*Math.PI*2, y=Math.random()*2-1, horizontal=Math.sqrt(1-y*y),r=radius+Math.random()*spread;
      positions[i*3]=Math.cos(angle)*horizontal*r;positions[i*3+1]=y*r;positions[i*3+2]=Math.sin(angle)*horizontal*r;
      const hue=Math.random(),brightness=.55+Math.random()*.45;
      colors[i*3]=brightness*(hue<.2?1:.78);colors[i*3+1]=brightness*(hue<.2?.88:.9);colors[i*3+2]=brightness;
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
    const material=new THREE.PointsMaterial({vertexColors:true,size,sizeAttenuation:false,transparent:true,opacity,depthWrite:false,fog:false});
    return new THREE.Points(geometry,material);
  }
};
