import User from "./UserModel";

export default class post {
    id: String
    titre: String
    bannerImg: String
    content: String
    user: User
    datePublication: Date
    createdAt: Date
    updateAt: Date
}
