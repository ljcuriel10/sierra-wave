/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments('product_id').primary();
      table.string('product_title');
      table.text('product_description');
      table.decimal('product_price');
      table.integer("product_quantity_in_stock");
      table.boolean('product_best_seller');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products")
};
