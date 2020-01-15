

export class CouponStatusConfig {
    statusEnum = ['未激活', '已激活', '已过期'];
    status = {
        未激活: '',
        已激活: 'green',
        已过期: 'red',
        // 已领完: '#f50',
    };
}
