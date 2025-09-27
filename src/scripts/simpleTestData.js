// Simple test data generator - run with: node simpleTestData.js
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBRSmXzfZ_7oEuqCnym0p-7mej8s-e9Ytk',
  authDomain: 'leleverdupinceau-38f48.firebaseapp.com',
  projectId: 'leleverdupinceau-38f48',
  storageBucket: 'leleverdupinceau-38f48.firebasestorage.app',
  messagingSenderId: '143777515977',
  appId: '1:143777515977:web:94ecf46b81170ba7d0c018',
  measurementId: 'G-4NVHS3W80Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Employee IDs only
const employeeIds = [
  'juan_006',
  'moses_001',
  'anar_004',
  'dany_008',
  'lux_007',
  'pedro_002',
  'italo_005',
  'alex_003',
];

// Generate random time between 7:00 AM and 9:00 AM for clock in
function generateClockInTime(date) {
  const hour = Math.floor(Math.random() * 2) + 7; // 7 or 8
  const minute = Math.floor(Math.random() * 60);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hour,
    minute
  );
}

// Generate random time between 4:00 PM and 7:00 PM for clock out
function generateClockOutTime(date) {
  const hour = Math.floor(Math.random() * 4) + 16; // 16, 17, 18, or 19
  const minute = Math.floor(Math.random() * 60);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hour,
    minute
  );
}

// Calculate total worked hours
function calculateTotalHours(clockIn, clockOut, lunchDuration = 30) {
  const diffMs = clockOut.getTime() - clockIn.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return Math.max(0, diffHours - lunchDuration / 60);
}

// Generate timesheet data for a specific date and employee
function generateTimesheetData(employeeId, date) {
  const clockIn = generateClockInTime(date);
  const clockOut = generateClockOutTime(date);

  // Ensure clock out is after clock in
  if (clockOut <= clockIn) {
    clockOut.setHours(clockIn.getHours() + 8);
  }

  const totalWorkedHours = calculateTotalHours(clockIn, clockOut);

  return {
    employeeId: employeeId,
    date: date.toISOString().split('T')[0],
    clockInTime: clockIn.toISOString(),
    clockOutTime: clockOut.toISOString(),
    createdAt: new Date(),
    updatedAt: new Date(),
    lunchDurationMinutes: 30,
    totalWorkedHours: Math.round(totalWorkedHours * 10) / 10,
    clockInPhoto: null,
    clockOutPhoto: null,
    notes: `Test entry for ${employeeId}`,
  };
}

// Generate test data for the past 30 days
function generateTestData() {
  console.log('🚀 Generating test data for the past 30 days...');

  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setDate(today.getDate() - 30);

  const allData = [];

  // Generate data for each day in the past month
  for (let d = new Date(oneMonthAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const currentDate = new Date(d);
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

    // Generate entries for each employee
    employeeIds.forEach((employeeId) => {
      // Some employees work weekends, some don't
      const shouldWorkToday = !isWeekend || Math.random() > 0.7;

      if (shouldWorkToday) {
        const timesheetData = generateTimesheetData(employeeId, currentDate);
        allData.push(timesheetData);
      }
    });
  }

  console.log(`📊 Generated ${allData.length} test entries`);
  console.log(
    `📅 Date range: ${allData[0]?.date} to ${allData[allData.length - 1]?.date}`
  );
  console.log(`👥 Employees: ${employeeIds.length}`);

  // Show sample data
  console.log('\n📋 Sample entries:');
  allData.slice(0, 5).forEach((entry) => {
    const hours = Math.floor(entry.totalWorkedHours);
    const minutes = Math.round((entry.totalWorkedHours - hours) * 60);
    const timeDisplay = minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    console.log(`${entry.employeeId} - ${entry.date} - ${timeDisplay}`);
  });

  return allData;
}

// Add data to Firebase
async function addToFirebase(data) {
  console.log(`🔥 Adding ${data.length} entries to Firebase...`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < data.length; i++) {
    try {
      await addDoc(collection(db, 'TimeSheet'), data[i]);
      successCount++;
      console.log(
        `✅ Added entry for ${data[i].employeeId} on ${data[i].date}`
      );
    } catch (error) {
      errorCount++;
      console.error(`❌ Error adding entry for ${data[i].employeeId}:`, error);
    }

    // Small delay to avoid overwhelming Firebase
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log(`🎉 Completed! ${successCount} successful, ${errorCount} errors`);
}

// Main function to run everything
async function runTestDataGeneration() {
  try {
    const data = generateTestData();
    await addToFirebase(data);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the script
console.log('✅ Test data generator starting...');
runTestDataGeneration()
  .then(() => {
    console.log('✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
