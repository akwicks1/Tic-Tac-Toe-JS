function getSleepHours(day){
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 10;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 7;
    case 'Friday':
      return 12;
    case 'Saturday':
      return 6;
    case 'Sunday':
      return 10;
  }
}

const getActualSleepHours = () =>
  getSleepHours('Monday') +
	getSleepHours('Tuesday') +
	getSleepHours('Wednesday') +
	getSleepHours('Thursday') +
	getSleepHours('Friday') +
	getSleepHours('Saturday') +
	getSleepHours('Sunday');
//console.log(getActualSleepHours())

const getIdealSleepHours = () => {
	let idealHours = 8;
	return idealHours * 7;
};
//console.log(getSleepHours('Tuesday'));
const calculateSleepDebt = () => {

  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    	console.log("You got more sleep than you needed!");
  } else if (actualSleepHours < idealSleepHours) {
      console.log("You should get some rest!");
    }

  };
