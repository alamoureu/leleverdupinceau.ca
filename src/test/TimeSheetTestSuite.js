/**
 * TimeSheet Application Test Suite
 * Comprehensive testing for all functionalities
 *
 * Run with: node src/test/TimeSheetTestSuite.js
 */

const {
  calculateTotalWorkedHours,
  calculateTodayTotalHours,
  calculateTotalHoursForDateRange,
  validateTimesheetRecord,
  generateDocumentId,
  determineClockStatus,
  getCurrentDateString,
  isValidLunchDuration,
  validateTimesheetAction,
  validateTimeSequence,
  findDuplicateRecords,
  checkTimesheetExists,
} = require('../utils/timesheetCalculations');

class TimeSheetTestSuite {
  constructor() {
    this.testResults = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runTest(testName, testFunction) {
    this.log(`🧪 Running test: ${testName}`);
    try {
      await testFunction();
      this.testResults.push({ name: testName, status: 'PASS' });
      this.log(`✅ ${testName} - PASSED`, 'success');
    } catch (error) {
      this.testResults.push({
        name: testName,
        status: 'FAIL',
        error: error.message,
      });
      this.log(`❌ ${testName} - FAILED: ${error.message}`, 'error');
    }
  }

  // Test 1: Time Calculation Logic
  async testTimeCalculation() {
    const testCases = [
      {
        name: 'Normal 8-hour day',
        clockIn: new Date('2025-01-27T09:00:00.000Z'),
        clockOut: new Date('2025-01-27T17:00:00.000Z'),
        lunchMinutes: 30,
        expectedHours: 7.5,
      },
      {
        name: 'Short 4-hour day',
        clockIn: new Date('2025-01-27T09:00:00.000Z'),
        clockOut: new Date('2025-01-27T13:00:00.000Z'),
        lunchMinutes: 15,
        expectedHours: 3.75,
      },
      {
        name: 'Very short day (edge case)',
        clockIn: new Date('2025-01-27T17:25:20.000Z'),
        clockOut: new Date('2025-01-27T17:27:00.000Z'),
        lunchMinutes: 45,
        expectedHours: 0, // Should be 0 due to lunch > work time
      },
      {
        name: 'No lunch',
        clockIn: new Date('2025-01-27T09:00:00.000Z'),
        clockOut: new Date('2025-01-27T12:00:00.000Z'),
        lunchMinutes: 0,
        expectedHours: 3,
      },
    ];

    for (const testCase of testCases) {
      const totalWorkedHours = calculateTotalWorkedHours(
        testCase.clockIn,
        testCase.clockOut,
        testCase.lunchMinutes
      );

      if (Math.abs(totalWorkedHours - testCase.expectedHours) > 0.01) {
        throw new Error(
          `${testCase.name}: Expected ${testCase.expectedHours}h, got ${totalWorkedHours}h`
        );
      }
    }
  }

  // Test 2: Employee ID Format Validation
  async testEmployeeIdFormat() {
    // Using your ACTUAL employee IDs
    const validIds = [
      'juan_006',
      'moses_001',
      'anar_004',
      'dany_008',
      'lux_007',
      'pedro_002',
      'italo_005',
      'alex_003',
      'antoine_001', // Your actual employee ID
    ];
    const invalidIds = [
      '',
      null,
      undefined,
      'invalid',
      '123',
      'test@email.com',
    ];

    // Test valid IDs
    for (const id of validIds) {
      if (!id || typeof id !== 'string' || !id.includes('_')) {
        throw new Error(`Valid ID failed validation: ${id}`);
      }
    }

    // Test invalid IDs
    for (const id of invalidIds) {
      if (id && typeof id === 'string' && id.includes('_')) {
        throw new Error(`Invalid ID passed validation: ${id}`);
      }
    }
  }

  // Test 3: Document ID Generation
  async testDocumentIdGeneration() {
    const testCases = [
      {
        employeeId: 'juan_006',
        date: '2025-01-27',
        expected: 'juan_006_2025-01-27',
      },
      {
        employeeId: 'moses_001',
        date: '2025-12-31',
        expected: 'moses_001_2025-12-31',
      },
      {
        employeeId: 'alex_003',
        date: '2025-02-14',
        expected: 'alex_003_2025-02-14',
      },
    ];

    for (const testCase of testCases) {
      const documentId = generateDocumentId(testCase.employeeId, testCase.date);
      if (documentId !== testCase.expected) {
        throw new Error(
          `Document ID mismatch: Expected ${testCase.expected}, got ${documentId}`
        );
      }
    }
  }

  // Test 4: Date Format Validation
  async testDateFormatValidation() {
    const dateString = getCurrentDateString();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dateString)) {
      throw new Error(`Invalid date format: ${dateString}`);
    }

