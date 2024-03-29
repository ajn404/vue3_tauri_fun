### 三数之和

首先，将数组进行排序。

定义一个数组 res 存储答案，固定一个数 k，同时在其右边的数字中使用双指针 left 和 right，来找到所有满足 a + b + c = 0 的三元组。具体步骤如下：

对数组进行排序。
定义一个数组 res 存储答案。
遍历排序后的数组，固定一个数 k 作为三元组中的第一个数。
在 k 右边的数字中使用双指针 left 和 right，分别指向 k + 1 和数组最后一个数字。
当 left < right 时，执行循环：
判断 nums[k] + nums[left] + nums[right] 是否等于 0。
如果等于 0，将三个数字存入 res 中，并同时将 left 和 right 分别向内移动一位；
如果小于 0，将 left 向右移动一位；
如果大于 0，将 right 向左移动一位。
如果 nums[k] > 0，退出循环，因为此时 nums[k] 和右侧数字都大于 0，不可能存在满足 a + b + c = 0 的三元组。
如果当前的 k 与下一个 k 相等，则跳过。
注意：在代码实现中，需要特别注意去重。