// Tour Schedule Payload design.

const firstSchedule = {
  date: "",
  start_date: "2024-02-17",
  end_date: "2024-02-20",
  package_type: { label: "Couple Package", value: 1 },
  total_seat: 20,
  bookable_seat: 14,
};

const tourSchedule = {
  package_name: { label: "Couple package", id: 20 },
  "2024-02-14": {
    end_date: "2024-02-17",
    total_seat: 20,
    bookable_seat: 12,
    tour_package_accommodation_options: [
      {
        tour_package_accommodation_packages: [
          {
            night_number: 1,
            per_night_room_price: 21000,
            tour_package_accommodation_package_id: 252,
          },
          {
            night_number: 2,
            per_night_room_price: 10500,
            tour_package_accommodation_package_id: 253,
          },
        ],
      },
    ],
    tour_package_food_options: [
      {
        tour_package_meal_packages: {
          additionalProp1: [
            {
              per_meal_package_price: 200,
              tour_package_meal_package_id: 1,
            },
          ],
          additionalProp2: [
            {
              per_meal_package_price: 200,
              tour_package_meal_package_id: 1,
            },
          ],
          additionalProp3: [
            {
              per_meal_package_price: 200,
              tour_package_meal_package_id: 1,
            },
          ],
        },
      },
    ],
    tour_package_guide_options: [
      {
        tour_package_guide_packages: [
          {
            day_number: 1,
            tour_package_guide_package_id: 1,
            tour_package_guide_package_price: 1000,
          },
        ],
      },
    ],
    tour_package_spot_entry_options: [
      {
        tour_package_spot_entry_packages: [
          {
            spot_entry_price_per_person: 140,
            tour_package_spot_entry_package_id: 1,
          },
        ],
      },
    ],
    tour_package_transfer_options: [
      {
        tour_package_transfer_packages: [
          {
            per_vehicle_per_trip_price: 7000,
            tour_package_transfer_package_id: 1,
          },
        ],
      },
    ],
    tour_package_transportation_packages: [
      {
        tour_package_transportation_package_id: 1,
        transportation_package_unit_price: 1200,
      },
    ],
  },
  "2024-02-17": { end_date: "2024-02-17", total_seat: 20, bookable_seat: 12 },
  "2024-02-20": { end_date: "2024-02-17", total_seat: 20, bookable_seat: 12 },
  "2024-03-02": { end_date: "2024-02-17", total_seat: 20, bookable_seat: 12 },
};

const data = {
  date: "2024-02-14T10:00:45.000Z",
  packageType: {},
  totalSeat: "",
  bookableSeat: "",
  startDate: "",
  endDate: "",
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// console.log(addDays(data?.date, 2));

const newData = {
  startDate: "2024-02-14",
  endDate: "2024-02-17",
  packageType: {
    label: "Couple Package",
    value: 31,
  },
  totalSeat: "20",
  bookableSeat: "12",
};

const newTourSchedule = {
  "2024-02-17": {
    end_date: "2024-02-17",
    total_seat: 20,
    bookable_seat: 12,
    date: "2024-02-14T11:01:03.992Z",
  },
  "2024-02-20": {
    end_date: "2024-02-17",
    total_seat: 20,
    bookable_seat: 12,
    date: "2024-02-14T11:01:03.992Z",
  },
  "2024-03-02": {
    end_date: "2024-02-17",
    total_seat: 20,
    bookable_seat: 12,
    date: "2024-02-14T11:01:03.992Z",
  },
};

console.log(newTourSchedule);

console.log(new Date());


const aps = {[new Date()]: "Hello"}

console.log(aps)



