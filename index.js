const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

//b.
const card1 = document.querySelector('#product1');
card1.classList.add('border-primary');

//c.
const btnCard2 = document.querySelector('#product2 button');
btnCard2.classList.remove('btn-primary');

//d.
const titleCard3 = document.querySelector('#product3 .card-title');
titleCard3.classList.toggle('text-center');

