
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taco_toppings', function (table){
    table.increments();
    table.string('name');
    table.integer('price_in_cents')
    table.timestamp('time');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('taco_toppings');
};
