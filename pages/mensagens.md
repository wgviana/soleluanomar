---
layout: page
title: "Mensagens"
description: ""
group: "main"
---
{% include JB/setup %}
<div style="margin: 15px;">
  <form method="post" name="contactForm">
    <div class="form-group">
    <input type="text" class="form-control" id="name" required placeholder="Informe seu nome">
    </div>
    <div class="form-group">
    <textarea name="mensagem" id="textareaMensagem" class="form-control" rows="3" required placeholder="Deixe aqui sua mensagem"></textarea>
    </div>
    <button type="button" class="btn btn-primary addValue">Submit</button>
  </form>

  <div id="contacts">
  <!-- Conatct Object li.list-group-item.contact will be added here by js -->
  </div>
</div>

<!-- Include Firebase Library -->
<script src="https://cdn.firebase.com/js/client/2.2.3/firebase.js"></script>
<!-- Contacts Store JavaScript -->

<script>
//create firebase reference
var dbRef = new Firebase("https://soleluanomar.firebaseio.com/");
var mensagensRef = dbRef.child('mensagens')

//load older conatcts as well as any newly added one...
mensagensRef.orderByKey().on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#contacts').innerHTML += (contactHtmlFromObject(snap.val()));
});

//save contact
document.querySelector('.addValue').addEventListener("click", function( event ) {  
  event.preventDefault();
  if( document.querySelector('#name').value != '' || document.querySelector('#textareaMensagem').value != '' ){
    mensagensRef
      .push({
        name: document.querySelector('#name').value,
        mensagem: document.querySelector('#textareaMensagem').value,
      })
      contactForm.reset();
  } else {
    alert('Please fill atlease name or email!');
  }
}, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
    html += '<div class="list-group contact"><div class="list-group-item">';
      html += '<p class="lead">'+contact.name+'</p>';
      html += '<p>'+contact.mensagem+'</p>';
    html += '</div></div>';
  return html;
} 
</script>