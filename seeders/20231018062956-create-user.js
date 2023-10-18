"use strict";

const { Shop, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const shops = await Shop.findAll();

    await queryInterface.bulkInsert("Users", [
      {
        name: "Ikbar",
        address: "Jember",
        age: 20,
        shopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jaya",
        address: "Jayapura",
        age: 34,
        shopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Edy",
        address: "Jember",
        age: 45,
        shopId: shops[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Naditya",
        address: "Bondowoso",
        age: 20,
        shopId: shops[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Calista",
        address: "Gresik",
        age: 19,
        shopId: shops[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await User.findAll();

    await queryInterface.bulkInsert(
      "Auths",
      [
        {
          email: "ikbar@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          confirmPassword:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jaya@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          confirmPassword:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "edy@mail.com",
          password:
            "$2a$12$DEYdP8xu/3y8Gq0fVx1we.IArBAJW8EMEhrzA9mC8M9xOxsb/DrDm",
          confirmPassword:
            "$2a$12$DEYdP8xu/3y8Gq0fVx1we.IArBAJW8EMEhrzA9mC8M9xOxsb/DrDm",
          userId: users[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "naditya@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          confirmPassword:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "calista@mail.com",
          password:
            "$2a$12$.bra7MxjtVng08xRdnyExerrJ2Znpg2TGMLW9O9zZ3cDR/PFrqoqW",
          confirmPassword:
            "$2a$12$.bra7MxjtVng08xRdnyExerrJ2Znpg2TGMLW9O9zZ3cDR/PFrqoqW",
          userId: users[4].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
