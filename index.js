// Import stylesheets
import './style.css';

//NAT
// Import stylesheets
import './style.css';

import liff from '@line/liff';

// Body element
const body = document.getElementById('body');
const lbllog = document.getElementById('lbllog');

const divLoader = document.getElementById('divLoader');
const divwaiting = document.getElementById('divwaiting');

const secError = document.getElementById('secError');

const secProfile = document.getElementById('profile');
const secHospitalinfo = document.getElementById('hospitalinfo');
const sechospitalinfolink1 = document.getElementById('hospitalinfolink1');
const sechospitalinfolink2 = document.getElementById('hospitalinfolink2');
const sechospitalinfolink3 = document.getElementById('hospitalinfolink3');
const sechospitalinfolink4 = document.getElementById('hospitalinfolink4');

const formregis = document.getElementById('formregis');

// Button elements
// const btnSend = document.getElementById('btnSend');
// const btnClose = document.getElementById('btnClose');
// const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
// const btnScanCode = document.getElementById('btnScanCode');
// const btnOpenWindow = document.getElementById('btnOpenWindow');
const btnLineRegister = document.getElementById('btnLineRegister');

// Profile elements
// const email = document.getElementById('email');
// const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
// const statusMessage = document.getElementById('statusMessage');

const txt_idcard = document.getElementById('txt_idcard');
const txt_phone = document.getElementById('txt_phone');

const lblHN = document.getElementById('lblHN');
const lblClinic = document.getElementById('lblClinic');
const lblVN = document.getElementById('lblVN');
const lblRoom = document.getElementById('lblRoom');
const lblNoQueueBefore = document.getElementById('lblNoQueueBefore');

const lblHNlink1 = document.getElementById('lblHNlink1');
const lblCliniclink1 = document.getElementById('lblCliniclink1');
const lblVNlink1 = document.getElementById('lblVNlink1');
const lblRoomlink1 = document.getElementById('lblRoomlink1');
const lblNoQueueBeforelink1 = document.getElementById('lblNoQueueBeforelink1');

const lblHNlink2 = document.getElementById('lblHNlink2');
const lblCliniclink2 = document.getElementById('lblCliniclink2');
const lblVNlink2 = document.getElementById('lblVNlink2');
const lblRoomlink2 = document.getElementById('lblRoomlink2');
const lblNoQueueBeforelink2 = document.getElementById('lblNoQueueBeforelink2');

const lblHNlink3 = document.getElementById('lblHNlink3');
const lblCliniclink3 = document.getElementById('lblCliniclink3');
const lblVNlink3 = document.getElementById('lblVNlink3');
const lblRoomlink3 = document.getElementById('lblRoomlink3');
const lblNoQueueBeforelink3 = document.getElementById('lblNoQueueBeforelink3');

const lblHNlink4 = document.getElementById('lblHNlink4');
const lblCliniclink4 = document.getElementById('lblCliniclink4');
const lblVNlink4 = document.getElementById('lblVNlink4');
const lblRoomlink4 = document.getElementById('lblRoomlink4');
const lblNoQueueBeforelink4 = document.getElementById('lblNoQueueBeforelink4');

const bLineRegistered = false;

// const iCount = 0;
const lineUserId = '';
// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendship');

var timeleft = 0;

