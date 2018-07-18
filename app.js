var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('\u9690\u79c1\u653f\u7b56\u000d\u000a\u672c\u5e94\u7528\u5c0a\u91cd\u5e76\u4fdd\u62a4\u6240\u6709\u4f7f\u7528\u670d\u52a1\u7528\u6237\u7684\u4e2a\u4eba\u9690\u79c1\u6743\u3002\u4e3a\u4e86\u7ed9\u60a8\u63d0\u4f9b\u66f4\u51c6\u786e\u3001\u66f4\u6709\u4e2a\u6027\u5316\u7684\u670d\u52a1\uff0c\u672c\u5e94\u7528\u4f1a\u6309\u7167\u672c\u9690\u79c1\u6743\u653f\u7b56\u7684\u89c4\u5b9a\u4f7f\u7528\u548c\u62ab\u9732\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u3002\u4f46\u672c\u5e94\u7528\u5c06\u4ee5\u9ad8\u5ea6\u7684\u52e4\u52c9\u3001\u5ba1\u614e\u4e49\u52a1\u5bf9\u5f85\u8fd9\u4e9b\u4fe1\u606f\u3002\u9664\u672c\u9690\u79c1\u6743\u653f\u7b56\u53e6\u6709\u89c4\u5b9a\u5916\uff0c\u5728\u672a\u5f81\u5f97\u60a8\u4e8b\u5148\u8bb8\u53ef\u7684\u60c5\u51b5\u4e0b\uff0c\u672c\u5e94\u7528\u4e0d\u4f1a\u5c06\u8fd9\u4e9b\u4fe1\u606f\u5bf9\u5916\u62ab\u9732\u6216\u5411\u7b2c\u4e09\u65b9\u63d0\u4f9b\u3002\u672c\u5e94\u7528\u4f1a\u4e0d\u65f6\u66f4\u65b0\u672c\u9690\u79c1\u6743\u653f\u7b56\u3002\u0020\u60a8\u5728\u540c\u610f\u672c\u5e94\u7528\u670d\u52a1\u4f7f\u7528\u534f\u8bae\u4e4b\u65f6\uff0c\u5373\u89c6\u4e3a\u60a8\u5df2\u7ecf\u540c\u610f\u672c\u9690\u79c1\u6743\u653f\u7b56\u5168\u90e8\u5185\u5bb9\u3002\u672c\u9690\u79c1\u6743\u653f\u7b56\u5c5e\u4e8e\u672c\u5e94\u7528\u670d\u52a1\u4f7f\u7528\u534f\u8bae\u4e0d\u53ef\u5206\u5272\u7684\u4e00\u90e8\u5206\u3002\u000d\u000a\u0031\u002e\u0020\u9002\u7528\u8303\u56f4\u000d\u000a\u0028\u0061\u0029\u0020\u5728\u60a8\u6ce8\u518c\u672c\u5e94\u7528\u5e10\u53f7\u65f6\uff0c\u60a8\u6839\u636e\u672c\u5e94\u7528\u8981\u6c42\u63d0\u4f9b\u7684\u4e2a\u4eba\u6ce8\u518c\u4fe1\u606f\uff1b\u000d\u000a\u0028\u0062\u0029\u0020\u5728\u60a8\u4f7f\u7528\u672c\u5e94\u7528\u7f51\u7edc\u670d\u52a1\uff0c\u6216\u8bbf\u95ee\u672c\u5e94\u7528\u5e73\u53f0\u7f51\u9875\u65f6\uff0c\u672c\u5e94\u7528\u81ea\u52a8\u63a5\u6536\u5e76\u8bb0\u5f55\u7684\u60a8\u7684\u6d4f\u89c8\u5668\u548c\u8ba1\u7b97\u673a\u4e0a\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u60a8\u7684\u0049\u0050\u5730\u5740\u3001\u6d4f\u89c8\u5668\u7684\u7c7b\u578b\u3001\u4f7f\u7528\u7684\u8bed\u8a00\u3001\u8bbf\u95ee\u65e5\u671f\u548c\u65f6\u95f4\u3001\u8f6f\u786c\u4ef6\u7279\u5f81\u4fe1\u606f\u53ca\u60a8\u9700\u6c42\u7684\u7f51\u9875\u8bb0\u5f55\u7b49\u6570\u636e\uff1b\u000d\u000a\u0028\u0063\u0029\u0020\u672c\u5e94\u7528\u901a\u8fc7\u5408\u6cd5\u9014\u5f84\u4ece\u5546\u4e1a\u4f19\u4f34\u5904\u53d6\u5f97\u7684\u7528\u6237\u4e2a\u4eba\u6570\u636e\u3002\u000d\u000a\u60a8\u4e86\u89e3\u5e76\u540c\u610f\uff0c\u4ee5\u4e0b\u4fe1\u606f\u4e0d\u9002\u7528\u672c\u9690\u79c1\u6743\u653f\u7b56\uff1a\u000d\u000a\u0028\u0061\u0029\u0020\u60a8\u5728\u4f7f\u7528\u672c\u5e94\u7528\u5e73\u53f0\u63d0\u4f9b\u7684\u641c\u7d22\u670d\u52a1\u65f6\u8f93\u5165\u7684\u5173\u952e\u5b57\u4fe1\u606f\uff1b\u000d\u000a\u0028\u0062\u0029\u0020\u672c\u5e94\u7528\u6536\u96c6\u5230\u7684\u60a8\u5728\u672c\u5e94\u7528\u53d1\u5e03\u7684\u6709\u5173\u4fe1\u606f\u6570\u636e\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u53c2\u4e0e\u6d3b\u52a8\u3001\u6210\u4ea4\u4fe1\u606f\u53ca\u8bc4\u4ef7\u8be6\u60c5\uff1b\u000d\u000a\u0028\u0063\u0029\u0020\u8fdd\u53cd\u6cd5\u5f8b\u89c4\u5b9a\u6216\u8fdd\u53cd\u672c\u5e94\u7528\u89c4\u5219\u884c\u4e3a\u53ca\u672c\u5e94\u7528\u5df2\u5bf9\u60a8\u91c7\u53d6\u7684\u63aa\u65bd\u3002\u000d\u000a\u0032\u002e\u0020\u4fe1\u606f\u4f7f\u7528\u000d\u000a\u0028\u0061\u0029\u672c\u5e94\u7528\u4e0d\u4f1a\u5411\u4efb\u4f55\u65e0\u5173\u7b2c\u4e09\u65b9\u63d0\u4f9b\u3001\u51fa\u552e\u3001\u51fa\u79df\u3001\u5206\u4eab\u6216\u4ea4\u6613\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u9664\u975e\u4e8b\u5148\u5f97\u5230\u60a8\u7684\u8bb8\u53ef\uff0c\u6216\u8be5\u7b2c\u4e09\u65b9\u548c\u672c\u5e94\u7528\uff08\u542b\u672c\u5e94\u7528\u5173\u8054\u516c\u53f8\uff09\u5355\u72ec\u6216\u5171\u540c\u4e3a\u60a8\u63d0\u4f9b\u670d\u52a1\uff0c\u4e14\u5728\u8be5\u670d\u52a1\u7ed3\u675f\u540e\uff0c\u5176\u5c06\u88ab\u7981\u6b62\u8bbf\u95ee\u5305\u62ec\u5176\u4ee5\u524d\u80fd\u591f\u8bbf\u95ee\u7684\u6240\u6709\u8fd9\u4e9b\u8d44\u6599\u3002\u000d\u000a\u0028\u0062\u0029\u0020\u672c\u5e94\u7528\u4ea6\u4e0d\u5141\u8bb8\u4efb\u4f55\u7b2c\u4e09\u65b9\u4ee5\u4efb\u4f55\u624b\u6bb5\u6536\u96c6\u3001\u7f16\u8f91\u3001\u51fa\u552e\u6216\u8005\u65e0\u507f\u4f20\u64ad\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u3002\u4efb\u4f55\u672c\u5e94\u7528\u5e73\u53f0\u7528\u6237\u5982\u4ece\u4e8b\u4e0a\u8ff0\u6d3b\u52a8\uff0c\u4e00\u7ecf\u53d1\u73b0\uff0c\u672c\u5e94\u7528\u6709\u6743\u7acb\u5373\u7ec8\u6b62\u4e0e\u8be5\u7528\u6237\u7684\u670d\u52a1\u534f\u8bae\u3002\u000d\u000a\u0028\u0063\u0029\u0020\u4e3a\u670d\u52a1\u7528\u6237\u7684\u76ee\u7684\uff0c\u672c\u5e94\u7528\u53ef\u80fd\u901a\u8fc7\u4f7f\u7528\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u5411\u60a8\u63d0\u4f9b\u60a8\u611f\u5174\u8da3\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5411\u60a8\u53d1\u51fa\u4ea7\u54c1\u548c\u670d\u52a1\u4fe1\u606f\uff0c\u6216\u8005\u4e0e\u672c\u5e94\u7528\u5408\u4f5c\u4f19\u4f34\u5171\u4eab\u4fe1\u606f\u4ee5\u4fbf\u4ed6\u4eec\u5411\u60a8\u53d1\u9001\u6709\u5173\u5176\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u4fe1\u606f\uff08\u540e\u8005\u9700\u8981\u60a8\u7684\u4e8b\u5148\u540c\u610f\uff09\u3002\u000d\u000a\u0033\u002e\u0020\u4fe1\u606f\u62ab\u9732\u000d\u000a\u5728\u5982\u4e0b\u60c5\u51b5\u4e0b\uff0c\u672c\u5e94\u7528\u5c06\u4f9d\u636e\u60a8\u7684\u4e2a\u4eba\u610f\u613f\u6216\u6cd5\u5f8b\u7684\u89c4\u5b9a\u5168\u90e8\u6216\u90e8\u5206\u7684\u62ab\u9732\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff1a\u000d\u000a\u0028\u0061\u0029\u0020\u7ecf\u60a8\u4e8b\u5148\u540c\u610f\uff0c\u5411\u7b2c\u4e09\u65b9\u62ab\u9732\uff1b\u000d\u000a\u0028\u0062\u0029\u4e3a\u63d0\u4f9b\u60a8\u6240\u8981\u6c42\u7684\u4ea7\u54c1\u548c\u670d\u52a1\uff0c\u800c\u5fc5\u987b\u548c\u7b2c\u4e09\u65b9\u5206\u4eab\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff1b\u000d\u000a\u0028\u0063\u0029\u0020\u6839\u636e\u6cd5\u5f8b\u7684\u6709\u5173\u89c4\u5b9a\uff0c\u6216\u8005\u884c\u653f\u6216\u53f8\u6cd5\u673a\u6784\u7684\u8981\u6c42\uff0c\u5411\u7b2c\u4e09\u65b9\u6216\u8005\u884c\u653f\u3001\u53f8\u6cd5\u673a\u6784\u62ab\u9732\uff1b\u000d\u000a\u0028\u0064\u0029\u0020\u5982\u60a8\u51fa\u73b0\u8fdd\u53cd\u4e2d\u56fd\u6709\u5173\u6cd5\u5f8b\u3001\u6cd5\u89c4\u6216\u8005\u672c\u5e94\u7528\u670d\u52a1\u534f\u8bae\u6216\u76f8\u5173\u89c4\u5219\u7684\u60c5\u51b5\uff0c\u9700\u8981\u5411\u7b2c\u4e09\u65b9\u62ab\u9732\uff1b\u000d\u000a\u0028\u0065\u0029\u0020\u5982\u60a8\u662f\u9002\u683c\u7684\u77e5\u8bc6\u4ea7\u6743\u6295\u8bc9\u4eba\u5e76\u5df2\u63d0\u8d77\u6295\u8bc9\uff0c\u5e94\u88ab\u6295\u8bc9\u4eba\u8981\u6c42\uff0c\u5411\u88ab\u6295\u8bc9\u4eba\u62ab\u9732\uff0c\u4ee5\u4fbf\u53cc\u65b9\u5904\u7406\u53ef\u80fd\u7684\u6743\u5229\u7ea0\u7eb7\uff1b\u000d\u000a\u0028\u0066\u0029\u0020\u5728\u672c\u5e94\u7528\u5e73\u53f0\u4e0a\u521b\u5efa\u7684\u67d0\u4e00\u4ea4\u6613\u4e2d\uff0c\u5982\u4ea4\u6613\u4efb\u4f55\u4e00\u65b9\u5c65\u884c\u6216\u90e8\u5206\u5c65\u884c\u4e86\u4ea4\u6613\u4e49\u52a1\u5e76\u63d0\u51fa\u4fe1\u606f\u62ab\u9732\u8bf7\u6c42\u7684\uff0c\u672c\u5e94\u7528\u6709\u6743\u51b3\u5b9a\u5411\u8be5\u7528\u6237\u63d0\u4f9b\u5176\u4ea4\u6613\u5bf9\u65b9\u7684\u8054\u7edc\u65b9\u5f0f\u7b49\u5fc5\u8981\u4fe1\u606f\uff0c\u4ee5\u4fc3\u6210\u4ea4\u6613\u7684\u5b8c\u6210\u6216\u7ea0\u7eb7\u7684\u89e3\u51b3\u3002\u000d\u000a\u0028\u0067\u0029\u0020\u5176\u5b83\u672c\u5e94\u7528\u6839\u636e\u6cd5\u5f8b\u3001\u6cd5\u89c4\u6216\u8005\u7f51\u7ad9\u653f\u7b56\u8ba4\u4e3a\u5408\u9002\u7684\u62ab\u9732\u3002\u000d\u000a\u0034\u002e\u0020\u4fe1\u606f\u5b58\u50a8\u548c\u4ea4\u6362\u000d\u000a\u672c\u5e94\u7528\u6536\u96c6\u7684\u6709\u5173\u60a8\u7684\u4fe1\u606f\u548c\u8d44\u6599\u5c06\u4fdd\u5b58\u5728\u672c\u5e94\u7528\u53ca\uff08\u6216\uff09\u5176\u5173\u8054\u516c\u53f8\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u4e9b\u4fe1\u606f\u548c\u8d44\u6599\u53ef\u80fd\u4f20\u9001\u81f3\u60a8\u6240\u5728\u56fd\u5bb6\u3001\u5730\u533a\u6216\u672c\u5e94\u7528\u6536\u96c6\u4fe1\u606f\u548c\u8d44\u6599\u6240\u5728\u5730\u7684\u5883\u5916\u5e76\u5728\u5883\u5916\u88ab\u8bbf\u95ee\u3001\u5b58\u50a8\u548c\u5c55\u793a\u3002\u000d\u000a\u0035\u002e\u0020\u0043\u006f\u006f\u006b\u0069\u0065\u7684\u4f7f\u7528\u000d\u000a\u0028\u0061\u0029\u0020\u5728\u60a8\u672a\u62d2\u7edd\u63a5\u53d7\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u7684\u60c5\u51b5\u4e0b\uff0c\u672c\u5e94\u7528\u4f1a\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u8bbe\u5b9a\u6216\u53d6\u7528\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u0020\uff0c\u4ee5\u4fbf\u60a8\u80fd\u767b\u5f55\u6216\u4f7f\u7528\u4f9d\u8d56\u4e8e\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u7684\u672c\u5e94\u7528\u5e73\u53f0\u670d\u52a1\u6216\u529f\u80fd\u3002\u672c\u5e94\u7528\u4f7f\u7528\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u53ef\u4e3a\u60a8\u63d0\u4f9b\u66f4\u52a0\u5468\u5230\u7684\u4e2a\u6027\u5316\u670d\u52a1\uff0c\u5305\u62ec\u63a8\u5e7f\u670d\u52a1\u3002\u000d\u000a\u0028\u0062\u0029\u0020\u60a8\u6709\u6743\u9009\u62e9\u63a5\u53d7\u6216\u62d2\u7edd\u63a5\u53d7\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u6d4f\u89c8\u5668\u8bbe\u7f6e\u7684\u65b9\u5f0f\u62d2\u7edd\u63a5\u53d7\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u3002\u4f46\u5982\u679c\u60a8\u9009\u62e9\u62d2\u7edd\u63a5\u53d7\u0063\u006f\u006f\u006b\u0069\u0065\u0073\uff0c\u5219\u60a8\u53ef\u80fd\u65e0\u6cd5\u767b\u5f55\u6216\u4f7f\u7528\u4f9d\u8d56\u4e8e\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u7684\u672c\u5e94\u7528\u7f51\u7edc\u670d\u52a1\u6216\u529f\u80fd\u3002\u000d\u000a\u0028\u0063\u0029\u0020\u901a\u8fc7\u672c\u5e94\u7528\u6240\u8bbe\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u6240\u53d6\u5f97\u7684\u6709\u5173\u4fe1\u606f\uff0c\u5c06\u9002\u7528\u672c\u653f\u7b56\u3002\u000d\u000a\u0036\u002e\u0020\u4fe1\u606f\u5b89\u5168\u000d\u000a\u0028\u0061\u0029\u0020\u672c\u5e94\u7528\u5e10\u53f7\u5747\u6709\u5b89\u5168\u4fdd\u62a4\u529f\u80fd\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u60a8\u7684\u7528\u6237\u540d\u53ca\u5bc6\u7801\u4fe1\u606f\u3002\u672c\u5e94\u7528\u5c06\u901a\u8fc7\u5bf9\u7528\u6237\u5bc6\u7801\u8fdb\u884c\u52a0\u5bc6\u7b49\u5b89\u5168\u63aa\u65bd\u786e\u4fdd\u60a8\u7684\u4fe1\u606f\u4e0d\u4e22\u5931\uff0c\u4e0d\u88ab\u6ee5\u7528\u548c\u53d8\u9020\u3002\u5c3d\u7ba1\u6709\u524d\u8ff0\u5b89\u5168\u63aa\u65bd\uff0c\u4f46\u540c\u65f6\u4e5f\u8bf7\u60a8\u6ce8\u610f\u5728\u4fe1\u606f\u7f51\u7edc\u4e0a\u4e0d\u5b58\u5728\u201c\u5b8c\u5584\u7684\u5b89\u5168\u63aa\u65bd\u201d\u3002\u000d\u000a\u0028\u0062\u0029\u0020\u5728\u4f7f\u7528\u672c\u5e94\u7528\u7f51\u7edc\u670d\u52a1\u8fdb\u884c\u7f51\u4e0a\u4ea4\u6613\u65f6\uff0c\u60a8\u4e0d\u53ef\u907f\u514d\u7684\u8981\u5411\u4ea4\u6613\u5bf9\u65b9\u6216\u6f5c\u5728\u7684\u4ea4\u6613\u5bf9\u000d\u000a\u0037\u002e\u672c\u9690\u79c1\u653f\u7b56\u7684\u66f4\u6539\u000d\u000a\u0028\u0061\u0029\u5982\u679c\u51b3\u5b9a\u66f4\u6539\u9690\u79c1\u653f\u7b56\uff0c\u6211\u4eec\u4f1a\u5728\u672c\u653f\u7b56\u4e2d\u3001\u672c\u516c\u53f8\u7f51\u7ad9\u4e2d\u4ee5\u53ca\u6211\u4eec\u8ba4\u4e3a\u9002\u5f53\u7684\u4f4d\u7f6e\u53d1\u5e03\u8fd9\u4e9b\u66f4\u6539\uff0c\u4ee5\u4fbf\u60a8\u4e86\u89e3\u6211\u4eec\u5982\u4f55\u6536\u96c6\u3001\u4f7f\u7528\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u54ea\u4e9b\u4eba\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4ee5\u53ca\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u900f\u9732\u8fd9\u4e9b\u4fe1\u606f\u3002\u000d\u000a\u0028\u0062\u0029\u672c\u516c\u53f8\u4fdd\u7559\u968f\u65f6\u4fee\u6539\u672c\u653f\u7b56\u7684\u6743\u5229\uff0c\u56e0\u6b64\u8bf7\u7ecf\u5e38\u67e5\u770b\u3002\u5982\u5bf9\u672c\u653f\u7b56\u4f5c\u51fa\u91cd\u5927\u66f4\u6539\uff0c\u672c\u516c\u53f8\u4f1a\u901a\u8fc7\u7f51\u7ad9\u901a\u77e5\u7684\u5f62\u5f0f\u544a\u77e5\u3002\u000d\u000a\u65b9\u62ab\u9732\u81ea\u5df1\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u5982\u8054\u7edc\u65b9\u5f0f\u6216\u8005\u90ae\u653f\u5730\u5740\u3002\u8bf7\u60a8\u59a5\u5584\u4fdd\u62a4\u81ea\u5df1\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u4ec5\u5728\u5fc5\u8981\u7684\u60c5\u5f62\u4e0b\u5411\u4ed6\u4eba\u63d0\u4f9b\u3002\u5982\u60a8\u53d1\u73b0\u81ea\u5df1\u7684\u4e2a\u4eba\u4fe1\u606f\u6cc4\u5bc6\uff0c\u5c24\u5176\u662f\u672c\u5e94\u7528\u7528\u6237\u540d\u53ca\u5bc6\u7801\u53d1\u751f\u6cc4\u9732\uff0c\u8bf7\u60a8\u7acb\u5373\u8054\u7edc\u672c\u5e94\u7528\u5ba2\u670d\uff0c\u4ee5\u4fbf\u672c\u5e94\u7528\u91c7\u53d6\u76f8\u5e94\u63aa\u65bd\u3002');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});