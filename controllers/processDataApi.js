const axios = require('axios').default;
const { request, response } = require('express');

/**
 * Import models
 */
const { Post, User } = require('../db/models'); 

exports.getDataPost = async (req=request, res=response) => {
    let endpointPost = "https://jsonplaceholder.typicode.com/posts";
    await axios.get(endpointPost)
        .then( resdata => {
            let data = resdata.data;
            let StorageData = new Array();
            data.forEach(element => {
                try{
                    StorageData = [...StorageData, { userId:element.userId,uid:element.id,title:element.title,body: element.body}];
                }catch (e){
                    StorageData = [...StorageData, { userId:'',uid:'',title:'',body: ''}];
                }
            });
            Post.bulkCreate(StorageData)
                .then( () =>  res.status(200).json({msg: "Success Bulk Data post"}) )
                .catch( e => { throw res.status(500).json({msg: `Error Bulk Post Data , error : ${e}`})});
        })
        .catch( e => {
            res.send(`Error server ${e}`);
        });
}

exports.DataUser = async (req=request, res=response) => {
    let endpointUser = "https://jsonplaceholder.typicode.com/users";
    await axios.get(endpointUser)
        .then( resdata => {
            let data = resdata.data;
            let StorageData = new Array();
            data.forEach(element => {
                try{
                    StorageData = [...StorageData, { uid:element.id, name:element.name,email:element.email,street:element.address.street,suite:element.address.suite,city:element.address.city, zicode:element.address.zicode,latitude:element.address.geo.lat,longitude: element.address.geo.lng}];
                }catch(e){
                    StorageData = [...StorageData, { uid: '', name:'', email:'', street: '',suite:'',city:'', zicode:'',latitude:'', longitude:'' }];
                }
            });
            User.bulkCreate(StorageData)
                .then( () => res.status(200).json({msg: "Success Bulk Data User"}))
                .catch( e => { throw res.status(500).json({msg: `Error Bulk data User , error: ${e}`})})
        })
        .catch( e => {
            res.send(`Error server ${e}`)
        });
}
