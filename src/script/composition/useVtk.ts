//实现使用vtk的composition api
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

import { ElLoading } from 'element-plus';
import '@kitware/vtk.js/vtk.js';
// Load the rendering pieces we want to use (for both WebGL and WebGPU)
import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import '@kitware/vtk.js/Rendering/Profiles/Molecule'; // vtkSphereMapper + vtkStickMapper
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkPDBReader from '@kitware/vtk.js/IO/Misc/PDBReader';
import vtkSphereMapper from '@kitware/vtk.js/Rendering/Core/SphereMapper';
import vtkStickMapper from '@kitware/vtk.js/Rendering/Core/StickMapper';
//@ts-ignore
import vtkMoleculeToRepresentation from '@kitware/vtk.js/Filters/General/MoleculeToRepresentation.js';
export const useVtk = () => {
  const baseUrl = ref(import.meta.env.BASE_URL);

  nextTick(() => {
    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      background: [0, 0, 0],
    });
    const renderer = fullScreenRenderer.getRenderer();
    const renderWindow = fullScreenRenderer.getRenderWindow();

    const reader = vtkPDBReader.newInstance();
    const filter = vtkMoleculeToRepresentation.newInstance();
    const sphereMapper = vtkSphereMapper.newInstance();
    const stickMapper = vtkStickMapper.newInstance();
    const sphereActor = vtkActor.newInstance();
    const stickActor = vtkActor.newInstance();

    filter.setInputConnection(reader.getOutputPort());
    filter.setHideElements(['H']);

    // render sphere
    sphereMapper.setInputConnection(filter.getOutputPort(0));
    sphereMapper.setScaleArray(filter.getSphereScaleArrayName());
    sphereActor.setMapper(sphereMapper);

    stickMapper.setInputConnection(filter.getOutputPort(1));
    stickMapper.setScaleArray('stickScales');
    console.log(stickMapper);

    stickMapper.setOrientationArray('orientation');
    stickActor.setMapper(stickMapper);

    reader.setUrl(`${baseUrl.value}data/vtk/2LYZ.pdb`).then(() => {
      renderer.resetCamera();
      renderWindow.render();
    });

    renderer.addActor(sphereActor);
    renderer.addActor(stickActor);
    renderer.resetCamera();
    renderWindow.render();
  });
};
