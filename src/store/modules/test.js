/* Description: 测试模块 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/20 */

export default {
  // 初始化state
  state: {
    name: 'ziJun',
    age: 20
  },

  // getters
  getters: {
    // 根据全局状态name,计算返回固定格式
    fullName(state) {
      return state.name + '_fullName';
    }
  },

  // mutations
  mutations: {
    // 测试变更
    CONSTRUCTION(state, obj) {
      state.name = 'hi ' + obj.firstName + obj.lastName;
    },

    RESETAGE(state, obj) {
      state.age = obj.age;
    }
  },

  // actions
  actions: {
    // let context = {commit: 'aaa', state: 'bbb'}
    // let {commit, state} = context;
    // first -> 'aaa' state -> 'bbb' 理解参数解构
    changeName({commit}, obj) {
      commit('RESETAGE', {age: 100});
      commit('CONSTRUCTION', obj);
    },
  }
}

