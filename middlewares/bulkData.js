const { Post, User } = require('../db/models');

exports.bulkData = (model, data) => {
    if (model === 'post'){
        Post.bulkCreate(data);
    }else if (model === 'user'){
        User.bulkCreate(data);
    }else{
        console.log('Error');
    }
}