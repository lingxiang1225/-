self.onmessage = function(ev){
	
	var num = ev.data;
	
	function count(){
		
		num++;
		
		self.postMessage(num);
		
		setTimeout(count,500);
		
	}
	count();
	
}
