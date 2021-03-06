// Publish 多个 subscriber
// pub-sub
// 发布者
let zk={};

// 订阅者
zk.peopleList=[];
// 2018年10月1日大婚

// 做何反应？
zk.listen=function(fn){
    this.peopleList.push(fn);
}
zk.trigger=function(){
    // ?消息发出后，所有的订阅者都做出相应的反应
    
    for(let i=0,fn;fn=this.peopleList[i++];){
        fn.apply(this,arguments)
    }
}
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，决定给红包`);
})
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，打飞机来`);
})
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，作为情敌表示不开心`);
})
zk.trigger('要结婚了');
zk.trigger('生了大胖小子')