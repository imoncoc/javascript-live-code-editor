const data = [
  {
      "bookable_seats": 12,
      "total_seats": 24,
      "tour_package_accommodation_is_inclusive": true,
      "tour_package_accommodation_options": [
          {
              "tour_package_accommodation_packages": [
                  {
                      "night_number": 2,
                      "per_night_room_price": 9000,
                      "tour_package_accommodation_package_id": 240
                  },
                  {
                      "night_number": 1,
                      "per_night_room_price": 9000,
                      "tour_package_accommodation_package_id": 240
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
                          "tour_package_meal_package_id": 205
                      }
                  ],
                  "2": [
                      {
                          "per_meal_package_price": 0,
                          "tour_package_meal_package_id": 204
                      }
                  ],
                  "3": [
                      {
                          "per_meal_package_price": 0,
                          "tour_package_meal_package_id": 203
                      }
                  ]
              }
          }
      ],
      "tour_package_guide_is_inclusive": true,
      "tour_package_guide_options": [],
      "tour_package_spot_entry_is_inclusive": true,
      "tour_package_spot_entry_options": [],
      "tour_package_transfer_is_inclusive": true,
      "tour_package_transfer_options": [],
      "tour_package_transportation_packages": [],
      "tour_package_type_id": 3,
      "tour_start_date": "2024-02-09"
  }
]

const ans = {
  "bookable_seats": "15",
  "total_seats": "30",
  "tour_package_accommodation_is_inclusive": true,
  "tour_package_accommodation_options": [
      {
          "package1": {
              "tour_package_accommodation_package_id": 242,
              "tour_package_accommodation_id": 1,
              "tour_package_accommodation_name": "Hotel Aranna",
              "tour_package_room_category_id": 1,
              "tour_package_room_category_name": "Standard",
              "tour_package_room_type_id": 1,
              "tour_package_room_type_name": "Couple",
              "is_room_shareable": false,
              "suitable_for_persons": 12,
              "bed_count": 12,
              "bed_configuration": "king",
              "per_night_room_price": 500
          }
      }
  ],
  "tour_package_food_is_inclusive": true,
  "tour_package_food_options": [
      {
          "day1": [
              {
                  "meal_package_id": 139,
                  "meal_type_id": 7,
                  "meal_type_name": "Buffet Lunch",
                  "food_items": {
                      "5": "Porota/Ruti"
                  },
                  "per_meal_package_price": 1000
              }
          ],
          "day2": [
              {
                  "meal_package_id": 194,
                  "meal_type_id": 7,
                  "meal_type_name": "Buffet Lunch",
                  "food_items": {
                      "5": "Porota/Ruti"
                  },
                  "per_meal_package_price": 1000
              }
          ]
      }
  ],
  "tour_package_guide_is_inclusive": true,
  "tour_package_guide_options": [
      {
          "package1": [
              {
                  "tour_package_guide_package_id": 46,
                  "number_of_guides_for_day": 12,
                  "total_guide_price_for_day": 14,
                  "day_number": 1
              }
          ]
      }
  ],
  "tour_package_spot_entry_is_inclusive": true,
  "tour_package_spot_entry_options": [],
  "tour_package_transfer_is_inclusive": true,
  "tour_package_transfer_options": [
      {
          "package1": [
              {
                  "tour_package_transfer_package_id": 81,
                  "tour_package_transfer_route": "Sajek",
                  "tour_package_transportation_mode_id": 4,
                  "tour_package_transportation_mode_name": "Motorcycle",
                  "tour_package_transportation_provider_id": 1,
                  "tour_package_transportation_provider_name": "Hanif",
                  "is_ac": false,
                  "trip_type": "ONE_WAY",
                  "per_vehicle_per_trip_price": 500,
                  "suitable_for_persons": 12
              },
              {
                  "tour_package_transfer_package_id": 80,
                  "tour_package_transfer_route": "Konglak Pahar",
                  "tour_package_transportation_mode_id": 3,
                  "tour_package_transportation_mode_name": "Chander Gari",
                  "tour_package_transportation_provider_id": 3,
                  "tour_package_transportation_provider_name": "Green Line",
                  "is_ac": true,
                  "trip_type": "ROUND_TRIP",
                  "per_vehicle_per_trip_price": 1000,
                  "suitable_for_persons": 8
              }
          ]
      }
  ],
  "tour_package_transportation_packages": [
      {
          "package1": {
              "tour_package_transportation_package_id": 66,
              "tour_package_transportation_route_id": 5,
              "tour_package_transportation_route_name": "Dhaka - Khagrachari - Dhaka",
              "tour_package_transportation_mode_id": 7,
              "tour_package_transportation_mode_name": "Minibus",
              "tour_package_transportation_brand_id": 2,
              "tour_package_transportation_brand_name": "Scanea",
              "tour_package_transportation_provider_id": 9,
              "tour_package_transportation_provider_name": "Saintmartin Paribahan",
              "trip_type": "ROUND_TRIP",
              "is_ac": false,
              "transportation_package_unit_price": 5000
          }
      }
  ],
  "tour_package_type_id": {
      "label": "Single Package",
      "value": 2
  },
  "tour_start_date": ""
}

