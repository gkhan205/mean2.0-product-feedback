export class User{
	constructor(
				public username: string,
				public password: string,
				public name?: string,
				public location?: string,
				public admin?: boolean) {
		// code...
	}
}