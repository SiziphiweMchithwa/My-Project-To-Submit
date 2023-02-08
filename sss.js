var apiUrl = 'https://sheetdb.io/api/v1/[https://sheetdb.io/api/v1/95kvzhidjtbtt]';
var months=[]
var cost=[];
var selling=[];
fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {
	for(let i =0; i <data.length;i++){
		months.push(data[i]['Month']);
		cost.push(parseInt(data[i]['Cost Price']));
		selling.push(parseInt(data[i]['Selling Price']));
	}
}).catch(err => {
	console.log(err);
});
