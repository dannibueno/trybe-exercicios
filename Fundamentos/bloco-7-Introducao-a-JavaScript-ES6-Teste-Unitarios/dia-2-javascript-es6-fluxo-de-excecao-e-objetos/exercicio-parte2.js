const pedido = {
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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  

   //Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  //Note que o parâmetro da função já está sendo passado na chamada da função.

  const customerInfo = (order) => {
    return `Olá ${pedido.order.delivery.deliveryPerson}, entrega para: ${pedido.name}, Telefone: ${pedido.phoneNumber}, R.${pedido.address.street}, Numero ${pedido.address.number} AP: ${pedido.address.apartment}`;
  }
  console.log(customerInfo(pedido));


  /* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  Modifique o nome da pessoa compradora.  
  Modifique o valor total da compra para R$ 50,00. */

  const orderModifier = (order) => {
    const novoCliente = order.name = 'Luiz Silva';
    const pizzas = Object.keys(pedido.order.pizza);
    const bebida = pedido.order.drinks.coke.type;
    const total = pedido.payment.total = '50';

  return (`Olá ${novoCliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${total},00.`);
  }
  
  console.log(orderModifier(pedido));
