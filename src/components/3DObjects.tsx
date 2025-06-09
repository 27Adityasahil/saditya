import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingSkillSphere: React.FC<{ position: [number, number, number], skill: string, color: string, speed: number }> = ({ position, skill, color, speed }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.2;
      ref.current.rotation.x = clock.getElapsedTime() * 0.3;
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group position={position}>
      <Sphere ref={ref} args={[0.5, 16, 16]}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </Sphere>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

export const RotatingCube: React.FC<{ position: [number, number, number], size: number, color: string }> = ({ position, size, color }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Box ref={ref} position={position} args={[size, size, size]}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
    </Box>
  );
};

export const FloatingTorus: React.FC<{ position: [number, number, number], color: string }> = ({ position, color }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.5;
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Torus ref={ref} position={position} args={[0.6, 0.2, 16, 32]}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </Torus>
  );
};

export const SkillsScene: React.FC = () => {
  const skills = [
    { name: 'HTML', color: '#e34c26', position: [-3, 0, 0], speed: 0.5 },
    { name: 'CSS', color: '#264de4', position: [-1.5, 0, 1], speed: 0.7 },
    { name: 'JavaScript', color: '#f0db4f', position: [0, 0, 0], speed: 0.6 },
    { name: 'React', color: '#61dafb', position: [1.5, 0, 1], speed: 0.8 },
    { name: 'C++', color: '#00599c', position: [3, 0, 0], speed: 0.5 },
    { name: 'Java', color: '#f89820', position: [-2, 0, -1.5], speed: 0.7 },
    { name: 'Python', color: '#306998', position: [2, 0, -1.5], speed: 0.6 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {skills.map((skill, index) => (
        <FloatingSkillSphere 
          key={index}
          position={skill.position as [number, number, number]}
          skill={skill.name}
          color={skill.color}
          speed={skill.speed}
        />
      ))}
      
      <RotatingCube position={[0, -2, -3]} size={1} color="#6b46c1" />
      <FloatingTorus position={[2.5, -1.5, -2]} color="#3182ce" />
      <FloatingTorus position={[-2.5, -1.5, -2]} color="#e53e3e" />
    </>
  );
};