require('seneca')()
 .use("entity")
 .use('mongo-store',{
    name: process.env.MONGO_DATABASE,
    host:process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
  })
 .use('seneca-amqp-transport')
 .use('_hospital')
 .listen({
    type:'amqp',
    pin:'role:hospital',
    port: process.env.RABBITMQ_PORT,
    username: process.env.RABBITMQ_DEFAULT_USER,
    password: process.env.RABBITMQ_DEFAULT_PASS,
    url: 'amqp://'+ process.env.RABBITMQ_HOST
})
