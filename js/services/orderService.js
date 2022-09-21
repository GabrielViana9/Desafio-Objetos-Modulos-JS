export function total(order) {
    if (order.discount > 0) {
        return order.basic - order.discount / 100 * order.basic;
    }
    return order.basic;
}