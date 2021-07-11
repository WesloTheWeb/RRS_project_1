import firestore from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
/* Note how we are defining our paths user, to id to his collection of cart items. Then we can also select specific
item, we just put that unique id out.*/
firestore.collection('users').doc('Y8F0HAOdgCFNRWJRLiO6').collection('cartItems').doc('9EcDlGH1dfo1ujVKIKG8');

// Other way of querying for the same document is this:
firestore.doc('/users/Y8F0HAOdgCFNRWJRLiO6/cartItems/9EcDlGH1dfo1ujVKIKG8');
firestore.collection('/users/Y8F0HAOdgCFNRWJRLiO6/cartItems');