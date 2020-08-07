module.exports = {

create: (req, res) => {
const db = req.app.get('db');
const { image_url, product_name, price } = req.body;

db.create_product([image_url, product_name, price])
.then(() => res.sendStatus(200))
.catch(err => {
res.status(500).send({ errorMessage: "Did not work" });
console.log(err)
});
},
   
delete: (req, res) => {
const db = req.app.get('db');
const { id } = req.params;
  
db.delete_product(id)
.then(() => res.sendStatus(200))
.catch(err => {
res.status(500).send({ errorMessage: 'Could not delete' });
console.log(err)
});
},

update: (req, res) => {
const db = req.app.get('db');
const { params, query } = req;
  
db.update_product([params.id, query.desc])
.then(() => res.sendStatus(200))
.catch(err => {
res.status(500).send({ errorMessage: "Did not update" });
console.log(err)
});
},
}