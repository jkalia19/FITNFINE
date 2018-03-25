angular.module('starter.services', [])
.factory('Accounts',function(){
 var accounts =[{
  id :'',
  name: '',
  weight:'',
  email: '',
  vORn: '',
 }];
 return {
  save:function(account){
    accounts.push(account);
    console.log(accounts);
  },
  exists:function(email){
    for(var i=0; i < accounts.length; i++){
      if(accounts[i].email == email){
        return true;
      }
    }
    return false;
  }
 };
})
.factory('Foods', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foods = [{
    id: 0,
    name: 'Onion',
    Text: 'Good in carbs and good in taste',
    calories:'10',
    protein:'0.9',
    face: 'img/onion.jpg'
  }, {
    id: 1,
    name: 'Cabbage',
    Text: 'Good for minerals and carbs',
    calories:'11.1',
    protein:'0.6',
    face: 'img/cabbage.jpg'
  }, {
    id: 2,
    name: 'Lettuce',
    Text: 'Low in fat and carbs',
    calories:'7.8',
    protein:'1',
    face: 'img/lettuce.jpg'
  }, {
    id: 3,
    name: 'Celery',
    Text: 'Good in vitamins an carbs',
    calories:'13.5',
    protein:'0.6',
    face: 'img/celery.jpg'
  }, {
    id: 4,
    name: 'Broccoli',
    Text: 'Good in protein and Carbs',
    calories:'21.8',
    protein:'2.3',
    face: 'img/broccoli.jpg'
  }, {
    id: 5,
    name: 'Potato',
    Text: 'Very High in Carbs',
    calories:'57',
    protein:'1',
    face: 'img/potato.jpg'
  }, {
    id: 6,
    name: 'Bell Peppers',
    Text: 'good in vitamins',
    calories:'17',
    protein:'0.9',
    face: 'img/bellpepper.jpg'
  }, {
    id: 7,
    name: 'Chicken',
    Text: 'Hogh in protein and goo in Carbs',
    calories:'124',
    protein:'26',
    face: 'img/chicken.jpg'
  }, {
    id: 8,
    name: 'Beef',
    Text: 'Very high in Protein and Fats',
    calories:'260',
    protein:'38',
    face: 'img/beef.jpg'
  }, {
    id: 9,
    name: 'Ham',
    Text: 'High in protein, fat and carbs',
    calories:'145',
    protein:'21',
    face: 'img/ham.jpeg'
  }, {
    id: 10,
    name: 'Bacon',
    Text: 'This is wicked good ice cream.',
    face: 'img/bacon.jpeg'
  }, {
    id: 11,
    name: 'Egg Whites',
    Text: 'Very High in protein',
    calories:'20',
    protein:'3.4',
    face: 'img/eggs.jpg'
  }, {
    id: 12,
    name: 'Cheese',
    Text: 'Parmesan is good in protein but high in fats, per piece amount',
    calories:'80',
    protein:'6',
    face: 'img/cheese.jpg'
  }, {
    id: 13,
    name: 'Butter',
    Text: 'Very High in Fats, 2 tblspoon amount',
    calories:'2',
    protein:'7',
    face: 'img/butter.jpeg'
  }, {
    id: 14,
    name: 'Milk',
    Text: 'All rounder liquid, 200ml amount',
    calories:'150',
    protein:'7',
    face: 'img/milk.jpeg'
  }, {
    id: 15,
    name: 'Bread',
    Text: 'This is wicked good ice cream.',
    face: 'img/bread.jpeg'
  }, {
    id: 16,
    name: 'Cucumber',
    Text: 'Good in water content',
    calories:'6.7',
    protein:'0.4',
    face: 'img/cucumber.jpg'
  }];

  return {
    all: function() {
      return foods;
    },
    get: function(foodId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
});
