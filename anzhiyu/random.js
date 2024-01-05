var posts=["2023/12/27/Go面经篇/","2023/12/26/Java基础篇/","2023/12/25/MySQL联合索引最左匹配原则详解/","2023/12/26/Java面经篇/","2024/01/04/SpringBoot3响应式编程详解/","2024/01/03/SpringCloud使用篇/","2024/01/03/接口限流实践篇/","2023/12/26/MySQL面经篇/","2023/12/27/计算机网络面经篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };