function history(action, data, customer, format, user, idhistory) {
  const event = { action: action, fields: [data] };

  app.db.transaction(async (trx) => {
    try {
      await trx.table("history").insert({
        id: idhistory,
        format: format,
        customer: customer,
        users: user,
        event: JSON.stringify(event),
      });
      await trx.commit();
    } catch (err) {
      await trx.rollback();
      console.error("Transaction failed:", err);
    }
  });
}
//    history(action, data, customer, format, user, idhistory);
// this functions will be used on logger applications 