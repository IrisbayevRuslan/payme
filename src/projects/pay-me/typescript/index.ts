import { User } from './entities/user';
import { Card } from './entities/card';

const user = new User('Sherlock', 'Holmes', '+998xx xxx xx xx', 'root123', 'sherlock@domain.com');
user.setId('user_123');

const card = new Card('8600 1200 1300 0000', '0000', '10/24', 'UZCARD', user.getId(), 'TBC');
card.setId('card_000');

console.log(user);
console.log(card);