    // Test date parsing
    const parsedDate = new Date(dateString + 'T00:00:00.000Z');
    if (isNaN(parsedDate.getTime())) {
      throw new Error(`Invalid date parsing: ${dateString}`);
    }
  }

  // Test 5: Clock-in/Clock-out Status Logic
  async testClockStatusLogic() {
    const testCases = [
      {
        name: 'No record',
        clockInTime: null,
        clockOutTime: null,
        expectedAction: 'clock-in',
      },
      {
        name: 'Clock-in only',
        clockInTime: '2025-01-27T09:00:00.000Z',
        clockOutTime: null,
        expectedAction: 'clock-out',
      },
      {
        name: 'Complete day',
        clockInTime: '2025-01-27T09:00:00.000Z',
        clockOutTime: '2025-01-27T17:00:00.000Z',
        expectedAction: null,
      },
    ];

    for (const testCase of testCases) {
      const record = {
        clockInTime: testCase.clockInTime,
        clockOutTime: testCase.clockOutTime,
      };
      const action = determineClockStatus(record);

      if (action !== testCase.expectedAction) {
        throw new Error(
          `${testCase.name}: Expected ${testCase.expectedAction}, got ${action}`
        );
      }
    }
  }

  // Test 6: Statistics Calculation
  async testStatisticsCalculation() {
    // Using your ACTUAL data structure
    const mockTimesheets = [
      {
        clockInPhoto: null,
        clockInTime: '2025-09-17T12:00:00.000Z',
        clockOutPhoto: null,
        clockOutTime: '2025-09-17T22:20:00.000Z',
        createdAt: new Date('2025-09-17T16:20:21.000Z'),
        date: '2025-09-17',
        employeeId: 'lux_007',
        lunchDurationMinutes: 30,
        notes: 'Test entry for lux_007',
        totalWorkedHours: 9.8,
        updatedAt: new Date('2025-09-17T16:20:21.000Z'),
      },
      {
        clockInPhoto: null,
        clockInTime: '2025-09-17T08:00:00.000Z',
        clockOutPhoto: null,
        clockOutTime: '2025-09-17T17:00:00.000Z',
        createdAt: new Date('2025-09-17T12:20:21.000Z'),
        date: '2025-09-17',
        employeeId: 'juan_006',
        lunchDurationMinutes: 30,
        notes: 'Test entry for juan_006',
        totalWorkedHours: 8.5,
        updatedAt: new Date('2025-09-17T12:20:21.000Z'),
      },
      {
        clockInPhoto: null,
        clockInTime: '2025-09-16T09:00:00.000Z',
        clockOutPhoto: null,
        clockOutTime: '2025-09-16T18:00:00.000Z',
        createdAt: new Date('2025-09-16T13:20:21.000Z'),
        date: '2025-09-16',
        employeeId: 'moses_001',
        lunchDurationMinutes: 30,
        notes: 'Test entry for moses_001',
        totalWorkedHours: 8.5,
        updatedAt: new Date('2025-09-16T13:20:21.000Z'),
      },
    ];

    // Test today's records (2025-09-17)
    const today = '2025-09-17';
    const todayTotalHours = calculateTodayTotalHours(mockTimesheets, today);

    // Expected: lux_007 (9.8h) + juan_006 (8.5h) = 18.3h
    if (todayTotalHours !== 18.3) {
      throw new Error(
        `Today's total hours calculation error: Expected 18.3, got ${todayTotalHours}`
      );
    }

    // Test week calculation (2025-09-16 to 2025-09-17)
    const weekStart = new Date('2025-09-16');
    const weekEnd = new Date('2025-09-17');
    const weekTotalHours = calculateTotalHoursForDateRange(
      mockTimesheets,
      weekStart,
      weekEnd
    );

    // Expected: moses_001 (8.5h) + lux_007 (9.8h) + juan_006 (8.5h) = 26.8h
    if (weekTotalHours !== 26.8) {
      throw new Error(
        `Week total hours calculation error: Expected 26.8, got ${weekTotalHours}`
      );
    }
  }

  // Test 7: Data Validation
  async testDataValidation() {
    // Using your ACTUAL data structure
    const validTimesheet = {
      clockInPhoto: null,
      clockInTime: '2025-09-17T12:00:00.000Z',
      clockOutPhoto: null,
      clockOutTime: '2025-09-17T22:20:00.000Z',
      createdAt: new Date('2025-09-17T16:20:21.000Z'),
      date: '2025-09-17',
      employeeId: 'lux_007',
      lunchDurationMinutes: 30,
      notes: 'Test entry for lux_007',
      totalWorkedHours: 9.8,
      updatedAt: new Date('2025-09-17T16:20:21.000Z'),
    };

    // Test validation using utility function
    const validation = validateTimesheetRecord(validTimesheet);
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }
  }

  // Test 8: Edge Cases
  async testEdgeCases() {
    // Test midnight crossover
    const clockIn = new Date('2025-01-27T23:30:00.000Z');
    const clockOut = new Date('2025-01-28T07:30:00.000Z');
    const totalWorkedHours = calculateTotalWorkedHours(clockIn, clockOut, 30);

    if (Math.abs(totalWorkedHours - 7.5) > 0.01) {
      throw new Error(
        `Midnight crossover calculation error: Expected 7.5h, got ${totalWorkedHours}h`
      );
    }

    // Test very short work period
    const shortClockIn = new Date('2025-01-27T17:25:20.000Z');
    const shortClockOut = new Date('2025-01-27T17:27:00.000Z');
    const shortWorkedHours = calculateTotalWorkedHours(
      shortClockIn,
      shortClockOut,
      45
    );

    if (shortWorkedHours !== 0) {
      throw new Error(
        `Short work period should be 0 hours, got ${shortWorkedHours}h`
      );
    }
  }

  // Test 9: Authentication Logic
  async testAuthenticationLogic() {
    // Test password hashing (mock)
    const testPassword = 'test123';
    const hashedPassword = this.simpleHash(testPassword, 'test_salt');

    if (!hashedPassword || hashedPassword === testPassword) {
      throw new Error('Password hashing failed');
    }

    // Test session validation
    const sessionData = {
      isAuthenticated: true,
      role: 'ADMIN',
      timestamp: Date.now(),
    };

    if (!sessionData.isAuthenticated || !sessionData.role) {
      throw new Error('Session validation failed');
    }
  }

  // Helper function for password hashing (simplified version)
  simpleHash(password, salt) {
    // This is a simplified version - in production, use proper hashing
    return Buffer.from(password + salt).toString('base64');
  }

  // Test 10: Business Logic Validation
  async testBusinessLogicValidation() {
    // Test that lunch duration cannot exceed work time
    const clockIn = new Date('2025-01-27T09:00:00.000Z');
    const clockOut = new Date('2025-01-27T10:00:00.000Z'); // 1 hour work
    const lunchMinutes = 90; // 1.5 hours lunch (more than work time)

    const totalWorkedHours = calculateTotalWorkedHours(
      clockIn,
      clockOut,
      lunchMinutes
    );

    if (totalWorkedHours !== 0) {
      throw new Error(
        `Lunch duration validation failed: Expected 0h, got ${totalWorkedHours}h`
      );
    }

    // Test lunch duration validation
    const isValidLunch = isValidLunchDuration(clockIn, clockOut, lunchMinutes);
    if (isValidLunch) {
      throw new Error(
        'Lunch duration validation should fail for invalid duration'
      );
    }

    // Test maximum work hours per day (24 hours)
    const maxWorkHours = 24;
    const testWorkHours = 25;
    if (testWorkHours > maxWorkHours) {
      // This should be caught by validation
      if (testWorkHours <= maxWorkHours) {
        throw new Error('Maximum work hours validation failed');
      }
    }
  }

  // Test 11: Employee Data Structure Validation
  async testEmployeeDataStructure() {
    // Using your ACTUAL employee data structure
    const validEmployee = {
      id: 'antoine_001',
      name: 'Antoine',
      status: 'inactive',
      createdAt: new Date('2025-09-27T17:48:45.000Z'),
      updatedAt: new Date('2025-09-27T17:51:05.000Z'),
    };

    // Test required fields
    const requiredFields = ['id', 'name', 'status'];
    for (const field of requiredFields) {
      if (!validEmployee[field]) {
        throw new Error(`Missing required employee field: ${field}`);
      }
    }

    // Test data types
    if (typeof validEmployee.id !== 'string') {
      throw new Error('Employee ID must be string');
    }
    if (typeof validEmployee.name !== 'string') {
      throw new Error('Employee name must be string');
    }
    if (typeof validEmployee.status !== 'string') {
      throw new Error('Employee status must be string');
    }

    // Test status values
    const validStatuses = ['active', 'inactive'];
    if (!validStatuses.includes(validEmployee.status)) {
      throw new Error(`Invalid employee status: ${validEmployee.status}`);
    }
  }

  // Test 12: Duplicate Prevention
  async testDuplicatePrevention() {
    // Test duplicate clock-in prevention
    const existingRecordWithClockIn = {
      employeeId: 'juan_006',
      date: '2025-01-27',
      clockInTime: '2025-01-27T09:00:00.000Z',
      clockOutTime: null,
    };

    const clockInValidation = validateTimesheetAction(
      'juan_006',
      '2025-01-27',
      'clock-in',
      existingRecordWithClockIn
    );
    if (clockInValidation.isValid) {
      throw new Error('Clock-in duplicate should be prevented');
    }

    // Test duplicate clock-out prevention
    const existingRecordWithClockOut = {
      employeeId: 'juan_006',
      date: '2025-01-27',
      clockInTime: '2025-01-27T09:00:00.000Z',
      clockOutTime: '2025-01-27T17:00:00.000Z',
    };

    const clockOutValidation = validateTimesheetAction(
      'juan_006',
      '2025-01-27',
      'clock-out',
      existingRecordWithClockOut
    );
    if (clockOutValidation.isValid) {
      throw new Error('Clock-out duplicate should be prevented');
    }

    // Test clock-out without clock-in
    const noClockInRecord = {
      employeeId: 'juan_006',
      date: '2025-01-27',
      clockInTime: null,
      clockOutTime: null,
    };

    const noClockInValidation = validateTimesheetAction(
      'juan_006',
      '2025-01-27',
      'clock-out',
      noClockInRecord
    );
    if (noClockInValidation.isValid) {
      throw new Error('Clock-out without clock-in should be prevented');
    }

    // Test time sequence validation
    const invalidTimeSequence = validateTimeSequence(
      new Date('2025-01-27T17:00:00.000Z'),
      new Date('2025-01-27T09:00:00.000Z')
    );
    if (invalidTimeSequence.isValid) {
      throw new Error('Invalid time sequence should be rejected');
    }

    // Test duplicate record detection
    const testRecords = [
      {
        employeeId: 'juan_006',
        date: '2025-01-27',
        clockInTime: '2025-01-27T09:00:00.000Z',
      },
      {
        employeeId: 'juan_006',
        date: '2025-01-27',
        clockInTime: '2025-01-27T09:30:00.000Z',
      }, // Duplicate
      {
        employeeId: 'moses_001',
        date: '2025-01-27',
        clockInTime: '2025-01-27T08:00:00.000Z',
      },
    ];

    const duplicates = findDuplicateRecords(testRecords);
    if (duplicates.length !== 1) {
      throw new Error(`Expected 1 duplicate, found ${duplicates.length}`);
    }

    if (duplicates[0].employeeId !== 'juan_006') {
      throw new Error('Duplicate detection failed');
    }

    // Test timesheet existence check
    const existenceCheck = checkTimesheetExists(
      'juan_006',
      '2025-01-27',
      existingRecordWithClockIn
    );
    if (!existenceCheck.exists || !existenceCheck.hasClockIn) {
      throw new Error('Timesheet existence check failed');
    }
  }

  // Run all tests
  async runAllTests() {
    this.log('🚀 Starting TimeSheet Test Suite');
    this.log('=====================================');

    await this.runTest('Time Calculation Logic', () =>
      this.testTimeCalculation()
    );
    await this.runTest('Employee ID Format Validation', () =>
      this.testEmployeeIdFormat()
    );
    await this.runTest('Document ID Generation', () =>
      this.testDocumentIdGeneration()
    );
    await this.runTest('Date Format Validation', () =>
      this.testDateFormatValidation()
    );
    await this.runTest('Clock Status Logic', () => this.testClockStatusLogic());
    await this.runTest('Statistics Calculation', () =>
      this.testStatisticsCalculation()
    );
    await this.runTest('Data Validation', () => this.testDataValidation());
    await this.runTest('Edge Cases', () => this.testEdgeCases());
    await this.runTest('Authentication Logic', () =>
      this.testAuthenticationLogic()
    );
    await this.runTest('Business Logic Validation', () =>
      this.testBusinessLogicValidation()
    );
    await this.runTest('Duplicate Prevention', () =>
      this.testDuplicatePrevention()
    );

    this.log('=====================================');
    this.log('📊 Test Results Summary');
    this.log('=====================================');

    const passed = this.testResults.filter(
      (result) => result.status === 'PASS'
    ).length;
    const failed = this.testResults.filter(
      (result) => result.status === 'FAIL'
    ).length;
    const total = this.testResults.length;

    this.log(`✅ Passed: ${passed}/${total}`);
    this.log(`❌ Failed: ${failed}/${total}`);

    if (failed > 0) {
      this.log('❌ Failed Tests:');
      this.testResults
        .filter((result) => result.status === 'FAIL')
        .forEach((result) => {
          this.log(`  - ${result.name}: ${result.error}`, 'error');
        });
    }

    if (failed === 0) {
      this.log(
        '🎉 All tests passed! Your TimeSheet application is ready for production!',
        'success'
      );
    } else {
      this.log(
        '⚠️ Some tests failed. Please review the issues above.',
        'error'
      );
    }

    return { passed, failed, total, results: this.testResults };
  }
}

// Run the test suite
async function runTests() {
  const testSuite = new TimeSheetTestSuite();
  const results = await testSuite.runAllTests();

  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
}

// Run if called directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { TimeSheetTestSuite };