const myPayload = {
  "bookable_seats": "15",
  "total_seats": "24",
  "tour_package_accommodation_is_inclusive": true,
  "tour_package_accommodation_options": {
      "day1": [
          {
              "tour_package_accommodation_package_id": 216,
              "tour_package_accommodation_id": 12,
              "tour_package_accommodation_name": "Hotel Truly Asia",
              "tour_package_room_category_id": 1,
              "tour_package_room_category_name": "Standard",
              "tour_package_room_type_id": 18,
              "tour_package_room_type_name": "Double/Triple Sharing Basis",
              "is_room_shareable": true,
              "suitable_for_persons": 2,
              "bed_count": 1,
              "bed_configuration": "king",
              "per_night_room_price": 4000
          },
          {
              "tour_package_accommodation_package_id": 222,
              "tour_package_accommodation_id": 13,
              "tour_package_accommodation_name": "Hotel Ratnagiri",
              "tour_package_room_category_id": 1,
              "tour_package_room_category_name": "Standard",
              "tour_package_room_type_id": 18,
              "tour_package_room_type_name": "Double/Triple Sharing Basis",
              "is_room_shareable": true,
              "suitable_for_persons": 2,
              "bed_count": 1,
              "bed_configuration": "king",
              "per_night_room_price": 4000
          }
      ]
  },
  "tour_package_food_is_inclusive": true,
  "tour_package_food_options": {
      "day1": [
          {
              "meal_package_id": 191,
              "meal_type_id": 3,
              "meal_type_name": "Breakfast",
              "food_items": [
                  {
                      "food_item_id": 2,
                      "food_item_name": "Dal"
                  },
                  {
                      "food_item_id": 5,
                      "food_item_name": "Porota/Ruti"
                  },
                  {
                      "food_item_id": 9,
                      "food_item_name": "Egg Omlet"
                  },
                  {
                      "food_item_id": 43,
                      "food_item_name": "Mixed Vegetable "
                  },
                  {
                      "food_item_id": 71,
                      "food_item_name": "Mineral Water"
                  },
                  {
                      "food_item_id": 72,
                      "food_item_name": "Tea"
                  }
              ],
              "per_meal_package_price": 0
          },
          {
              "meal_package_id": 192,
              "meal_type_id": 1,
              "meal_type_name": "Lunch",
              "food_items": [
                  {
                      "food_item_id": 1,
                      "food_item_name": "Rice"
                  },
                  {
                      "food_item_id": 2,
                      "food_item_name": "Dal"
                  },
                  {
                      "food_item_id": 8,
                      "food_item_name": "Chicken Curry"
                  },
                  {
                      "food_item_id": 16,
                      "food_item_name": "Salad"
                  },
                  {
                      "food_item_id": 43,
                      "food_item_name": "Mixed Vegetable "
                  },
                  {
                      "food_item_id": 71,
                      "food_item_name": "Mineral Water"
                  }
              ],
              "per_meal_package_price": 250
          },
          {
              "meal_package_id": 193,
              "meal_type_id": 2,
              "meal_type_name": "Dinner",
              "food_items": [
                  {
                      "food_item_id": 16,
                      "food_item_name": "Salad"
                  },
                  {
                      "food_item_id": 23,
                      "food_item_name": "Chicken B.B.Q "
                  },
                  {
                      "food_item_id": 28,
                      "food_item_name": "Beef Kabab "
                  },
                  {
                      "food_item_id": 43,
                      "food_item_name": "Mixed Vegetable "
                  },
                  {
                      "food_item_id": 46,
                      "food_item_name": "Fried Rice "
                  },
                  {
                      "food_item_id": 71,
                      "food_item_name": "Mineral Water"
                  }
              ],
              "per_meal_package_price": 300
          }
      ]
  },
  "tour_package_guide_is_inclusive": true,
  "tour_package_guide_options": {
      "day1": [
          {
              "tour_package_guide_package_id": 49,
              "number_of_guides_for_day": 2,
              "total_guide_price_for_day": 500,
              "day_number": 5
          }
      ]
  },
  "tour_package_spot_entry_is_inclusive": true,
  "tour_package_spot_entry_options": {
      "day1": [
          {
              "spot_entry_package_id": 50,
              "activity": {
                  "activity_id": 85,
                  "activity_name": "Arrival Kathmandu",
                  "activity_short_location": "Nepal",
                  "activity_type_name": "Reporting",
                  "activity_images": [
                      {
                          "activity_image_id": 87,
                          "activity_image_file_name": "Screenshot 2024-01-29 at 2.55.21 PM.png",
                          "activity_image_url": "https://ghuddy-dev-attachments.s3.ap-southeast-2.amazonaws.com/4504dc67-ad3e-4a65-9beb-6b77ecee1de5.png",
                          "activity_image_caption": null
                      }
                  ]
              },
              "remark": "FOR_ADULT",
              "spot_entry_price_per_person": 500
          }
      ]
  },
  "tour_package_transfer_is_inclusive": true,
  "tour_package_transfer_options": [],
  "tour_package_transportation_packages": [],
  "tour_package_type_id": {
      "label": "Friends",
      "value": 26
  },
  "tour_start_date": [
      [
          "Feb 09, 24",
          "Feb 10, 24"
      ],
      [
          "Feb 10, 24",
          "Feb 11, 24"
      ]
  ]
}

