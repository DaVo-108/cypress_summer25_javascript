import { CarBlueprint } from "./car_blueprints.mjs";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();

const petrolCar = new CarBlueprint("Modrá", "1.2TSI", "Benzín", "Ropák");
dieselCar.logCarProperties();
petrolCar.logCarProperties();

petrolCar.color = "Bílá";
dieselCar.logCarProperties();
petrolCar.logCarProperties();