async function main() {
  divLoader.style.display = 'none';
  divwaiting.style.display = 'none';

  liff.ready.then(() => {
    // if (liff.getOS() === 'android') body.style.backgroundColor = '#d1f5d3';
    // if (liff.getOS() === 'ios') body.style.backgroundColor = '#ffffff';

    if (!liff.isInClient()) {
      if (liff.isLoggedIn()) {
        secProfile.style.display = 'none';

        secHospitalinfo.style.display = 'none';
        sechospitalinfolink1.style.display = 'none';
        sechospitalinfolink2.style.display = 'none';
        sechospitalinfolink3.style.display = 'none';
        sechospitalinfolink4.style.display = 'none';

        lblHN.style.display = 'none';
        btnLogIn.style.display = 'none';
        btnLogOut.style.display = 'block';
        // btnShare.style.display = 'block';
        getUserProfile();
        // getFriendship();
        funcEnqLineRegister();

        // setTimeout(function () {
        //   console.error('Timer');
        //   funcEnqLineRegister();
        // }, 5000);
      } else {
        secProfile.style.display = 'none';
        btnLineRegister.style.display = 'none';

        secHospitalinfo.style.display = 'none';
        sechospitalinfolink1.style.display = 'none';
        sechospitalinfolink2.style.display = 'none';
        sechospitalinfolink3.style.display = 'none';
        sechospitalinfolink4.style.display = 'none';

        secError.style.display = 'none';
        lblHN.style.display = 'none';
        btnLogIn.style.display = 'block';
        btnLogOut.style.display = 'none';
      }
    } else {
      secProfile.style.display = 'block';
      btnLineRegister.style.display = 'block';
      getUserProfile();
      // btnSend.style.display = 'block';
      // btnShare.style.display = 'block';
      // if (liff.getOS() === 'android') {
      //   // btnScanCode.style.display = 'block';
      // }
      // getFriendship();
    }

    // 28. Show OpenWindow button
    // btnOpenWindow.style.display = 'block';
  });
  // 1. Initialize LIFF app)
  await liff.init({ liffId: '1657421042-ekawW2jw' });
}
main();

function setCurrentTime() {
  timeleft = timeleft + 1;
  var myDate = new Date();

  let daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let monthsList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Aug',
    'Oct',
    'Nov',
    'Dec',
  ];

  let date = myDate.getDate();
  let month = monthsList[myDate.getMonth()];
  let year = myDate.getFullYear();
  let day = daysList[myDate.getDay()];

  let today = `${date} ${month} ${year}, ${day}`;

  let amOrPm;
  let twelveHours = function () {
    if (myDate.getHours() > 12) {
      amOrPm = 'PM';
      let twentyFourHourTime = myDate.getHours();
      let conversion = twentyFourHourTime - 12;
      return `${conversion}`;
    } else {
      amOrPm = 'AM';
      return `${myDate.getHours()}`;
    }
  };
  let hours = twelveHours();
  let minutes = myDate.getMinutes();
  let seconds = myDate.getSeconds();

  let currentTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;

  document.getElementById('current-time').innerText = today + ' ' + currentTime;

  if (bLineRegistered) {
    divwaiting.style.display = 'block';
  } else {
    divwaiting.style.display = 'none';
  }

  if (timeleft > 60) {
    divwaiting.style.display = 'none';
    timeleft = 0;
    if (bLineRegistered) {
      funcEnqLineRegister();
    } else {
      console.log('skip enq not register');
    }
  }
}

setInterval(function () {
  setCurrentTime();
  // if (iCount == 60) {
  //   funcEnqLineRegister();
  // }
}, 1000);

// var downloadTimer = setInterval(function () {
//   if (timeleft <= 0) {
//     timeleft = 10;
//     clearInterval(downloadTimer);
//   }
//   document.getElementById('progressBar').value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);

// 4. Create getUserProfile()
// 6. Get email *
async function getUserProfile() {
  const profile = await liff.getProfile();
  // userId.innerHTML = profile.userId;
  displayName.innerHTML = '<b>สวัสดีคุณ</b> ' + profile.displayName;
  // statusMessage.innerHTML = '<b>StatusMessage</b> ' + profile.statusMessage;
  // statusMessage.innerHTML = '<b>IDToken</b> ' + liff.getIDToken();
  pictureUrl.src = profile.pictureUrl;
  if (
    liff.getDecodedIDToken().email == undefined ||
    !liff.getDecodedIDToken().email
  ) {
    //   email.innerHTML = '<b>E-mail</b> ' + liff.getDecodedIDToken().email;
  } else {
    email.innerHTML = '<b>E-mail</b> ' + liff.getDecodedIDToken().email;
  }
}

// 9. Add event listener to login button
btnLogIn.onclick = () => {
  liff.login();
};

// 10. Add event listener to logout button then reload the page
btnLogOut.onclick = () => {
  liff.logout();
  window.location.reload();
};

