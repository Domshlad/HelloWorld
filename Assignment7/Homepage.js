
function storyByAge() {
  var userName = document.getElementById('userName').value;
  var userAge = document.getElementById('userAge').value;


  if (userAge >= 12 && userAge < 15) {
      document.getElementById('fullStoryParagraph').style.display = "none";
          document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was a high school student in " + "<br />" + "his early years," + " I loved music and I played hockey on " + "<br />" + "my school field after school.";
        document.getElementById('profilePic').src = "Profile.jpeg";
  } else if (userAge >= 15 && userAge < 18) {
          document.getElementById('fullStoryParagraph').style.display = "none";
              document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was a high school student in his later years," + "<br />" + " I loved music and played in a rock band alongside studying for matriculation." + "<br />" +
    " We performed a few times and it was really fun, but there was a load of learning because I did 5 units of math and English." + "<br />" + " In addition, I began to think about military service and gradually prepare for enlistment in the IDF.";
            document.getElementById('profilePic').src = "Profile.jpeg";
  }else if (userAge <12) {
          document.getElementById('fullStoryParagraph').style.display = "none";
              document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was just a little boy. Try a higher age.";
    document.getElementById('profilePic').src = "LittleBoy.jpeg";
  } else if (userAge >= 18 && userAge <= 21) {
    document.getElementById('fullStoryParagraph').style.display = "none";
        document.getElementById('futureAge').style.display = "none";
     document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was a combat soldier in the Artillery Corps. I served in the Keren Regiment, underwent advanced training and coaching." + "<br />" + " I then took a course in meteorology commanders in the corps, under the locating battalion." + "<br />" + " Thanks to meteorological technology we were able to predict and collect data on various weather parameters in the lower layers of the atmosphere," + "<br />" + " in order to pinpoint the flight of shells and rockets" + " in order to effectively hit the enemy and prevent harm to our forces or innocent civilians." + "<br />" + "I was the team commander in the Golan Heights and then the training and logistics commander of the unit in the Galilee.";
             document.getElementById('profilePic').src = "Profile.jpeg";
  } else if (userAge >= 22 && userAge <= 24) {
    document.getElementById('fullStoryParagraph').style.display = "none";
        document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was a patrol officer at the Dimona station. I took a police course that lasted almost a year with experience, I handled various criminal and unusual incidents, from the handling of an incident in the field, writing the reports and sometimes also a preliminary or ongoing investigation." +
    "It was an amazing time, but I could not combine studies with full - time work with long shifts." +
    "After 3 years in the police, when in the last year I was promoted to head of a shift in the sector that continues to the Arava Road, I decided to leave to study" +
    "for a bachelors degree and eventually chose a different field.";
    document.getElementById('profilePic').src = "Profile.jpeg";
  }else if (userAge > 24 && userAge <= 26){
    document.getElementById('fullStoryParagraph').style.display = "none";
    document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was after significant service in the army and the Israel Police," + "<br />" + " I took a psychometric course at Yoel Geva and had the test." + "<br />" + "After I was not completely satisfied with the score I went again and got 699, slightly more than the previous score (I really want to round that number every time I mentions it, but honesty wins)." + "<br />" + " Depending on the possibilities that opened up for me, I chose to study for a degree in information systems management at Ben Gurion University of the Negev." + "<br />" + " I started studying and became a full-time student.";
    document.getElementById('profilePic').src = "Profile.jpeg";
  }else if (userAge==27){
    document.getElementById('fullStoryParagraph').style.display = "none";
    document.getElementById('futureAge').style.display = "none";
    document.getElementById('theStory').innerHTML = "Hey " + userName + ", at this age I was a student of information systems management at Ben-Gurion," + "<br />" + " in the second semester of the second year of study, and in the first semester of the third year of study." + "<br />" + " I managed to be a partner in developing an app that might not enter the market properly, but it was a great experience and I learned a lot from it." + "<br />" + " At the beginning of this period came the corona crisis so we moved on to learning from home." + "<br />" + " Just before the crisis began, I started working as a student at DbMotion on the company's IT support team.";
            document.getElementById('profilePic').src = "Profile.jpeg";
}
  else {
        document.getElementById('futureAge').style.display = "block";
        document.getElementById('profilePic').src = "futureMe.jpg";
            document.getElementById('theStory').innerHTML = "";
  }
}

function fullStory(){
  document.getElementById("fullStoryButton").style.display = "none";
  document.getElementById('theStory').innerHTML ="This is my full story:";
  document.getElementById('fullStoryParagraph').style.display = "block";
}

/*Assignment 7*/
fetch('https://reqres.in/api/users?page=1').then(response => response.json()).then(responseJSON => createUsersList(responseJSON.data)).catch(err => console.log(err));

function createUsersList(users){
  console.log(users);

  const curr_main = document.querySelector("main");

  for(let user of users){
    const section = document.createElement('section');
    section.innerHTML=`

    <div style="border:3px solid black;text-align:center;background-color:white;padding:20px;">
        <img src="${user.avatar}" alt="Profile Picture" style="width:140px"><br>
      <span><b>User ID:</b> ${user.id} <br> <b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</span>
      <br>
      <a href="mailto:${user.email}">Send Email</a>
    </div>
    `;
    curr_main.appendChild(section);
  }
}
