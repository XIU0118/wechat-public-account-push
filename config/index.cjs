/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf74a67829fde50eb',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '52b255436fa4a41f3bd4f7fa3e8c9bb2',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小鸡',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obVD55-wPVpyT7CKvvcLDYY6OG-o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OPDTP-I6Ne6qyj5Sk51qbY93ixJja8FLz9weOltBwU0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小鸡', year: '2005', date: '01-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我喜欢你已经有xxxx天了的配置
      customizedDateList: [
        // 喜欢的日子
        { keyword: 'love_day', date: '2021-01-18' },
        // 高考时间
        { keyword: 'marry_day', date: '2023-06-07' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obVD55yBqgKvZoyRy2i7fQAi_QJE',
    }
  ],

}

module.exports = USER_CONFIG

