function solution(schedules, timelogs, startday) {
  let count = 0;

  const toMinutes = (time) => {
    const hour = Math.floor(time / 100);
    const min = time % 100;
    return hour * 60 + min;
  };

  for (let i = 0; i < schedules.length; i++) {
    const limitTime = toMinutes(schedules[i]) + 10;
    let allWeekdaysOnTime = true;

    for (let j = 0; j < 7; j++) {
      const day = (startday + j - 1) % 7 + 1;
      if (day >= 6) continue;

      const actual = toMinutes(timelogs[i][j]);
      if (actual > limitTime) {
        allWeekdaysOnTime = false;
        break;
      }
    }

    if (allWeekdaysOnTime) count++;
  }

  return count;
}
