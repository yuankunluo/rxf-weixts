/*----------------------------------------文件服务器地址----------------------------------------*/
// export const FILE_SERVE_URL = 'http://ross.ld2018.com';
// export const FILE_SERVE_URL = 'http://www.ldsuit.com/'; // 文件服务:测试环境或前段文件分离时使用，否则付为空值
export const FILE_SERVE_URL = '';
/*----------------------------------------后台Api地址----------------------------------------*/
// 默认衣链云接口
export const APP_VERSION_NET_URL = 'http://cloudpf.weunit.cn/index.php/cloudpf/'; // 测试环境
export const APP_ONLINE_NET_URL = 'http://cloudpf.weunit.cn/index.php/cloudpf/'; // 线上环境
// 默认接口平台
export const APP_VERSION_SERVE_URL = 'http://59.41.187.99:6790/ross/post/'; // 测试环境
export const APP_ONLINE_SERVE_URL = 'http://59.41.187.99:6790/ross/post/'; // 线上环境
// export const APP_VERSION_SERVE_URL = 'http://192.168.2.188:5414/ross/post/'; // 测试环境
// export const APP_ONLINE_SERVE_URL = 'http://192.168.3.100:6790/ross/post/'; // 线上环境
export const DEFAULT_AVATAR = './assets/images/default_goods_image_240.png'; // 用户默认头像
export const DEFAULT_GOODS = './assets/images/default_goods_image_240.png'; // 默认商品图
export const DEFAULT_NUM = '0'; // 默认数量
export const DEFAULT_VAL = '无'; // 默认值
export const PAGE_SIZE = 5; // 默认分页大小
export const IMAGE_SIZE = 1024; // 拍照/从相册选择照片压缩大小
export const QUALITY_SIZE = 94; // 图像压缩质量，范围为0 - 100
export const REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
export const IS_DEBUG = true; // 是否开发(调试)模式