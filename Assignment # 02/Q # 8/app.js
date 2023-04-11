 function save(obj) {
        for (let prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            localStorage.setItem(prop, JSON.stringify(obj[prop]));
          }
        }
      
        let newObj = {};
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          newObj[key] = JSON.parse(localStorage.getItem(key));
        }
        return newObj;
      }
      
      let myObject = {
        name: "John",
        age: 30,
        city: "New York",
      };
      let result = save(myObject);
      console.log(result);