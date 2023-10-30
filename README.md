# algorithm-mastermind
> 这个仓库旨在学习和掌握算法，包括各种经典的算法题目、解法和优化技巧。

## Getting Started

`pnpm install` 恢复依赖项

`pnpm test` 执行单元测试

### 数组

#### 寻找中心索引

[《寻找中心索引》](https://www.yuque.com/aiden-0wweb/ahvz3x/ycp5vsr6l0t8fp16?singleDoc#)

#### 搜索插入位置

[《搜索插入位置》](https://www.yuque.com/aiden-0wweb/ahvz3x/grnmtywvv3w9yz25?singleDoc#)

#### 合并区间

该算法用来处理二维区间数组中的区间重叠问题,例如`[[1,4], [2, 8]]`就是一个重叠区间,合并为`[[1, 8]]`

代码路径: `src/array/merge-overlap-intervals/merge-overlap-intervals.ts`

##### 业务场景

会议安排：在会议室预定或时间安排中，可能存在多个会议或事件的时间区间有重叠的情况。针对这种情况，可以使用合并区间算法将重叠的时间段合并为一个时间段，以便更好地管理和安排会议或事件。

任务调度：在任务调度和资源分配中，可能存在多个任务或作业的执行时间区间有重叠的情况。通过使用合并区间算法，可以合并重叠的任务时间段，以优化资源利用、避免冲突和提高任务执行效率。

订单处理：在电子商务平台或物流系统中，可能存在多个订单的发货时间区间有重叠的情况。通过使用合并区间算法，可以将重叠的发货时间段合并为一个时间段，以提高物流的效率和减少重复的操作。

时间段统计：在数据分析和统计中，可能需要对时间段数据进行合并和统计。例如，统计某个时间段内的用户活跃度、销售量等指标，可以使用合并区间算法将相邻的时间段合并为一个统计区间，以便更好地分析和比较数据。

合并区间算法在实际业务场景中可以用于会议安排、任务调度、订单处理、时间段统计等多个领域。它有助于优化资源利用、避免冲突、提高效率和准确性。

#### 旋转矩阵

对一个二维矩阵进行旋转操作，通常是按照顺时针或逆时针方向将矩阵中的元素进行重新排列

代码路径: `src/array/rotate-matrix/rotate-matrix.ts`

##### 业务场景

图像处理：在图像处理和计算机视觉领域，旋转矩阵可以用于对图像进行旋转操作，例如对图像进行纠偏、角度矫正、景观图像的拍摄方向转换等。

游戏开发：在游戏开发中，旋转矩阵可以用于实现物体的旋转效果，如游戏角色、敌人、道具等的旋转。

地图导航：在地图导航应用中，旋转矩阵可以用于对地图进行旋转和方向变换，以适应不同的用户视角和地图方向。

机器人控制：在机器人控制和运动规划中，旋转矩阵可以用于描述和控制机器人的姿态和朝向。通过旋转矩阵，可以实现机器人的转向、旋转、定位等功能。

总之，旋转矩阵在实际业务场景中可以用于图像处理、游戏开发、地图导航、机器人控制等多个领域。它可以实现物体的旋转和方向变换，为用户提供更好的视觉体验和操作交互。
