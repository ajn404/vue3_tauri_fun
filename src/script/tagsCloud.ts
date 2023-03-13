import { useStore } from '@/stores';

class FibonacciSphere {
  #points;
  //一个私有属性，用于存储生成的坐标点数组。

  get points() {
    return this.#points;
  }
  //一个公共 getter 方法，用于获取生成的坐标点数组。

  constructor(N: number) {
    this.#points = [];

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y ** 2);
      const a = goldenAngle * i;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;

      this.#points.push([x, y, z]);
    }
  }
  //生成指定数量（N）的黄金角度序列坐标点，并将它们存储在 #points 属性中。生成坐标点的方法是通过计算球面坐标系中的 x、y、z 坐标来完成的。
}

//实现了一个标签云的效果，通过FibonacciSphere算法将标签布局在三维空间中，然后通过鼠标移动控制标签云的旋转和缩放。
export default class TagsCloud {
  #root; //标签云的根元素
  #size; //标签云的尺寸
  #sphere: FibonacciSphere; //用于创建标签云球形分布的对象
  #tags: NodeListOf<HTMLLIElement>; //标签元素的集合
  #rotationAxis: number[]; //标签云旋转轴的方向
  #rotationAngle; //标签云旋转角度
  #rotationSpeed; //，标签云旋转速度
  #frameRequestId: number; //用于保存requestAnimationFrame返回的ID，以便于停止动画

  constructor(root: HTMLElement) {
    this.#root = root;
    this.#size = this.#root.offsetWidth;
    this.#tags = root.querySelectorAll('.tag');
    this.#sphere = new FibonacciSphere(this.#tags.length);
    this.#rotationAxis = [1, 0, 0];
    this.#rotationAngle = 0;
    this.#rotationSpeed = 0;
    this.#frameRequestId = 0;

    this.#updatePositions();
    this.#initEventListeners();
    this.#root.classList.add('-loaded');
  }

  #initEventListeners() {
    window.addEventListener('resize', this.#updatePositions.bind(this));
    document.addEventListener('mousemove', this.#onMouseMove.bind(this));
  }

  #updatePositions() {
    const sin = Math.sin(this.#rotationAngle);
    const cos = Math.cos(this.#rotationAngle);
    const ux = this.#rotationAxis[0];
    const uy = this.#rotationAxis[1];
    const uz = this.#rotationAxis[2];

    const rotationMatrix = [
      [
        cos + ux ** 2 * (1 - cos),
        ux * uy * (1 - cos) - uz * sin,
        ux * uz * (1 - cos) + uy * sin,
      ],
      [
        uy * ux * (1 - cos) + uz * sin,
        cos + uy ** 2 * (1 - cos),
        uy * uz * (1 - cos) - ux * sin,
      ],
      [
        uz * ux * (1 - cos) - uy * sin,
        uz * uy * (1 - cos) + ux * sin,
        cos + uz ** 2 * (1 - cos),
      ],
    ];

    const N = this.#tags.length;

    for (let i = 0; i < N; i++) {
      const x = this.#sphere.points[i][0];
      const y = this.#sphere.points[i][1];
      const z = this.#sphere.points[i][2];

      const transformedX =
        rotationMatrix[0][0] * x +
        rotationMatrix[0][1] * y +
        rotationMatrix[0][2] * z;
      const transformedY =
        rotationMatrix[1][0] * x +
        rotationMatrix[1][1] * y +
        rotationMatrix[1][2] * z;
      const transformedZ =
        rotationMatrix[2][0] * x +
        rotationMatrix[2][1] * y +
        rotationMatrix[2][2] * z;

      const translateX = (this.#size * transformedX) / 2;
      const translateY = (this.#size * transformedY) / 2;
      const scale = (transformedZ + 2) / 3;
      const transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
      const opacity = (transformedZ + 1.5) / 2.5;

      this.#tags[i].style.transform = transform;
      this.#tags[i].style.opacity = opacity.toString();
    }
  }

  #onMouseMove(e: MouseEvent) {
    const rootRect = this.#root.getBoundingClientRect();
    const deltaX = e.clientX - (rootRect.left + this.#root.offsetWidth / 2);
    const deltaY = e.clientY - (rootRect.top + this.#root.offsetHeight / 2);
    const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
    const axis = [Math.sin(a), Math.cos(a), 0];
    const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;

    this.#rotationAxis = axis;
    this.#rotationSpeed = speed;
  }

  #update() {
    this.#rotationAngle += this.#rotationSpeed;

    this.#updatePositions();
  }

  start() {
    this.#update();

    this.#frameRequestId = requestAnimationFrame(this.start.bind(this));

    const store = useStore();
    if (!store.menu) {
      store.animationIds = this.#frameRequestId;
    }
  }

  stop() {
    cancelAnimationFrame(this.#frameRequestId);
  }
}
