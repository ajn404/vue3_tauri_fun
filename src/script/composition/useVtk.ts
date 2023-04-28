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
  //   console.log(vtk);
  //TODO:generate vtk
};