// 14. Create sendMsg()
// 14.1 Ensure LIFF was opened from LINE app
// 29. Change alert to close
// async function sendMsg() {
//   if (
//     liff.getContext().type !== 'none' &&
//     liff.getContext().type !== 'external'
//   ) {
//     await liff.sendMessages([
//       {
//         type: 'text',
//         text: liff.getAccessToken(),
//       },
//     ]);
//     liff.closeWindow();
//   }
// }

// 15. Add event listener to send button
// btnSend.onclick = () => {
//   sendMsg();
// };

// 18. Create shareMsg()
// async function shareMsg() {
//   await liff.shareTargetPicker([
//     {
//       type: 'text',
//       text: liff.getIDToken(),
//       // type: 'image',
//       // originalContentUrl: 'https://linerookie.com/images/ic_liff.png',
//       // previewImageUrl: 'https://linerookie.com/images/ic_liff.png',
//     },
//   ]);
//   liff.closeWindow();
// }

// 19. Add event listener to share button
// btnShare.onclick = () => {
//   shareMsg();
// };

// 23. Create scanCode()
// async function scanCode() {
//   const result = await liff.scanCode();
//   code.innerHTML = '<b>QR</b> ' + result.value;
// }

// 24. Add event listener to QR button
// btnScanCode.onclick = () => {
//   scanCode();
// };

// 27. Add event listener to OpenWindow button
// btnOpenWindow.onclick = () => {
//   liff.openWindow({
//     url: 'https://line.me',
//     external: false,
//   });
// };

btnLineRegister.onclick = () => {
  funcLineRegister();
};

// 31. Create getFriendship()
// 31.1 Add condition to check friend status
// async function getFriendship() {
//   let msg = 'Hooray! you and our chatbot are friend';
//   const friend = await liff.getFriendship();
//   if (!friend.friendFlag) {
//     msg =
//       "<a href='https://line.me/R/ti/p/@754tuyrl'>Follow our chatbot here!</a>";
//   }
//   friendShip.innerHTML = msg;
// }

async function funcLineRegister() {
  //alert('funcLineRegister');

  if (!txt_idcard.value && !txt_phone.value) {
    alert('IDCard,Telephone can not be empty!');
  } else {
    const profile = await liff.getProfile();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        param: {
          ContextKey: 'ReU',
          LineUserID: profile.userId,
          IDCard: document.getElementById('txt_idcard').value,
          TelephoneNo: document.getElementById('txt_phone').value,
          Email: liff.getDecodedIDToken().email,
        },
      }),
    };

    console.log('MobileUpdateLineRegister');
    const targetUrl =
      'https://dev-logic.net/dxapi/ProductRESTService.svc/MobileUpdateLineRegister';

    await fetch(targetUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert('Register Success');
        funcEnqLineRegister();
        //console.log('res' + JSON.stringify(data));
        //element.innerHTML = JSON.stringify(data);
      })
      .catch((error) => {
        alert('Update Error');
        //element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
      });
  }
}

