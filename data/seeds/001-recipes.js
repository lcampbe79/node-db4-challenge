
exports.seed = function(knex) {

  return knex('recipe').insert([
    {name: 'Fribs'}, //1
    {name: 'Spiced Lentils'},//2
    {name: 'Jackfruit Tacos'}//3
  ]);
  
};
