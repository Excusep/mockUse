// 导入模拟假数据的包
import Mock from 'mockjs'

// 模拟假数据接口
Mock.mock("/api/getList",'get',{
  state: 200,
  message: "获取数据成功",
  'data|1-5': [
    {
      id: '@increment()',
      name: '@first()',
      age: '@natural(0,100)',
      hobby: '@paragraph(1,100)'
    }
  ]
})

Mock.mock('/api/postList','post',function (option) {
  console.log(option)
  return Mock.mock({
    state: 200,
    message: '@paragraph(1,100)'
  })
})

Mock.mock(/\/api\/sendId\/(\d+)/,'get',function(option) {
  const res = /\/api\/sendId\/(\d+)/.exec(option.url)[1]
  return Mock.mock({
    state: res,
    message: '发送成功',
    'data|1-3': [{
      id: res,
      name: '@fruit()',
      type: 'frult',
      describe: 'sdasd',
      img: '@dataImage(75x75)'
    }]
  })
})
