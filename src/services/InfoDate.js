// 2023-07-30

const mes = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

const mes0 = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

const dias = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat'
}

export const getDataWeather = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const dayWeek = date.getDay()
  const dayMont = date.getDate()

  return `${dias[dayWeek]}. ${dayMont} ${mes[month]}`
}

export const getDataForecast = (date) => {
  const data = date.split('-')
  const month = data[1]
  const year = data[0]
  const dayMont = data[2]

  const dates = new Date(year, month - 1, dayMont)
  const datesDayWeek = dates.getDay()
  const datesDayMont = dates.getDate()
  const datesMont = dates.getMonth() + 1

  return `${dias[datesDayWeek]}. ${datesDayMont} ${mes[datesMont]}`
}
