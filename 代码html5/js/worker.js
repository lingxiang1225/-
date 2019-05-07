self.onmessage = function(ev){
	
	// console.log("我接收到了您分配的任务:" +ev.data);
	
	self.postMessage("我接收到了您分配的任务:" +ev.data);
	self.postMessage("我回答了: hi!");
	
}