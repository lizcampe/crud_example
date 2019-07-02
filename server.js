var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

var UsersModel= require('./api/Usuarios')
console.log ('sequelize loaded');

const Sequelize =require ('sequelize');

var dbName ='text_crud';
var dbPass='root';
var dbUser = 'LaContraseña';

const sequelize = new Sequelize('text_crud', 'root', 'LaContraseña',{
    host: 'localhost',
    dialect:'mysql'
});

var userCrud= UsersModel(sequelize);
crearUsuario();
//listarUsuarios();
//actualizarUsuario();
//eliminar();

app.listen(port);


function crearUsuario(){
    var usuarioNuevo={
        nombre: 'test',
        nickname: 'test nickname',
        email: 'algo@sd.com',
        pais:'mx'
    }

    userCrud.create(usuarioNuevo).then(resp => {
        console.log('creado...');
        console.log(resp);
    });
}

function listarUsuarios(){
    userCrud.findAll().then(resp=>{
        console.log('listando...');
        console.log(resp);
    });
}

function actualizarUsuario(){

    var usuarioNuevo={
        nombre: 'test editado',
        nickname: 'test nickname editado',
        email: 'algo@sd.com editado',
        pais:'mx editado'
    }
    userCrud.update(usuarioNuevo, {
        where:{
            id: 1
        }
    }).then(resp =>{
        console.log('actualizado');
        console.log(resp);
        
    })
}

function eliminar(){
    userCrud.destroy({
        where: {
            id:1
        }
        }).then(()=>{
            console.log('eliminado...')
        });
}