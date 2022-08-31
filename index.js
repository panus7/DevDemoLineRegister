// Import stylesheets
import './style.css';

//NAT
// Import stylesheets
import './style.css';

import liff from '@line/liff';

// Body element
const body = document.getElementById('body');
const lbllog = document.getElementById('lbllog');

const secError = document.getElementById('secError');

const secProfile = document.getElementById('profile');
const secHospitalinfo = document.getElementById('hospitalinfo');
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

const lineUserId = '';
// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendship');

async function main() {
  liff.ready.then(() => {
    // if (liff.getOS() === 'android') body.style.backgroundColor = '#d1f5d3';
    // if (liff.getOS() === 'ios') body.style.backgroundColor = '#ffffff';

    if (!liff.isInClient()) {
      if (liff.isLoggedIn()) {
        secProfile.style.display = 'block';
        secHospitalinfo.style.display = 'none';
        lblHN.style.display = 'none';
        btnLogIn.style.display = 'none';
        btnLogOut.style.display = 'block';
        // btnShare.style.display = 'block';
        getUserProfile();
        // getFriendship();
        funcEnqLineRegister();
      } else {
        secProfile.style.display = 'none';
        btnLineRegister.style.display = 'none';
        secHospitalinfo.style.display = 'none';
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
  if (!txt_idcard.value || !txt_phone.value) {
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

    const targetUrl =
      'https://dev-logic.net/dxapi/ProductRESTService.svc/MobileUpdateLineRegister';

    fetch(targetUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert('Register Success');
        console.log('res' + JSON.stringify(data));
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

  const targetUrl =
    'https://dev-logic.net/dxapi/ProductRESTService.svc/MobileEnquireLineRegister';

  fetch(targetUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      lblClinic.innerHTML = '<b>คลินิก:</b> ' + data.Clinic;

      if (data.HN) {
        lblHN.style.display = 'block';
        lblHN.innerHTML = '<b>HN:</b> ' + data.HN;
      }

      lblVN.innerHTML = '<b>VN:</b> ' + data.VN;
      lblRoom.innerHTML = data.QueueStationCodeName;
      lblNoQueueBefore.innerHTML = data.NoQueueBefore;

      if (data.VN) {
        formregis.style.display = 'none';
        secHospitalinfo.style.display = 'block';
        secError.style.display = 'none';
      } else {
        formregis.style.display = 'none';
        secHospitalinfo.style.display = 'none';
        secError.style.display = 'block';
      }

      setTimeout(function () {
        funcEnqLineRegister();
      }, 30 * 000);
    })
    .catch((error) => {
      lbllog.innerHTML +=
        '<b>funcEnqLineRegister response</b> ' + error + targetUrl;
      console.error('There was an error!', error);
    });
  1;
}
