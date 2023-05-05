//实现使用vtk的composition api
import { ref, onDeactivated, nextTick, type Ref, reactive } from 'vue';

import { ElLoadingService } from 'element-plus';
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
export const useVtk = (container: Ref<HTMLElement | null>) => {
  const baseUrl = ref(import.meta.env.BASE_URL);
  let instances: any = reactive({});

  const render = () => {
    if (container.value) {
      const loading = ElLoadingService({
        lock: true,
        text: 'Loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        // target: document.querySelector('#loading')
      });

      const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        background: [68 / 255, 14 / 255, 37 / 255],
        container: container?.value,
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
      sphereMapper.setInputConnection(filter.getOutputPort(0));
      sphereMapper.setScaleArray(filter.getSphereScaleArrayName());
      sphereActor.setMapper(sphereMapper);
      stickMapper.setInputConnection(filter.getOutputPort(1));
      stickMapper.setScaleArray('stickScales');
      stickMapper.setOrientationArray('orientation');
      stickActor.setMapper(stickMapper);
      reader.setUrl(`${baseUrl.value}data/vtk/2LYZ.pdb`).then(() => {
        renderer.resetCamera();
        renderWindow.render();
        loading.close();
      });
      renderer.addActor(sphereActor);
      renderer.addActor(stickActor);
      renderer.resetCamera();
      renderWindow.render();
      return {
        fullScreenRenderer,
        renderWindow,
        renderer,
        reader,
        filter,
        sphereMapper,
        stickMapper,
        sphereActor,
        stickActor,
      };
    }
  };

  onDeactivated(() => {
    console.log(100);

    if (instances.renderer) {
      const {
        fullScreenRenderer,
        renderWindow,
        renderer,
        reader,
        filter,
        sphereMapper,
        stickMapper,
        sphereActor,
        stickActor,
      } = instances;
      renderer.delete();
      filter.delete();
      sphereMapper.delete();
      stickMapper.delete();
      sphereActor.delete();
      stickActor.delete();
      reader.delete();
      renderWindow.delete();
      window.removeEventListener('resize', fullScreenRenderer.resize);
      fullScreenRenderer.delete();
    }
  });

  nextTick(() => {
    instances = render();
  });
};
