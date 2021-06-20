exports.createScheduleClinic = (req) => {
  const {
    startTimeMonday,
    endTimeMonday,
    startTimeTuesday,
    endTimeTuesday,
    startTimeWednesday,
    endTimeWednesday,
    startTimeThursday,
    endTimeThursday,
    startTimeFriday,
    endTimeFriday,
    startTimeSaturday,
    endTimeSaturday,
    startTimeSunday,
    endTimeSunday,
  } = req.body;

  const mondayStartTime =
    new Date(startTimeMonday).getHours() * 60 +
    new Date(startTimeMonday).getMinutes();
  const mondayEndTime =
    new Date(endTimeMonday).getHours() * 60 +
    new Date(endTimeMonday).getMinutes();
  const tuesdayStartTime =
    new Date(startTimeTuesday).getHours() * 60 +
    new Date(startTimeTuesday).getMinutes();
  const tuesdayEndTime =
    new Date(endTimeTuesday).getHours() * 60 +
    new Date(endTimeTuesday).getMinutes();
  const wednesdayStartTime =
    new Date(startTimeWednesday).getHours() * 60 +
    new Date(startTimeWednesday).getMinutes();
  const wednesdayEndTime =
    new Date(endTimeWednesday).getHours() * 60 +
    new Date(endTimeWednesday).getMinutes();
  const thursdayStartTime =
    new Date(startTimeThursday).getHours() * 60 +
    new Date(startTimeThursday).getMinutes();
  const thursdayEndTime =
    new Date(endTimeThursday).getHours() * 60 +
    new Date(endTimeThursday).getMinutes();
  const fridayStartTime =
    new Date(startTimeFriday).getHours() * 60 +
    new Date(startTimeFriday).getMinutes();
  const fridayEndTime =
    new Date(endTimeFriday).getHours() * 60 +
    new Date(endTimeFriday).getMinutes();
  const saturdayStartTime =
    new Date(startTimeSaturday).getHours() * 60 +
    new Date(startTimeSaturday).getMinutes();
  const saturdayEndTime =
    new Date(endTimeSaturday).getHours() * 60 +
    new Date(endTimeSaturday).getMinutes();
  const sundayStartTime =
    new Date(startTimeSunday).getHours() * 60 +
    new Date(startTimeSunday).getMinutes();
  const sundayEndTime =
    new Date(endTimeSunday).getHours() * 60 +
    new Date(endTimeSunday).getMinutes();

  return [
    {
      dayOfWeek: 1,
      startTime: mondayStartTime,
      endTime: mondayEndTime,
    },
    {
      dayOfWeek: 2,
      startTime: tuesdayStartTime,
      endTime: tuesdayEndTime,
    },
    {
      dayOfWeek: 3,
      startTime: wednesdayStartTime,
      endTime: wednesdayEndTime,
    },
    {
      dayOfWeek: 4,
      startTime: thursdayStartTime,
      endTime: thursdayEndTime,
    },
    {
      dayOfWeek: 5,
      startTime: fridayStartTime,
      endTime: fridayEndTime,
    },
    {
      dayOfWeek: 6,
      startTime: saturdayStartTime,
      endTime: saturdayEndTime,
    },
    {
      dayOfWeek: 0,
      startTime: sundayStartTime,
      endTime: sundayEndTime,
    },
  ];
};
