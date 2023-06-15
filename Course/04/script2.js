const user = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    info: {
      name: 'Jake',
      lastName: 'Peralta',
      address: {
        street: 'Rua Dalvo Trombeta, 357 - Fundos',
        district: 'Xererê',
        city: 'Santana do Livramento',
        state: 'Rio Grande do Norte',
      },
    },
  };
  
  console.log(user['id']); // 99
  
  console.log(user.email); // jakeperalta@gmail.com
  
  console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
  
  console.log(user['info']['address']['city']); // Santana do Livramento