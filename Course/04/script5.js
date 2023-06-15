const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  customer.lastName = 'Faria';
  console.log(customer); 
  
  customer['lastName'] = 'Silva';
  console.log(customer);