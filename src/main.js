// import home from './home/home'

// const main = () => {
//   let toShow = home.show({
//     displayName: 'Caro'
//   })

//   document.getElementById('mainSection').innerHTML = toShow
// }

// document.addEventListener('DOMContentLoaded', main);

// export default {
//   main
// }

document.addEventListener('DOMContentLoaded', function () {
  hideAll();
  try {
    let app = firebase.app();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updateUser();
        document.getElementById('menuArea').style.display = 'block';
        drawUserData();
        showProfile();
      } else {
        hideAll();
        document.getElementById('menuArea').style.display = 'none';
        document.getElementById('userData').innerHTML = '';
        drawLogin();
      }
    });

  } catch (e) {
    console.error(e);
  }

  document.getElementById('sendButtonPost').addEventListener('click', processPostInput);
  addListenerToClass('menuPost', showPost);
  firebase.database().ref('/posts').on('value', drawPosts);
  firebase.database().ref('/users').on('value', drawContacts);
  addListenerToClass('sectionreunion', showProfile);
});
