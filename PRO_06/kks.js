const clockEl = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const stopAlarmBtn = document.getElementById("stopAlarm");
const statusEl = document.getElementById("status");
const alarmSound = document.getElementById("alarmSound");

let alarmTimeout = null;

// LIVE DIGITAL CLOCK (setInterval)
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  clockEl.textContent = time;
}, 1000);

// SET ALARM EVENT
setAlarmBtn.addEventListener("click", () => {
  if (!alarmTimeInput.value) {
    statusEl.textContent = " Please select alarm time";
    return;
  }

  const now = new Date();
  const [hours, minutes] = alarmTimeInput.value.split(":");

  const alarm = new Date();
  alarm.setHours(hours, minutes, 0);

  if (alarm <= now) {
    statusEl.textContent = " Set a future time";
    return;
  }
// Set the alarm
  const timeToAlarm = alarm - now;

  alarmTimeout = setTimeout(() => {
    alarmSound.play();
    statusEl.textContent = " Alarm ringing!";
  }, timeToAlarm);

  statusEl.textContent = ` Alarm set for ${alarmTimeInput.value}`;
});

// STOP ALARM EVENT
stopAlarmBtn.addEventListener("click", () => {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  clearTimeout(alarmTimeout);
  statusEl.textContent = " Alarm stopped";
});
