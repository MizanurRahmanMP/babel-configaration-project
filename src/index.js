
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Student from './componants/student';
import './index.css';
import './main.scss';

getproducts()
function getproducts(){
    
    axios.get('http://localhost:5050/products').then(res=>{

        const plist = document.querySelector('.p_list');
        let list = '';

         res.data.map(data => {

            let { name, price, sael_price, photo } = data;
             list += `
             
             <div class="col-md-3 my-2">
               <div class="card shadow">
                <img style="height:300px; object-fit:cover;" class="card-img" src=" ${ photo } " alt="">
                   <div class="card-body">
                       <h3>${ name }</h3>
                       <p>price: ${ price }</p>
                   </div>
               </div>
            </div>
             
             `
         })
         plist.innerHTML = list     
    });
}

