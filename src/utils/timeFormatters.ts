export function timeToSeconds(timeString: string) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToTime(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  let seconds: any = totalSeconds % 60;
  let hours: any = Math.floor(totalMinutes / 60);
  let minutes: any = totalMinutes % 60;

  if (seconds < 10) seconds = `0${seconds}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;

  // if (hours === "00") return `${minutes}:${seconds}`;
  return `${hours}:${minutes}:${seconds}`;
}

export function secondsToTimeInWords(totalSeconds) {
  if (totalSeconds < 1) return "None";

  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  let text = "";
  if (hours) text += `${hours} hours, `;
  if (minutes) text += `${minutes} minutes, `;
  if (seconds) text += `${seconds} seconds`;

  return text;
}
