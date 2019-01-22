const express = require('express')
const router = express.Router()

/* eslint-disable */
// Get Sets
router.get('/', async (req, res) => {
  res.status(200).json({
    status:"success",
    message:"Users retrieved successfully",
    data:[
      {"_id":"5c35165d9ba2dc17748a9c33","creation_date":"1546983005188","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516609ba2dc17748a9c34","creation_date":"1546983008588","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516619ba2dc17748a9c35","creation_date":"1546983009495","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516629ba2dc17748a9c36","creation_date":"1546983010284","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516639ba2dc17748a9c37","creation_date":"1546983011194","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516649ba2dc17748a9c38","creation_date":"1546983012160","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516649ba2dc17748a9c39","creation_date":"1546983012974","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516659ba2dc17748a9c3a","creation_date":"1546983013707","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516669ba2dc17748a9c3b","creation_date":"1546983014456","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516679ba2dc17748a9c3c","creation_date":"1546983015137","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516679ba2dc17748a9c3d","creation_date":"1546983015833","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516689ba2dc17748a9c3e","creation_date":"1546983016847","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c3516699ba2dc17748a9c3f","creation_date":"1546983017625","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c35166a9ba2dc17748a9c40","creation_date":"1546983018641","username":"bob_the_one","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c404123d8e7a675681ff224","creation_date":"1547714851449","username":"bob_the_one_3","uuid":"123456789","password":"testpw","email":"le@hdm-stuttgart.de","__v":0},
      {"_id":"5c459979207fb25242568c4d","creation_date":"1548065145401","username":"Hans","uuid":"3f41c736-9af0-44cd-aa90-8bec28913048","password":"123","email":"blub@gmail.com","__v":0},
      {"_id":"5c45c6bd4a2c8365c907450c","creation_date":"1548076733507","username":"Bob12","uuid":"bf476c5c-10d4-4391-a812-08d6f9caeeff","password":"123456","email":"le017@hdm-stuttgart.de","__v":0},
      {"_id":"5c45c9bca9283766d18432ce","creation_date":"1548077500794","username":"Leon McDuffin","uuid":"3f41c736-9af0-44cd-aa90-8bec28913048","password":"bob","email":"bob@web.net","__v":0},
      {"_id":"5c45d4fd738106671b9a1064","creation_date":"1548080381027","username":"Detlef","uuid":"3f41c736-9af0-44cd-aa90-8bec28913048","password":"abc","email":"dud","__v":0},
      {"_id":"5c45da6a738106671b9a1065","creation_date":"1548081770047","username":"Franz","uuid":"3f41c736-9af0-44cd-aa90-8bec28913048","password":"abc","email":"franz@wtf.de","__v":0},
      {"_id":"5c461be86dd45b686eed80d7","creation_date":"1548098536390","username":"Jero","uuid":"fcd4ad53-c20f-4348-8a80-8cb751500f73","password":"jj","email":"blu@bla.de","__v":0}
    ]
  })
})
module.exports = router;
