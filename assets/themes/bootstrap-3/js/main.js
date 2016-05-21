//create firebase reference
var dbRef = new Firebase("https://soleluanomar.firebaseio.com/");
var mensagensRef = dbRef.child('mensagens')
var itensRef = dbRef.child('itens')

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

itensRef
  .orderByChild('categoria')
  .equalTo('Inox')
  // .startAt('Inox').endAt('Inox')
  // .orderBy('lead')                  // !!! THIS LINE WILL RAISE AN ERROR !!!
  // .startAt('Jack Nicholson').endAt('Jack Nicholson')
  .on('value', function(snapshot) { 
      console.log(snapshot.val()); 
  });

// itensRef.push({categoria:'Eletrodomésticos', item:'Ferro de passar'});
// itensRef.push({categoria:'Eletrodomésticos', item:'Panificadora doméstica'});
// itensRef.push({categoria:'Eletrodomésticos', item:'Sanduicheira elétrica'});
// itensRef.push({categoria:'Eletrodomésticos', item:'Ventilador'});

// itensRef.push({categoria:'Inox', item:'1 faqueiro para 12 pessoas'});
// itensRef.push({categoria:'Inox', item:'Aparelho de fondue'});
// itensRef.push({categoria:'Inox', item:'Baixela para arroz e feijão'});
// itensRef.push({categoria:'Inox', item:'Balde de gelo'});
// itensRef.push({categoria:'Inox', item:'Bandeja média quadrada'});
// itensRef.push({categoria:'Inox', item:'Bandeja média redonda para bolo'});
// itensRef.push({categoria:'Inox', item:'Conjunto de assadeiras retangular'});
// itensRef.push({categoria:'Inox', item:'Conjunto de faquinhas de manteiga e patê'});
// itensRef.push({categoria:'Inox', item:'Conjunto de travessas '});
// itensRef.push({categoria:'Inox', item:'Conjunto para sobremesa'});
// itensRef.push({categoria:'Inox', item:'Coqueteleira'});
// itensRef.push({categoria:'Inox', item:'Garrafa térmica inox'});
// itensRef.push({categoria:'Inox', item:'Jarra para água'});
// itensRef.push({categoria:'Inox', item:'Jogo de chá: bule, leiteira'});
// itensRef.push({categoria:'Inox', item:'Jogo de travessas em prata para festa, como sopeira e molheiras'});
// itensRef.push({categoria:'Inox', item:'Porta guardanapo'});

// itensRef.push({categoria:'Panelas', item:'Assadeira redonda grande e média que desarma'});
// itensRef.push({categoria:'Panelas', item:'Conjunto ce formas para empada alumínio (24)'});
// itensRef.push({categoria:'Panelas', item:'Conjunto de frigideiras antiaderentes (2) Tramontina'});
// itensRef.push({categoria:'Panelas', item:'Forma de bolo redonda grande e média'});
// itensRef.push({categoria:'Panelas', item:'Forma de pudim'});
// itensRef.push({categoria:'Panelas', item:'Jogo de facas para cozinha'});
// itensRef.push({categoria:'Panelas', item:'Leiteira (esmalte)'});
// itensRef.push({categoria:'Panelas', item:'Panela de pressão grande'});
// itensRef.push({categoria:'Panelas', item:'Panela de pressão pequena'});
// itensRef.push({categoria:'Panelas', item:'Tábua para queijos e frios'});

// itensRef.push({categoria:'Louças e Vidro', item:'Conjunto de copos para uísque'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Conjunto de copos para água'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Conjunto de taças para champanhagne'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Conjunto de taças para vinho'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Cumbucas para sobremesas (12)'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Cumbucas para sopa'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Jarra média para suco'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Jarra pequena para suco  '} );
// itensRef.push({categoria:'Louças e Vidro', item:'Jogo de facas para churrasco'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Pinça de gelo'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Potes para biscoitos pequeno, médio e grande de vidro'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Potes para mantimentos vidro ou inox'} );
// itensRef.push({categoria:'Louças e Vidro', item:'Suporte para vinho inox  ou madeira'} );

// itensRef.push({categoria:'Diversos', item:'Almofadas para sofá Bege e morron'} );
// itensRef.push({categoria:'Diversos', item:'Capa para sofá 3 lugares'} );
// itensRef.push({categoria:'Diversos', item:'Quite para Vinho'} );

// itensRef.push({categoria:'Cama mesa e banho', item:'1 colcha de solteiro estampada'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 colcha estampada flores casal'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 colcha estampada xadrez casal'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de cama de solteiro 3 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de cama de solteiro 3 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de lençol de cama de casal 4 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de lençol de cama de casal 4 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de lençol de cama de casal 4 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'1 jogos de lençol de cama de casal 4 peças'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 cobertores lisos de algodão casal'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 cobertores lisos de algodão casal'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 cobertores lisos de algodão casal'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 cobertores lisos de algodão solteiro'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 cobertores lisos de algodão solteiro'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos casal com elástico azul'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos casal com elástico bege'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos casal com elástico rosa'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos solteiro com elástico azul'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos solteiro com elástico bege'});
// itensRef.push({categoria:'Cama mesa e banho', item:'2 lençóis avulsos solteiro com elástico rosa'});
// itensRef.push({categoria:'Cama mesa e banho', item:'4 fronhas grandes avulsas lisas azul'});
// itensRef.push({categoria:'Cama mesa e banho', item:'4 fronhas grandes avulsas lisas bege'});
// itensRef.push({categoria:'Cama mesa e banho', item:'4 fronhas grandes avulsas lisas rosa'});

// itensRef.push({categoria:'Mesa', item:'1 Conjunto de jogo americano 4 peças'});
// itensRef.push({categoria:'Mesa', item:'1 Conjunto de copa bordado'});
// itensRef.push({categoria:'Mesa', item:'1 toalha de mesa branca bordada retangular'});
// itensRef.push({categoria:'Mesa', item:'1 toalha de mesa estampada retangular (tons pastéis)'});
// itensRef.push({categoria:'Mesa', item:'1 toalha de mesa estampada xadrez retangular'});

// itensRef.push({categoria:'Banho', item:'1 jogo de toalhas 4 peças'});
// itensRef.push({categoria:'Banho', item:'1 jogo de toalhas 4 peças'});
// itensRef.push({categoria:'Banho', item:'1 jogo de toalhas 5 peças'});
// itensRef.push({categoria:'Banho', item:'1 jogo de toalhas 5 peças'});
// itensRef.push({categoria:'Banho', item:'1 roupão de banho microfibra tamanho G masculino'});
// itensRef.push({categoria:'Banho', item:'1 roupão de banho microfibra tamanho M feminino'});
// itensRef.push({categoria:'Banho', item:'2 toalhas de banho avulsas'});
// itensRef.push({categoria:'Banho', item:'2 toalhas de praia avulsas'});
// itensRef.push({categoria:'Banho', item:'2 toalhas de rosto avulsas'});
// itensRef.push({categoria:'Banho', item:'2 toalhas de rosto avulsas'});
// itensRef.push({categoria:'Banho', item:'4 pisos para banheiro'});
// itensRef.push({categoria:'Banho', item:'4 pisos para banheiro'});