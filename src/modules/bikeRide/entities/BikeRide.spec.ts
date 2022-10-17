import { expect, test } from "vitest";
import { BikeRide } from "./BikeRide";
import { randomUUID } from "node:crypto";

test('Create an bike ride ', () => {
  const startDate = new Date()
  const endDate = new Date()

  endDate.setDate(endDate.getDate() + 1)

  const bikeRide = new BikeRide({
    id: randomUUID(),
    name: "Uma tarde muito louca",
    start_date: new Date(),
    start_date_registration: startDate,
    end_date_registration: endDate,
    start_place: "test"
  });

  expect(bikeRide).toBeInstanceOf(BikeRide)
  expect(bikeRide.id).not.toBeUndefined()
  expect(bikeRide.id).not.toEqual("")

});

test('Should not be able to create a bike tour with an end date earlier than the start date', () => {

  const startDate = new Date()
  const endDate = new Date()

  endDate.setDate(endDate.getDate() - 1)

  expect(() => {
    return new BikeRide({
      id: randomUUID(),
      name: "Uma tarde muito louca",
      start_date: new Date(),
      start_date_registration: startDate,
      end_date_registration: endDate,
      start_place: "test"
    });
  }).toThrow()

});