async function funcEnqLineRegister() {
  const profile = await liff.getProfile();
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      param: {
        ContextKey: 'ReU',
        LineUserID: profile.userId,
      },
    }),
  };

  // lbllog.innerHTML =
  //   '<b>funcEnqLineRegister</b> ' + JSON.stringify(requestOptions);
  divLoader.style.display = 'block';
  divwaiting.style.display = 'none';
  const targetUrl =
    'https://dev-logic.net/dxapi/ProductRESTService.svc/MobileEnquireLineRegister';

  fetch(targetUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      divLoader.style.display = 'none';

      secProfile.style.display = 'block';

      if (!data.LineRegistered) {
        formregis.style.display = 'block';

        secHospitalinfo.style.display = 'none';
        sechospitalinfolink1.style.display = 'none';
        sechospitalinfolink2.style.display = 'none';
        sechospitalinfolink3.style.display = 'none';
        sechospitalinfolink4.style.display = 'none';

        secError.style.display = 'none';
      } else if (data.LineRegistered && !data.ListOfQueue) {
        formregis.style.display = 'none';

        for (let i = 0; i < data.ListOfQueue; i++) {
          //text += cars[i] + '<br>';
          if (i == 0 && data.ListOfQueue[i].VN) {
            let row = data.ListOfQueue[i];
            secHospitalinfo.style.display = 'block';
            lblClinic.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            if (row.HN) {
              lblHN.style.display = 'block';
              lblHN.innerHTML =
                '<b>HN:</b> ' + row.HN + '&nbsp;' + row.PatientName;
            }
            lblVN.innerHTML = '<b>VN:</b> ' + row.VN;
            lblRoom.innerHTML = row.QueueStationCodeName;
            lblNoQueueBefore.innerHTML = row.NoQueueBefore;
            if ('0' == row.NoQueueBefore) {
              lblNoQueueBefore.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            }
          } else if (i == 1 && row.ListOfQueue[i].VN) {
            sechospitalinfolink1.style.display = 'block';
            lblCliniclink1.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            // if (row.HN) {
            //   lblHNlink1.style.display = 'block';
            //   lblHNlink1.innerHTML =
            //     '<b>HN:</b> ' + row.HN + '&nbsp;' + row.PatientName;
            // }
            lblVNlink1.innerHTML = '<b>VN:</b> ' + row.VN;
            lblRoomlink1.innerHTML =
              row.QueueStationCodeName +
              '<b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            lblNoQueueBeforelink1.innerHTML = row.NoQueueBefore;
            if ('0' == row.NoQueueBefore) {
              lblNoQueueBeforelink1.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            }
          } else if (i == 2 && row.ListOfQueue[i].VN) {
            sechospitalinfolink2.style.display = 'block';
            lblCliniclink2.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            // if (row.HN) {
            //   lblHNlink1.style.display = 'block';
            //   lblHNlink1.innerHTML =
            //     '<b>HN:</b> ' + row.HN + '&nbsp;' + row.PatientName;
            // }
            lblVNlink2.innerHTML = '<b>VN:</b> ' + row.VN;
            lblRoomlink2.innerHTML =
              row.QueueStationCodeName +
              '<b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            lblNoQueueBeforelink2.innerHTML = row.NoQueueBefore;
            if ('0' == row.NoQueueBefore) {
              lblNoQueueBeforelink2.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            }
          } else if (i == 3 && row.ListOfQueue[i].VN) {
            sechospitalinfolink3.style.display = 'block';
            lblCliniclink3.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            // if (row.HN) {
            //   lblHNlink1.style.display = 'block';
            //   lblHNlink1.innerHTML =
            //     '<b>HN:</b> ' + row.HN + '&nbsp;' + row.PatientName;
            // }
            lblVNlink3.innerHTML = '<b>VN:</b> ' + row.VN;
            lblRoomlink3.innerHTML =
              row.QueueStationCodeName +
              '<b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            lblNoQueueBeforelink3.innerHTML = row.NoQueueBefore;
            if ('0' == row.NoQueueBefore) {
              lblNoQueueBeforelink3.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            }
          } else if (i == 4 && row.ListOfQueue[i].VN) {
            sechospitalinfolink4.style.display = 'block';
            lblCliniclink4.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            // if (row.HN) {
            //   lblHNlink1.style.display = 'block';
            //   lblHNlink1.innerHTML =
            //     '<b>HN:</b> ' + row.HN + '&nbsp;' + row.PatientName;
            // }
            lblVNlink4.innerHTML = '<b>VN:</b> ' + row.VN;
            lblRoomlink4.innerHTML =
              row.QueueStationCodeName +
              '<b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            lblNoQueueBeforelink4.innerHTML = row.NoQueueBefore;
            if ('0' == row.NoQueueBefore) {
              lblNoQueueBeforelink4.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            }
          }
        }
        secError.style.display = 'none';
        divwaiting.style.display = 'block';
      } else {
        formregis.style.display = 'none';
        secHospitalinfo.style.display = 'none';
        sechospitalinfolink1.style.display = 'none';
        sechospitalinfolink2.style.display = 'none';
        sechospitalinfolink3.style.display = 'none';
        sechospitalinfolink4.style.display = 'none';

        secError.style.display = 'block';
      }
    })
    .catch((error) => {
      lbllog.innerHTML +=
        '<b>funcEnqLineRegister response</b> ' + error + targetUrl;
      console.error('There was an error!', error);
    });
  1;
}
