let login = (username, password) => {
	if(username !== 'admin'  || password !== 'radical') {
		console.log('no, incorrect login');
	}
};

login('admin', 'idunno');