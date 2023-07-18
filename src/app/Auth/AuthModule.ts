import UserModule from "../User/UserModule"
import AuthController from "./AuthController"
import AuthService from "./AuthService";

class AuthModule {
  static build() {
    const service = new AuthService(UserModule.build().repository);
    const controller = new AuthController(service);
    return controller
  }
}

export default AuthModule