const SinglePayloadData = {
  "bookable_seats": 15,
  "total_seats": 30,
  "tour_package_accommodation_is_inclusive": true,
  "tour_package_accommodation_options": [
    {
      "tour_package_accommodation_packages": [
        {
          "night_number": 1,
          "per_night_room_price": 500,
          "tour_package_accommodation_package_id": 242
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
            "per_meal_package_price": 1000,
            "tour_package_meal_package_id": 139
          }
        ],
        "2": [
          {
            "per_meal_package_price": 1000,
            "tour_package_meal_package_id": 194
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
          "day_number": 1,
          "tour_package_guide_package_id": 46,
          "tour_package_guide_package_price": 14
        }
      ]
    }
  ],
  "tour_package_spot_entry_is_inclusive": true,
  "tour_package_spot_entry_options": [
    {
      "tour_package_spot_entry_packages": [
        {
          "tour_package_spot_entry_package_id": 56,
          "spot_entry_price_per_person": 777
        },
        {
          "tour_package_spot_entry_package_id": 55,
          "spot_entry_price_per_person": 999
        }
      ]
    }
  ],
  "tour_package_transfer_is_inclusive": true,
  "tour_package_transfer_options": [
    {
      "tour_package_transfer_packages": [
        {
          "tour_package_transfer_package_id": 81,
          "per_vehicle_per_trip_price": 500
        },
        {
          "tour_package_transfer_package_id": 80,
          "per_vehicle_per_trip_price": 1000
        }
      ]
    }
  ],
  "tour_package_transportation_packages": [
    {
      "tour_package_transportation_package_id": 66,
      "transportation_package_unit_price": 5000
    }
  ],
  "tour_package_type_id": 2,
  "tour_start_date": "2024-02-09"
}

console.log("data: ", data)
console.log("ans: ", ans)
console.log("myPayload: ", myPayload)
console.log("SinglePayloadData: ", SinglePayloadData)


