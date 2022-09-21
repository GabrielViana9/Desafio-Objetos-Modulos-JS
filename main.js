import Order from "./js/models/order.js";
import * as orderService from "./js/services/orderService.js";
import * as shippingService from "./js/services/shippingService.js";

const data /*Dados*/ = document.getElementById("dataInput").innerHTML.split('\n');
const order = new Order(data[0], Number(data[1]), Number(data[2]));

const totalValue = shippingService.shipment(orderService.total(order));

console.log(`Pedido Código = ${order.code}`);
console.log(`Valor Total = ${totalValue.toFixed(2)}`);