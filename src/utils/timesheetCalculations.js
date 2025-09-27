/**
 * TimeSheet Calculation Utilities
 * Centralized calculation functions for timesheet operations
 * Used by both the application and test suite to ensure consistency
 */

/**
 * Calculate total worked hours from clock in/out times and lunch duration
 * @param {Date|string} clockInTime - Clock in time
 * @param {Date|string} clockOutTime - Clock out time
 * @param {number} lunchMinutes - Lunch duration in minutes
 * @returns {number} Total worked hours (rounded to 2 decimal places)
 */
export function calculateTotalWorkedHours(
  clockInTime,
  clockOutTime,
  lunchMinutes = 30
) {
  // Convert to Date objects if they are strings
  const clockIn =
    typeof clockInTime === 'string' ? new Date(clockInTime) : clockInTime;
  const clockOut =
    typeof clockOutTime === 'string' ? new Date(clockOutTime) : clockOutTime;

  // Calculate total minutes between clock in and out
  const totalMinutes = (clockOut - clockIn) / (1000 * 60);

  // Subtract lunch minutes and ensure it's not negative
  const workedMinutes = Math.max(0, totalMinutes - lunchMinutes);

  // Convert to hours and round to 2 decimal places
  const totalWorkedHours = parseFloat((workedMinutes / 60).toFixed(2));

  return totalWorkedHours;
}

/**
 * Calculate total worked hours for a single timesheet record
 * @param {Object} record - Timesheet record with clockInTime, clockOutTime, lunchDurationMinutes
 * @returns {number} Total worked hours
 */
export function calculateRecordWorkedHours(record) {
  if (!record.clockInTime || !record.clockOutTime) {
    return 0;
  }

  const lunchMinutes = record.lunchDurationMinutes || 30;
  return calculateTotalWorkedHours(
    record.clockInTime,
    record.clockOutTime,
    lunchMinutes
  );
}

/**
 * Calculate total hours for a collection of timesheet records
 * @param {Array} records - Array of timesheet records
 * @returns {number} Total hours across all records
 */
export function calculateTotalHours(records) {
  return records.reduce((total, record) => {
    return total + (record.totalWorkedHours || 0);
  }, 0);
}

/**
 * Calculate total hours for records within a date range
 * @param {Array} records - Array of timesheet records
 * @param {Date|string} startDate - Start date for filtering
 * @param {Date|string} endDate - End date for filtering
 * @returns {number} Total hours for the date range
 */
export function calculateTotalHoursForDateRange(records, startDate, endDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate >= start && recordDate <= end;
  });

  return calculateTotalHours(filteredRecords);
}

/**
 * Calculate today's total hours
 * @param {Array} records - Array of timesheet records
 * @param {string} today - Today's date in YYYY-MM-DD format (optional, defaults to current date)
 * @returns {number} Total hours for today
 */
export function calculateTodayTotalHours(records, today = null) {
  const todayDate = today || new Date().toISOString().split('T')[0];

  const todayRecords = records.filter((record) => record.date === todayDate);
  return calculateTotalHours(todayRecords);
}

/**
 * Calculate week's total hours
 * @param {Array} records - Array of timesheet records
 * @param {Date} weekStart - Start of the week (optional, defaults to current week)
 * @param {Date} weekEnd - End of the week (optional, defaults to current week)
 * @returns {number} Total hours for the week
 */
export function calculateWeekTotalHours(
  records,
  weekStart = null,
  weekEnd = null
) {
  const now = new Date();
  const start =
    weekStart || new Date(now.setDate(now.getDate() - now.getDay()));
  const end =
    weekEnd || new Date(now.setDate(now.getDate() - now.getDay() + 6));

  return calculateTotalHoursForDateRange(records, start, end);
}

/**
 * Calculate month's total hours
 * @param {Array} records - Array of timesheet records
 * @param {Date} monthStart - Start of the month (optional, defaults to current month)
 * @param {Date} monthEnd - End of the month (optional, defaults to current month)
 * @returns {number} Total hours for the month
 */
