export function shipment(order) {
    if (order < 100) {
        return order + 20;
    } else if (order < 200) {
        return order + 12;
    } else {
        return order;
    }
}