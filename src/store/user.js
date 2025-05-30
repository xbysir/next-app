import { produce } from 'immer';
import { create } from 'zustand';

// 创建状态存储
const useUserStore = create((set) => ({
  userInfo: {
    name: 'zhangsan',
    age: 23,
  },
  token: 'S1',
  //更新整个对象
  updateUserInfo: (userInfo) => set({ userInfo }), //合并userInfo
  //更新对象中某个属性
  updateAge: (age) =>
    set(
      produce((state) => {
        state.userInfo.age = age;
      })
    ),
  //更新原始数据类型
  updateToken: (token) => set({ token }),
}));

export default useUserStore;