export function calculateMonthTotalHours(
  records,
  monthStart = null,
  monthEnd = null
) {
  const now = new Date();
  const start = monthStart || new Date(now.getFullYear(), now.getMonth(), 1);
  const end = monthEnd || new Date(now.getFullYear(), now.getMonth() + 1, 0);

  return calculateTotalHoursForDateRange(records, start, end);
}

/**
 * Validate timesheet record data
 * @param {Object} record - Timesheet record to validate
 * @returns {Object} Validation result with isValid boolean and errors array
 */
export function validateTimesheetRecord(record) {
  const errors = [];

  // Check required fields
  const requiredFields = ['employeeId', 'date', 'clockInTime'];
  for (const field of requiredFields) {
    if (!record[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check data types
  if (record.employeeId && typeof record.employeeId !== 'string') {
    errors.push('employeeId must be string');
  }

  if (
    record.totalWorkedHours !== undefined &&
    typeof record.totalWorkedHours !== 'number'
  ) {
    errors.push('totalWorkedHours must be number');
  }

  if (record.totalWorkedHours !== undefined && record.totalWorkedHours < 0) {
    errors.push('totalWorkedHours cannot be negative');
  }

  // Check employee ID format
  if (record.employeeId && !record.employeeId.includes('_')) {
    errors.push('Invalid employee ID format');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Generate document ID for timesheet record
 * @param {string} employeeId - Employee ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {string} Document ID
 */
export function generateDocumentId(employeeId, date) {
  return `${employeeId}_${date}`;
}

/**
 * Determine clock status based on timesheet record
 * @param {Object} record - Timesheet record
 * @returns {string|null} 'clock-in', 'clock-out', or null (complete)
 */
export function determineClockStatus(record) {
  if (!record.clockInTime) {
    return 'clock-in';
  }

  if (record.clockInTime && !record.clockOutTime) {
    return 'clock-out';
  }

  if (record.clockInTime && record.clockOutTime) {
    return null; // Complete
  }

  return 'clock-in';
}

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'fr-CA')
 * @param {string} timeZone - Timezone (default: 'America/Montreal')
 * @returns {string} Formatted date string
 */
export function formatDate(
  date,
  locale = 'fr-CA',
  timeZone = 'America/Montreal'
) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleString(locale, {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/**
 * Get current date in YYYY-MM-DD format
 * @returns {string} Current date
 */
export function getCurrentDateString() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Check if lunch duration is valid (not exceeding work time)
 * @param {Date|string} clockInTime - Clock in time
 * @param {Date|string} clockOutTime - Clock out time
 * @param {number} lunchMinutes - Lunch duration in minutes
 * @returns {boolean} True if lunch duration is valid
 */
export function isValidLunchDuration(clockInTime, clockOutTime, lunchMinutes) {
  const clockIn =
    typeof clockInTime === 'string' ? new Date(clockInTime) : clockInTime;
  const clockOut =
    typeof clockOutTime === 'string' ? new Date(clockOutTime) : clockOutTime;

  const totalMinutes = (clockOut - clockIn) / (1000 * 60);
  return lunchMinutes <= totalMinutes;
}

/**
 * Calculate maximum allowed lunch duration for a work period
 * @param {Date|string} clockInTime - Clock in time
 * @param {Date|string} clockOutTime - Clock out time
 * @returns {number} Maximum lunch duration in minutes
 */
export function getMaxLunchDuration(clockInTime, clockOutTime) {
  const clockIn =
    typeof clockInTime === 'string' ? new Date(clockInTime) : clockInTime;
  const clockOut =
    typeof clockOutTime === 'string' ? new Date(clockOutTime) : clockOutTime;

  const totalMinutes = (clockOut - clockIn) / (1000 * 60);
  return Math.floor(totalMinutes);
}

/**
 * Check if a timesheet record already exists for an employee on a specific date
 * @param {string} employeeId - Employee ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @param {Object} existingRecord - Existing record data (optional)
 * @returns {Object} Check result with exists boolean and details
 */
export function checkTimesheetExists(employeeId, date, existingRecord = null) {
  const documentId = generateDocumentId(employeeId, date);

  return {
    documentId,
    exists: existingRecord !== null,
    hasClockIn: existingRecord?.clockInTime ? true : false,
    hasClockOut: existingRecord?.clockOutTime ? true : false,
    isComplete:
      existingRecord?.clockInTime && existingRecord?.clockOutTime
        ? true
        : false,
  };
}

/**
 * Validate timesheet record for duplicates and conflicts
 * @param {string} employeeId - Employee ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @param {string} action - Action being performed ('clock-in', 'clock-out', 'edit')
 * @param {Object} existingRecord - Existing record data (optional)
 * @returns {Object} Validation result with isValid boolean and error message
 */
export function validateTimesheetAction(
  employeeId,
  date,
  action,
  existingRecord = null
) {
  const check = checkTimesheetExists(employeeId, date, existingRecord);

  // Check for clock-in duplicates
  if (action === 'clock-in' && check.hasClockIn) {
    return {
      isValid: false,
      error: "Vous avez déjà fait votre entrée aujourd'hui.",
      errorType: 'duplicate_clock_in',
    };
  }

  // Check for clock-out duplicates
  if (action === 'clock-out' && check.hasClockOut) {
    return {
      isValid: false,
      error: "Vous avez déjà fait votre sortie aujourd'hui.",
      errorType: 'duplicate_clock_out',
    };
  }

  // Check for clock-out without clock-in
  if (action === 'clock-out' && !check.hasClockIn) {
    return {
      isValid: false,
      error: "Vous devez d'abord faire votre entrée.",
      errorType: 'no_clock_in',
    };
  }

  // Check for editing complete records
  if (action === 'edit' && check.isComplete) {
    return {
      isValid: true, // Allow editing complete records
      error: null,
      errorType: null,
    };
  }

  return {
    isValid: true,
    error: null,
    errorType: null,
  };
}

/**
 * Generate unique document ID with timestamp fallback
 * @param {string} employeeId - Employee ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @param {boolean} useTimestamp - Whether to add timestamp for uniqueness
 * @returns {string} Document ID
 */
export function generateUniqueDocumentId(
  employeeId,
  date,
  useTimestamp = false
) {
  const baseId = generateDocumentId(employeeId, date);

  if (useTimestamp) {
    const timestamp = Date.now();
    return `${baseId}_${timestamp}`;
  }

  return baseId;
}

/**
 * Check for potential duplicate records in a collection
 * @param {Array} records - Array of timesheet records
 * @returns {Array} Array of duplicate records found
 */
export function findDuplicateRecords(records) {
  const duplicates = [];
  const seen = new Map();

  for (const record of records) {
    const key = `${record.employeeId}_${record.date}`;

    if (seen.has(key)) {
      duplicates.push({
        key,
        records: [seen.get(key), record],
        employeeId: record.employeeId,
        date: record.date,
      });
    } else {
      seen.set(key, record);
    }
  }

  return duplicates;
}

/**
 * Validate time sequence for timesheet records
 * @param {Date|string} clockInTime - Clock in time
 * @param {Date|string} clockOutTime - Clock out time
 * @returns {Object} Validation result
 */
export function validateTimeSequence(clockInTime, clockOutTime) {
  if (!clockInTime || !clockOutTime) {
    return {
      isValid: true,
      error: null,
    };
  }

  const clockIn =
    typeof clockInTime === 'string' ? new Date(clockInTime) : clockInTime;
  const clockOut =
    typeof clockOutTime === 'string' ? new Date(clockOutTime) : clockOutTime;

  if (clockOut <= clockIn) {
    return {
      isValid: false,
      error: "L'heure de sortie doit être après l'heure d'entrée.",
    };
  }

  // Check for reasonable work duration (not more than 24 hours)
  const workDuration = (clockOut - clockIn) / (1000 * 60 * 60); // hours
  if (workDuration > 24) {
    return {
      isValid: false,
      error: 'La durée de travail ne peut pas dépasser 24 heures.',
    };
  }

  return {
    isValid: true,
    error: null,
  };
}
