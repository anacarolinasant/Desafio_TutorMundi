const express = require('express');

const app = express ();
const path = require('path');
const router = express.Router();


router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
});

router.post('/', function(req,res) {
    btnConf.onclick {
        if (estrelaV5.src = './img/estrela_cheia _ 5.svg') {
            console.log('5 estrelas')
        }else if {
            estrelaV1.src == './img/estrela_cheia_1.svg' && 
            estrelaV2.src == './img/estrela_cheia _2.svg' && 
            estrelaV3.src == 'img/estrela_cheia _3.svg' && 
            estrelaV4.src == './img/estrela_cheia _ 4.svg' 
            && estrelaV5.src == './img/estrela_vazia _5.svg' {
                console.log('4 estrelas')
            }           
        }else if {
            estrelaV1.src == './img/estrela_cheia_1.svg' && 
            estrelaV2.src == './img/estrela_cheia _2.svg' && 
            estrelaV3.src == 'img/estrela_cheia _3.svg' &&  
            estrelaV4.src == './img/estrela_vazia _4.svg' &&  
            estrelaV5.src == './img/estrela_vazia _5.svg' {
                console.log('3 estrelas');
            }
        }else if{
            estrelaV2.src == './img/estrela_cheia _2.svg' && 
            estrelaV3.src == './img/estrela_vazia _3.svg' && 
            estrelaV4.src == './img/estrela_vazia _4.svg' && 
            estrelaV5.src == './img/estrela_vazia _5.svg' {
                console.log('2 estrelas');
            }
        }else {
            console.log('1 estrela');
        }  
    }
});

app.use('/',router);
app.listen(process.env.port || 3000);
