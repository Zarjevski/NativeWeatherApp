export const getStatusColors = status => {
  switch (status) {
    case 'Clear':
      return ['rgb(19, 178, 247)', 'rgb(18, 123, 244)'];
    case 'Rain':
      return ['#4b6cb7', '#182848'];
    case 'Clouds':
      return ['#b6fbff', '#83a4d4'];
    case 'Snow':
      return ['#e6dada', '#274046'];
    case 'Thunderstorm':
      return ['#485563', '#29323c'];
    case 'Drizzle':
      return ['#525252', '#3d72b4'];
    case 'Atmosphere':
      return ['#334d50', '#cbcaa5'];
    default:
      return ['rgb(19, 178, 247)', 'rgb(18, 123, 244)'];
  }
};
