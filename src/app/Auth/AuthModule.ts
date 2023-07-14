import DoctorModule from "../Doctor/DoctorModule"
import AuthController from "./AuthController"
import AuthService from "./AuthService";

class AuthModule {
  static build() {
    const service = new AuthService(DoctorModule.build().repository);
    const controller = new AuthController(service);
    return controller
  }
}

export default AuthModule