import ChatbotService from "./chatbotservice.js";
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");
const chatHeader = document.querySelector(".chat-header");
const container = document.querySelector(".container");
let voice="";

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

chatHeader.addEventListener("click",()=>{
  container.classList.toggle("collapse");
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  let myArray = userInput.split(" ");
  if(myArray[0]=="c" || myArray[0]=="comment" || myArray[0]=="Voir" || myArray[0]== "au" || myArray[0]== "salut" || myArray[0]== "bonjour")
      voice="French Female";
  else if(myArray[0]=="hola" || myArray[0]=="cómo" || myArray[0]=="que" || myArray[0]=="cual" || myArray[0]=="como" || myArray[0]=="Ver" || myArray[0]=="adiós" || myArray[0]=="Enseñame")
      voice="Spanish Female";
     
  else
      voice="UK English Female";

  renderMessageEle(userInput, "user");
  txtInput.value = "";
  toggleLoading(false);
  renderChatbotResponse(userInput);
    
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";

  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.append(txtNode);
  
  if (type !== "user") {
    className = "chatbot-message";
    messageEle.classList.add(className);
    const botResponseContainer = document.createElement("div");
    botResponseContainer.classList.add("bot-response-container");
    const botImg = document.createElement("img");
    botImg.setAttribute("src","./images/chatbot.png");
    botResponseContainer.append(botImg);
    botResponseContainer.append(messageEle);
    chatBody.append(botResponseContainer);
    responsiveVoice.speak(txt,voice);
  }
  else{
    messageEle.classList.add(className);
    chatBody.append(messageEle);

  }

};

const getChatbotResponse = (userInput) => {
  ChatbotService.getChatbotResponse(userInput).then((response) => {
    renderMessageEle(response);
    setScrollPosition();
    toggleLoading(true);
  }).catch((error) => {
    setScrollPosition();
    toggleLoading(true);
  });
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const toggleLoading=(show)=>loadingEle.classList.toggle("hide",show);