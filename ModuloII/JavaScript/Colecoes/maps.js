const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const getusers= (map) => {
	let users = [];

	for ([key, value] of map) {
		if (value === 'USER') {
			users.push(key);
		}
	}

	return users;
};

const getsudo= (map) => {
	let sudo= [];

	for ([key, value] of map) {
		if (value === 'SUDO') {
			sudo.push(key);
		}
	}

	return sudo;
};
const userRoles = new Map();

userRoles.set('Lhaíslla', 'SUDO');
userRoles.set('Evelyn', 'ADMIN');
userRoles.set('Thaíslla', 'ADMIN');
userRoles.set('Matheus', 'USER');
userRoles.set('Mayrê', 'USER');

console.log(`Administradores: `,getAdmins(userRoles));
console.log(`Usuários: `,getusers(userRoles));
console.log(`Sudo: `,getsudo(userRoles));