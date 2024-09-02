const promise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
      resolve('Success!');
    } else {
      reject('Failed!');
    }
  });
  
  promise
    .then((message) => {
      console.log(message);  
    })
    .catch((error) => {
      console.error(error);
    });
  