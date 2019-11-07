
exports.seed = function(knex) {

  return knex('ingredients').insert([
    {name: 'Flaxseed Tempeh'}, //1
    {name: 'Lentils'},//2
    {name: 'Jackfruit'}//3
  ]);

};
