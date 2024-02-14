


const payload = {
    "available_tour_packages": [
        {
            "bookable_seats": 15,
            "total_seats": 24,
            "tour_package_accommodation_is_inclusive": true,
            "tour_package_accommodation_options": [
                {
                    "tour_package_accommodation_packages": [
                        {
                            "night_number": 1,
                            "per_night_room_price": 21000,
                            "tour_package_accommodation_package_id": 252
                        },
                        {
                            "night_number": 2,
                            "per_night_room_price": 21000,
                            "tour_package_accommodation_package_id": 252
                        }
                    ]
                }
            ],
            "tour_package_food_is_inclusive": true,
            "tour_package_food_options": [
                {
                    "tour_package_meal_packages": {
                        "1": [
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 227
                            },
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 228
                            }
                        ],
                        "2": [
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 227
                            },
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 230
                            }
                        ],
                        "3": [
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 227
                            },
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 230
                            }
                        ]
                    }
                }
            ],
            "tour_package_guide_is_inclusive": true,
            "tour_package_guide_options": [
                {
                    "tour_package_guide_packages": [
                        {
                            "day_number": 2,
                            "tour_package_guide_package_id": 53,
                            "tour_package_guide_package_price": 500
                        },
                        {
                            "day_number": 3,
                            "tour_package_guide_package_id": 54,
                            "tour_package_guide_package_price": 600
                        }
                    ]
                }
            ],
            "tour_package_spot_entry_is_inclusive": true,
            "tour_package_spot_entry_options": [
                {
                    "tour_package_spot_entry_packages": [
                        {
                            "tour_package_spot_entry_package_id": 61,
                            "spot_entry_price_per_person": 500
                        },
                        {
                            "tour_package_spot_entry_package_id": 62,
                            "spot_entry_price_per_person": 400
                        },
                        {
                            "tour_package_spot_entry_package_id": 63,
                            "spot_entry_price_per_person": 900
                        }
                    ]
                }
            ],
            "tour_package_transfer_is_inclusive": true,
            "tour_package_transfer_options": [
                {
                    "tour_package_transfer_packages": [
                        {
                            "tour_package_transfer_package_id": 85,
                            "per_vehicle_per_trip_price": 0
                        }
                    ]
                }
            ],
            "tour_package_transportation_packages": [
                {
                    "tour_package_transportation_package_id": 70,
                    "transportation_package_unit_price": 0
                }
            ],
            "tour_package_type_id": 31,
            "tour_start_date": "2024-02-13"
        }
    ],
    "requestId": "string",
    "subscribed_tour_id": 100
}

const payloadMethod = {
    "available_tour_packages": [
        {
            "bookable_seats": 13,
            "total_seats": 20,
            "tour_package_accommodation_is_inclusive": true,
            "tour_package_accommodation_options": [
                {
                    "tour_package_accommodation_packages": [
                        {
                            "night_number": 1,
                            "per_night_room_price": 21000,
                            "tour_package_accommodation_package_id": 252
                        },
                        {
                            "night_number": 2,
                            "per_night_room_price": 10500,
                            "tour_package_accommodation_package_id": 253
                        }
                    ]
                }
            ],
            "tour_package_food_is_inclusive": true,
            "tour_package_food_options": [
                {
                    "tour_package_meal_packages": {
                        "additionalProp1": [
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 227
                            }
                        ],
                        "additionalProp2": [
                            {
                                "per_meal_package_price": 0,
                                "tour_package_meal_package_id": 228
                            }
                        ]
                    }
                }
            ],
            "tour_package_guide_is_inclusive": true,
            "tour_package_guide_options": {
                "tour_package_guide_packages": [
                    {
                        "day_number": 1,
                        "tour_package_guide_package_id": 53,
                        "tour_package_guide_package_price": 500
                    }
                ]
            },
            "tour_package_spot_entry_is_inclusive": true,
            "tour_package_spot_entry_options": [
                {
                    "tour_package_spot_entry_packages": [
                        {
                            "spot_entry_price_per_person": 500,
                            "tour_package_spot_entry_package_id": 61
                        },
                        {
                            "spot_entry_price_per_person": 400,
                            "tour_package_spot_entry_package_id": 62
                        }
                    ]
                }
            ],
            "tour_package_transfer_is_inclusive": true,
            "tour_package_transfer_options": [
                {
                    "tour_package_transfer_packages": [
                        {
                            "per_vehicle_per_trip_price": 0,
                            "tour_package_transfer_package_id": 85
                        }
                    ]
                }
            ],
            "tour_package_transportation_packages": {
                "tour_package_transfer_packages": [
                    {
                        "per_vehicle_per_trip_price": 0,
                        "tour_package_transfer_package_id": 70
                    },
                    {
                        "per_vehicle_per_trip_price": 0,
                        "tour_package_transfer_package_id": 71
                    }
                ]
            },
            "tour_package_type_id": 31,
            "tour_start_date": "2023-11-14"
        }
    ],
    "requestId": "1234",
    "subscribed_tour_id": 100
}

const date = [
    [
        "Dec 13, 24",
        "Feb 14, 24"
    ]
]

console.log(date[0][0])

const dateFormatter = (inputDate) =>  {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

console.log(dateFormatter(date[0][0]))
