/**
 * Get the current month name and date in a formatted string.
 * @returns {string} Formatted date string like "June 19".
 */
export const getCurrentMonthNameAndDate = () => {
  const date = new Date(); // Get the current date

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the current month name and date
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();

  // Return the formatted string
  return `${monthName} ${day}`;
};

// Example usage
