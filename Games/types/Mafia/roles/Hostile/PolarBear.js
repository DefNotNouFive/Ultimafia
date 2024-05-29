const Role = require("../../Role");

module.exports = class PolarBear extends Role {
  constructor(player, data) {
    super("Polar Bear", player, data);
    this.alignment = "Independent";
    this.cards = [
      "VillageCore",
      "WinFourPolarisedDeaths",
      "Polariser",
      // easter egg interaction
      // "PenguinEater",
    ];
  }
};
