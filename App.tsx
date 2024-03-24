import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import Model from './Model';
import useControls from 'r3f-native-orbitcontrols';

export default function App() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer}{...events}>
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]}/>
          <directionalLight position={[-1, 0, 0]} args={['white', 5]}/>
          <directionalLight position={[0, 1, 0]} args={['white', 5]}/>
          <directionalLight position={[0, -1, 0]} args={['white', 5]}/>
          <directionalLight position={[0, 0, 1]} args={['white', 5]}/>
          <directionalLight position={[0, 0, -1]} args={['white', 5]}/>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  modelContainer: {
    flex: 2,
  },
});
