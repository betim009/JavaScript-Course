// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante
// e que precise enviar mensagens com as informações da compra. 
// Para isso, use o seguinte código:

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const entregador = order['order']['delivery']['deliveryPerson'];
    const cliente = order['name'];
    const tel = order['phoneNumber'];
    const rua = order['address']['street'];
    const numero = order['address']['number'];
    const ap = order['address']['apartment'];

    return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${tel}, ${rua}, Número: ${numero}, AP: ${ap}`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
  }
  
  console.log(orderModifier(order));