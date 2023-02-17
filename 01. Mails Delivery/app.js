function solve() {
  const nameElement = document.getElementById("recipientName");
  const titleElement = document.getElementById("title");
  const messageElement = document.getElementById("message");
  const list = document.getElementById("list");
  const deleted = document.querySelector(".delete-list");
  const sent = document.querySelector(".sent-list");

  document.getElementById("add").addEventListener("click", createList);
  document.getElementById("reset").addEventListener("click", onClick);

  function createList(e) {
    e.preventDefault();
    let recipient = nameElement.value;
    let title = titleElement.value;
    let message = messageElement.value;
    if (recipient == "" || title == "" || message == "") {
      return;
    }
    const element = document.createElement("li");
    element.innerHTML = ` <h4>Title: ${title}</h4>
   <h4>Recipient Name: ${recipient}</h4>
   <span>${message}</span>
   <div id="list-action">
       <button type="submit" id="send">Send</button>
       <button type="submit" id="delete">Delete</button>
   </div>`;
    element.querySelector("#send").addEventListener("click", sendMail);
    element.querySelector("#delete").addEventListener("click", deleteMail);

    list.appendChild(element);

    clearElement();

    function deleteMail() {
      const deleteMailElement = document.createElement("li");
      deleteMailElement.innerHTML = `<span>To: ${recipient}</span>
    <span>Title: ${title}</span>`;
      deleted.appendChild(deleteMailElement);
      element.remove();
    }

    function sendMail() {
      const sendMailElement = document.createElement("li");
      sendMailElement.innerHTML = `<span>To: ${recipient}</span>
<span>Title: ${title}</span>
<div class="btn">
    <button type="submit" class="delete">Delete</button>
</div>`;
      sendMailElement.querySelector(".delete").addEventListener("click", () => {
        const deleteMailElement = document.createElement("li");
        deleteMailElement.innerHTML = `<span>To: ${recipient}</span>
    <span>Title: ${title}</span>`;

        deleted.appendChild(deleteMailElement);
        sendMailElement.remove();
      });
      sent.appendChild(sendMailElement);
      element.remove();
    }
  }
  function onClick(e) {
    e.preventDefault();
    clearElement();
  }
  function clearElement() {
    nameElement.value = "";
    titleElement.value = "";
    messageElement.value = "";
  }
}
solve();