const tour_package_accommodation_packages =  [
          {
              "night_number": 2,
              "per_night_room_price": 9000,
              "tour_package_accommodation_package_id": 240
          },
          {
              "night_number": 1,
              "per_night_room_price": 9000,
              "tour_package_accommodation_package_id": 240
          }
      ]

      console.log(tour_package_accommodation_packages)

    const payloadSubmitted = {
      "available_tour_packages": [
        {
          "bookable_seats": 15,
          "total_seats": 20,
          "tour_package_accommodation_is_inclusive": true,
          "tour_package_accommodation_options": [
            {
              "tour_package_accommodation_packages": [
                {
                  "night_number": 1,
                  "per_night_room_price": 9000,
                  "tour_package_accommodation_package_id": 240
                },
                {
                  "night_number": 2,
                  "per_night_room_price": 9000,
                  "tour_package_accommodation_package_id": 240
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
                    "tour_package_meal_package_id": 204
                  }
                ],
                "2": [
                  {
                    "per_meal_package_price": 0,
                    "tour_package_meal_package_id": 205
                  }
                ],
                "3": [
                  {
                    "per_meal_package_price": 0,
                    "tour_package_meal_package_id": 202
                  }
                ]
              }
            }
          ],
          "tour_package_guide_is_inclusive": true,
          "tour_package_guide_options": [],
          "tour_package_spot_entry_is_inclusive": true,
          "tour_package_spot_entry_options": [],
          "tour_package_transfer_is_inclusive": true,
          "tour_package_transfer_options": [],
          "tour_package_transportation_packages": [],
          "tour_package_type_id": 4,
          "tour_start_date": "2024-02-08"
        }
      ],
      "requestId": "string",
      "subscribed_tour_id": 93
    }

    console.log(payloadSubmitted)

    const payloadSummitted2 = {
      "available_tour_packages": [
          {
              "bookable_seats": 18,
              "total_seats": 30,
              "tour_package_accommodation_is_inclusive": true,
              "tour_package_accommodation_options": [
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          }
                      ]
                  },
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
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
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "2": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "3": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "4": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
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
                              "day_number": 1,
                              "tour_package_guide_package_id": 32,
                              "tour_package_guide_package_price": 3
                          }
                      ]
                  }
              ],
              "tour_package_spot_entry_is_inclusive": true,
              "tour_package_spot_entry_options": [
                  {
                      "tour_package_spot_entry_packages": [
                          {
                              "tour_package_spot_entry_package_id": 35,
                              "spot_entry_price_per_person": 55
                          }
                      ]
                  }
              ],
              "tour_package_transfer_is_inclusive": true,
              "tour_package_transfer_options": [
                  {
                      "tour_package_transfer_packages": [
                          {
                              "tour_package_transfer_package_id": 48,
                              "per_vehicle_per_trip_price": 544
                          }
                      ]
                  }
              ],
              "tour_package_transportation_packages": [
                  {
                      "tour_package_transportation_package_id": 43,
                      "transportation_package_unit_price": 436
                  }
              ],
              "tour_package_type_id": 14,
              "tour_start_date": "2024-02-08"
          },
          {
              "bookable_seats": 18,
              "total_seats": 30,
              "tour_package_accommodation_is_inclusive": true,
              "tour_package_accommodation_options": [
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          }
                      ]
                  },
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
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
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "2": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "3": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "4": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
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
                              "day_number": 1,
                              "tour_package_guide_package_id": 32,
                              "tour_package_guide_package_price": 3
                          }
                      ]
                  }
              ],
              "tour_package_spot_entry_is_inclusive": true,
              "tour_package_spot_entry_options": [
                  {
                      "tour_package_spot_entry_packages": [
                          {
                              "tour_package_spot_entry_package_id": 35,
                              "spot_entry_price_per_person": 55
                          }
                      ]
                  }
              ],
              "tour_package_transfer_is_inclusive": true,
              "tour_package_transfer_options": [
                  {
                      "tour_package_transfer_packages": [
                          {
                              "tour_package_transfer_package_id": 48,
                              "per_vehicle_per_trip_price": 544
                          }
                      ]
                  }
              ],
              "tour_package_transportation_packages": [
                  {
                      "tour_package_transportation_package_id": 43,
                      "transportation_package_unit_price": 436
                  }
              ],
              "tour_package_type_id": 14,
              "tour_start_date": "2024-02-09"
          },
          {
              "bookable_seats": 18,
              "total_seats": 30,
              "tour_package_accommodation_is_inclusive": true,
              "tour_package_accommodation_options": [
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          }
                      ]
                  },
                  {
                      "tour_package_accommodation_packages": [
                          {
                              "night_number": 1,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 3,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 2,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 4,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
                          },
                          {
                              "night_number": 5,
                              "per_night_room_price": 1234,
                              "tour_package_accommodation_package_id": 78
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
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "2": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "3": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
                              }
                          ],
                          "4": [
                              {
                                  "per_meal_package_price": 343,
                                  "tour_package_meal_package_id": 124
                              },
                              {
                                  "per_meal_package_price": 130,
                                  "tour_package_meal_package_id": 123
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
                              "day_number": 1,
                              "tour_package_guide_package_id": 32,
                              "tour_package_guide_package_price": 3
                          }
                      ]
                  }
              ],
              "tour_package_spot_entry_is_inclusive": true,
              "tour_package_spot_entry_options": [
                  {
                      "tour_package_spot_entry_packages": [
                          {
                              "tour_package_spot_entry_package_id": 35,
                              "spot_entry_price_per_person": 55
                          }
                      ]
                  }
              ],
              "tour_package_transfer_is_inclusive": true,
              "tour_package_transfer_options": [
                  {
                      "tour_package_transfer_packages": [
                          {
                              "tour_package_transfer_package_id": 48,
                              "per_vehicle_per_trip_price": 544
                          }
                      ]
                  }
              ],
              "tour_package_transportation_packages": [
                  {
                      "tour_package_transportation_package_id": 43,
                      "transportation_package_unit_price": 436
                  }
              ],
              "tour_package_type_id": 14,
              "tour_start_date": "2024-02-11"
          }
      ],
      "requestId": "string",
      "subscribed_tour_id": 57
  }

  console.log("payloadSummitted2: ", payloadSummitted2)

