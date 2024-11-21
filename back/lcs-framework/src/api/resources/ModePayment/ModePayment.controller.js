const { db } = require('../../../models/models');

module.exports = {
  async createModePayment(req, res) {
    try {
      const newModePayment = await db.ModePayment.create(req.body);
      return res.status(201).json(newModePayment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },

  async getModePayment(req, res) {
    try {
      const ModePaymentList = await db.ModePayment.findAll();
      return res.status(200).json(ModePaymentList);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },

  async getModePaymentById(req, res) {
    try {
      const ModePaymentItem = await db.ModePayment.findByPk(req.params.id);
      if (!ModePaymentItem) {
        return res.status(404).json({ error: 'Not found' });
      }
      return res.status(200).json(ModePaymentItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },

  async updateModePayment(req, res) {
    try {
      const ModePaymentItem = await db.ModePayment.findByPk(req.params.id);
      if (!ModePaymentItem) {
        return res.status(404).json({ error: 'Not found' });
      }
      await ModePaymentItem.update(req.body);
      return res.status(200).json({ success: true, msg: 'Updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },

  async deleteModePayment(req, res) {
    try {
      const ModePaymentItem = await db.ModePayment.findByPk(req.params.id);
      if (!ModePaymentItem) {
        return res.status(404).json({ error: 'Not found' });
      }
      await ModePaymentItem.destroy();
      return res.status(200).json({ success: true, msg: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },

  async patchModePayment(req, res) {
    try {
      const ModePaymentItem = await db.ModePayment.findByPk(req.params.id);
      if (!ModePaymentItem) {
        return res.status(404).json({ error: 'Not found' });
      }
      await ModePaymentItem.update(req.body);
      return res.status(200).json({ success: true, msg: 'Patched successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal error' });
    }
  },
};
