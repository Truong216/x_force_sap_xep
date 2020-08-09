import { Dimensions } from 'react-native';

export const WIDTH_DEVICE = Dimensions.get('window').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;
export const PADDING = 16;
export const OPTIONS = [
  {
    option: 'Quản lí',
    type: [
      {
        id: 1,
        icon: 'credit-card',
        title: 'Nạp tiền vào Dino Credit'
      },
      {
        id: 2,
        icon: 'heart',
        title: 'Khách sạn yêu thích',
      },
      {
        id: 3,
        icon: 'gift',
        title: 'Ưu đãi',
      },
      {
        id: 4,
        icon: 'user-plus',
        title: 'Danh bạ Dinogo',
      },
      {
        id: 5,
        icon: 'dollar-sign',
        title: 'Hoá đơn',
      },
    ],
  },
  {
    option: 'Ứng dụng dinogo',
    type: [
      {
        id: 6,
        icon: 'grid' ,
        title: 'Tiện ích'
      },
      {
        id: 7,
        icon: 'settings',
        title: 'Thiết lập'
      },
      {
        id: 8,
        icon: 'hexagon',
        title: 'Giới thiệu & Chia sẻ'
      },
    ],
  },
  {
    option: 'Trợ giúp',
    type: [
      {
        id: 9,
        icon: 'send',
        title: 'Chat với Dinogo'
      },
      {
        id: 10,
        icon: 'phone-call' ,
        title: 'Gọi tổng đài Dinogo'
      },
      {
        id: 11,
        icon: 'message-circle',
        title: 'Phản hồi'
      },
      {
        id: 12,
        icon: 'activity',
        title: 'Điều kiện hoàn huỷ'
      },
      {
        id: 13,
        icon: 'aperture',
        title: 'Điều kiện xuất hoá đơn VAT'
      },
      {
        id: 14,
        icon: 'help-circle',
        title: 'Hướng dẫn thanh toán trực tuyến'
      },
    ]
  }
]