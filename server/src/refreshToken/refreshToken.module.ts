import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RefreshTokenModuleBase } from "./base/refreshToken.module.base";
import { RefreshTokenService } from "./refreshToken.service";
import { RefreshTokenController } from "./refreshToken.controller";
import { RefreshTokenResolver } from "./refreshToken.resolver";

@Module({
  imports: [RefreshTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService, RefreshTokenResolver],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule {}
