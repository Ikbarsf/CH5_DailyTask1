"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shops", [
      {
        name: "Toko Ikbar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Jaya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Kaliwates",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Kopma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Pasar Sewu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shops", null, {});
  },
};
