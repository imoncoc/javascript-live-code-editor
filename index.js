

const accomondation = {
    "accommodation_id": "",
    "room_category_id": "",
    "room_type_id": "",
    "per_night_room_price": "",
    "suitable_for_persons": "",
    "is_shareable": true,
    "number_of_beds": "",
    "bed_configuration": ""
}

const accomondation2 = {
    "accomondation": {
        "accommodation_id": "",
        "room_category_id": "",
        "room_type_id": {
            "label": "Couple",
            "value": 1
        },
        "per_night_room_price": "",
        "suitable_for_persons": "",
        "is_shareable": true,
        "number_of_beds": "",
        "bed_configuration": ""
    }
}


const accomondation3 = {
    "accommodation_id": null,
    "room_category_id": "",
    "room_type_id": "",
    "per_night_room_price": "",
    "suitable_for_persons": "",
    "is_shareable": true,
    "number_of_beds": "",
    "bed_configuration": ""
}

console.log(accomondation)
console.log(accomondation2)
console.log(accomondation3)

console.log((accomondation?.room_type_id?.label === undefined || accomondation?.room_type_id?.label?.length === 0))

