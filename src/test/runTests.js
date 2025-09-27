#!/usr/bin/env node

/**
 * Simple test runner for TimeSheet application
 * Run with: node src/test/runTests.js
 */

const { TimeSheetTestSuite } = require('./TimeSheetTestSuite.js');

async function main() {
  console.log('🧪 TimeSheet Application Test Runner');
  console.log('=====================================');
  console.log('');

  const testSuite = new TimeSheetTestSuite();
  const results = await testSuite.runAllTests();

  console.log('');
  console.log('=====================================');
  console.log('📋 Final Results:');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📊 Total: ${results.total}`);
  console.log('=====================================');

  if (results.failed === 0) {
    console.log(
      '🎉 SUCCESS: All tests passed! Your application is production-ready!'
    );
    process.exit(0);
  } else {
    console.log('❌ FAILURE: Some tests failed. Please fix the issues above.');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Test runner error:', error);
  process.exit(1);
});
