// Bài tập số 3.1: Viết chương trình cơ bản thời gian offline.
// thời gian người dùng chat với bạn, sau đó bạn đã bật Offline
// -> Yêu cầu: update thời gian Offline
// X giây trước / X phút trước / X giờ trước / X ngày trước / X tháng trước / X năm trước

function timeSince(timestamp) {
  let now = new Date();
  console.log("Xem thử timeStamp hiện tại " + now.getTime());

  let timeDiff = now - timestamp;
  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  if (years > 0) {
    return `Online ${years} năm trước`;
  } else if (months > 0) {
    return `Online ${months} tháng trước`;
  } else if (days > 0) {
    return `Online ${days} ngày trước`;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước`;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước`;
  } else {
    return `Online ${seconds} giây trước`;
  }
}

let timeOffline = 1725713727223; //thời điểm bn A off

console.log(timeSince(timeOffline));
