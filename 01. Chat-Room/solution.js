function solve() {

   let sendBtn = document.getElementById('send');

   sendBtn.addEventListener("click", appentMessage);

   function appentMessage() {

      // Input area
      let inputTextArea = document.getElementById('chat_input');
      let currentMessage = inputTextArea.value;
      let trimed = currentMessage.trim();

      // Check for valid input
      if (trimed === "") {
         return;
      }

      // const space =  '&nbsp;';

      // var spaceCount = "";
      // for (const char of currentMessage) {
   
      //    if (char !== ' ') {
      //      break; 
      //    }
      //    spaceCount += space;
      // }

      inputTextArea.value = '';

      // Create new div
      let messageDiv = document.createElement("div");
      messageDiv.classList.add('message');
      messageDiv.classList.add('my-message')
      messageDiv.innerText = currentMessage;  // (spaceCount + currentMessage);
      spaceCount = "";


      // Append to Area div
      let messageAreaDiv = document.getElementById('chat_messages');
      messageAreaDiv.appendChild(messageDiv);
   }
}

