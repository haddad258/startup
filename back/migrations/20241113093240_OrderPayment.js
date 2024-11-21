exports.up = function (knex) {
    // Add the extension only if it doesn't exist
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(() => knex.schema
            .createTable("paypal_transactions", function (table) {
                // Unique transaction ID (PayPal ID)
                table.uuid("id").notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.string("intent").defaultTo("authorize");
                table.string("state");
                table.string("cart");
                
                // Payer info (nested)
                table.string("payer_payment_method");
                table.string("payer_status");
                table.string("payer_email");
                table.string("payer_first_name");
                table.string("payer_last_name");
                table.string("payer_id");
                table.string("payer_country_code");
                
                // Shipping address (nested)
                table.string("shipping_recipient_name");
                table.string("shipping_line1");
                table.string("shipping_city");
                table.string("shipping_state");
                table.string("shipping_postal_code");
                table.string("shipping_country_code");

                // Transaction amount (nested)
                table.decimal("amount_total", 10, 2);
                table.string("amount_currency");
                table.decimal("amount_subtotal", 10, 2);
                table.decimal("amount_tax", 10, 2);
                table.decimal("amount_shipping", 10, 2);
                table.decimal("amount_handling_fee", 10, 2);
                table.decimal("amount_shipping_discount", 10, 2);
                table.decimal("amount_insurance", 10, 2);
                
                // Transaction description, invoice number
                table.string("transaction_description");
                table.string("invoice_number");

                // Sale-related resources (nested)
                table.string("sale_state");
                table.decimal("sale_amount_total", 10, 2);
                table.string("sale_amount_currency");
                table.string("sale_payment_mode");
                table.string("sale_protection_eligibility");
                table.string("sale_protection_eligibility_type");
                table.decimal("sale_transaction_fee_value", 10, 2);
                table.string("sale_transaction_fee_currency");
                table.timestamp("sale_create_time");
                table.timestamp("sale_update_time");

                // Timestamps for the PayPal transaction
            
                // Links to PayPal APIs
                table.string("payment_links");
                table.string("sale_links");

                // Foreign key references for orders and customers
                table.uuid('ordersId').references('id').inTable('orders').onDelete('CASCADE');
                table.uuid('customerId').references('id').inTable('customers').onDelete('CASCADE');
                table.timestamps(true, true);  // Created at and updated at timestamps
            })
        );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("paypal_transactions");
};
