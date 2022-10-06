//নিচের sentence এ "arman" শব্দটি কয়বার ব্যবহার হয়েছে? প্রথমবার "arman" কত নাম্বার পজিশনে পাওয়া গেছে?

const sentence = 'Lorem ipsum dolor sit arman, consectetur adipisicing elit.\
 Vel, ea. Nisi, eos dolores laborum nesciunt libero ut, quis est numquam mollitia,\
  facere assumenda distinctio consequatur arman quia minima? Assumenda ipsam numquam \
  labore porro adipisci libero incidunt sed saepe. Illo similique maiores veritatis \
  impedit dolor voluptas eius alias. Nihil velit impedit laboriosam laborum accusamus. \
  Vero, quibusdam assumenda. Facilis sit arman autem assumenda laboriosam dignissimos, \
  placeat debitis ea nisi iure amet explicabo, beatae vitae est minus dolorem nemo dicta sint \
  accusamus architecto dolor quam fugit ipsa? Dolorum, earum est delectus, ullam debitis \
  obcaecati ex maiores aperiam natus corrupti non arman veniam saepe.';


const matches = sentence.match(/arman/gi);
const length = matches ? matches.length : 0;
console.log(length);

let position = sentence.search(/armans/gi);


position = position >= 0 ? position : "not found!"
console.log(position);
  


