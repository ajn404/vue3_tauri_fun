export module '@kitware/vtk.js/Rendering/Core/StickMapper' {
  export interface vtkStickMapper extends vtkMapper {
    //这两函数的定义有点问题
    setScaleArray(scaleArray: number[] | string): boolean;
    setOrientationArray(string): boolean;
  }
}
