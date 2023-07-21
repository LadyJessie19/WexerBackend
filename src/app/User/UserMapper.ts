//Mais para frente nós iremos fazer esse mapper para retornar no banco de dados os links das imagens enviadas pelos usuários

interface IUser {
	"_id": string;
	"name": string;
	"email": string;
	"password": string;
	"photo": string;
	"createdAt": string;
	"updatedAt": string;
}

class UserMapper {
    static toClient(user: IUser) {
        return {
            "id": user._id,
            "name": user.name,
            "email": user.email,
            "photo": user.photo,
        }
    }
}

export { UserMapper, IUser }