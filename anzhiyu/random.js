var posts=["2023/12/26/Java基础篇/","2023/12/25/MySQL联合索引最左匹配原则详解/","2023/12/26/MySQL面经篇/","2023/12/26/Java面经篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };