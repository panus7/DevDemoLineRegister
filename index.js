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

const lblClinic = document.getElementById('lblClinic');
const lblVN = document.getElementById('lblVN');
const lblRoom = document.getElementById('lblRoom');
const lblNoQueueBefore = document.getElementById('lblNoQueueBefore');

const lblCliniclink1 = document.getElementById('lblCliniclink1');
const lblVNlink1 = document.getElementById('lblVNlink1');
const lblRoomlink1 = document.getElementById('lblRoomlink1');
const lblNoQueueBeforelink1 = document.getElementById('lblNoQueueBeforelink1');

const lblCliniclink2 = document.getElementById('lblCliniclink2');
const lblVNlink2 = document.getElementById('lblVNlink2');
const lblRoomlink2 = document.getElementById('lblRoomlink2');
const lblNoQueueBeforelink2 = document.getElementById('lblNoQueueBeforelink2');

const lblCliniclink3 = document.getElementById('lblCliniclink3');
const lblVNlink3 = document.getElementById('lblVNlink3');
const lblRoomlink3 = document.getElementById('lblRoomlink3');
const lblNoQueueBeforelink3 = document.getElementById('lblNoQueueBeforelink3');

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

  if (timeleft > 30) {
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
}, 1000);

async function getUserProfile() {
  const profile = await liff.getProfile();
  displayName.innerHTML = '<b>สวัสดีคุณ</b> ' + profile.displayName;
  pictureUrl.src = profile.pictureUrl;
  if (
    liff.getDecodedIDToken().email == undefined ||
    !liff.getDecodedIDToken().email
  ) {
  } else {
    email.innerHTML = '<b>E-mail</b> ' + liff.getDecodedIDToken().email;
  }
}

btnLogIn.onclick = () => {
  liff.login();
};

btnLogOut.onclick = () => {
  liff.logout();
  window.location.reload();
};

btnLineRegister.onclick = () => {
  funcLineRegister();
};

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
      } else if (data.LineRegistered && data.ListOfQueue.length > 0) {
        formregis.style.display = 'none';

        for (let i = 0; i < data.ListOfQueue.length; i++) {
          let row = data.ListOfQueue[i];

          if (i == 0 && row.VN) {
            secHospitalinfo.style.display = 'block';
            lblClinic.innerHTML =
              '<b>คลินิก:</b> ' + row.Clinic + '&nbsp;<b>VN:</b> ' + row.VN;
            lblVN.innerHTML = '<b>' + row.QueueNo + '</b>';
            lblRoom.innerHTML =
              row.QueueStationCodeName +
              '<br><b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;

            if ('0' == row.NoQueueBefore) {
              document
                .getElementById('lblNoQueueBefore')
                .classList.add('blink_txt');
              lblNoQueueBefore.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            } else {
              document
                .getElementById('lblNoQueueBefore')
                .classList.remove('blink_txt');
              lblNoQueueBefore.innerHTML =
                'จำนวนคิวก่อนหน้า&nbsp;<b>' + row.NoQueueBefore + '</b>';
            }
          } else if (i == 1 && row.VN) {
            sechospitalinfolink1.style.display = 'block';
            lblCliniclink1.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            lblVNlink1.innerHTML = '<b>' + row.QueueNo + '</b>';
            lblRoomlink1.innerHTML =
              row.QueueStationCodeName +
              '<br><b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;

            if ('0' == row.NoQueueBefore) {
              document
                .getElementById('lblNoQueueBeforelink1')
                .classList.add('blink_txt');
              lblNoQueueBeforelink1.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            } else {
              document
                .getElementById('lblNoQueueBeforelink1')
                .classList.remove('blink_txt');
              lblNoQueueBeforelink1.innerHTML =
                'จำนวนคิวก่อนหน้า&nbsp;<b>' + row.NoQueueBefore + '</b>';
            }
          } else if (i == 2 && row.VN) {
            console.log('loop 3');
            sechospitalinfolink2.style.display = 'block';
            lblCliniclink2.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            lblVNlink2.innerHTML = '<b>' + row.QueueNo + '</b>';
            lblRoomlink2.innerHTML =
              row.QueueStationCodeName +
              '<br><b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;

            if ('0' == row.NoQueueBefore) {
              document
                .getElementById('lblNoQueueBeforelink2')
                .classList.add('blink_txt');
              lblNoQueueBeforelink2.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            } else {
              document
                .getElementById('lblNoQueueBeforelink2')
                .classList.remove('blink_txt');
              lblNoQueueBeforelink2.innerHTML =
                'จำนวนคิวก่อนหน้า&nbsp;<b>' + row.NoQueueBefore + '</b>';
            }
          } else if (i == 3 && row.VN) {
            sechospitalinfolink3.style.display = 'block';
            lblCliniclink3.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            lblVNlink3.innerHTML = '<b>' + row.QueueNo + '</b>';
            lblRoomlink3.innerHTML =
              row.QueueStationCodeName +
              '<br><b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            if ('0' == row.NoQueueBefore) {
              document
                .getElementById('lblNoQueueBeforelink3')
                .classList.add('blink_txt');
              lblNoQueueBeforelink3.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            } else {
              document
                .getElementById('lblNoQueueBeforelink3')
                .classList.remove('blink_txt');
              lblNoQueueBeforelink3.innerHTML =
                'จำนวนคิวก่อนหน้า&nbsp;<b>' + row.NoQueueBefore + '</b>';
            }
          } else if (i == 4 && row.VN) {
            sechospitalinfolink4.style.display = 'block';
            lblCliniclink4.innerHTML = '<b>คลินิก:</b> ' + row.Clinic;
            lblVNlink4.innerHTML = '<b>' + row.QueueNo + '</b>';
            lblRoomlink4.innerHTML =
              row.QueueStationCodeName +
              '<br><b>HN:</b> ' +
              row.HN +
              '&nbsp;' +
              row.PatientName;
            if ('0' == row.NoQueueBefore) {
              document
                .getElementById('lblNoQueueBeforelink4')
                .classList.add('blink_txt');
              lblNoQueueBeforelink4.innerHTML = '<b>เรียนเชิญพบเจ้าหน้าที่</b>';
            } else {
              document
                .getElementById('lblNoQueueBeforelink4')
                .classList.remove('blink_txt');
              lblNoQueueBeforelink4.innerHTML =
                'จำนวนคิวก่อนหน้า&nbsp;<b>' + row.NoQueueBefore + '</b>';
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
