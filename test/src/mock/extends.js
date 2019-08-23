// 导入random拓展方法
import { Random } from 'mockjs'

// random 扩展一个功能
Random.extend({
  'fruit': function() {
    const arr = ['榴莲','香蕉','苹果','菠萝蜜','椰子']
    return this.pick(arr)
  }
})
