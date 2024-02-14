const data = {
    "startDate": "Feb 17, 24",
    "endDate": "Feb 20, 24",
    "packageType": {
        "label": "Couple Package",
        "value": 31
    },
    "totalSeat": "20",
    "bookableSeat": "14",
    "date": "2024-02-17T11:26:03.000Z"
}



let newTourSchedule = {
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
      date: "2024-02-20T11:36:59.357Z",
    },
    "2024-03-02": {
      end_date: "2024-02-17",
      total_seat: 20,
      bookable_seat: 12,
      date: "2024-03-02T11:37:39.737Z",
    },
  };

  console.log(data)
  console.log(newTourSchedule)

  const addDays =  (date, days) =>  {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const dateFormatter = (inputDate) =>  {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  const it = dateFormatter(addDays(new Date(), 17))
  console.log(it)


  const filteredObject = Object.keys(newTourSchedule).reduce((acc, key) => {
    if (key !== it) {
        acc[key] = newTourSchedule[key];
    }
    return acc;
}, {});
  newTourSchedule = filteredObject



  const updatedTotalSeats = 25;
newTourSchedule["2024-02-17"].total_seat = updatedTotalSeats;

console.log(newTourSchedule)





