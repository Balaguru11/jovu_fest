import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroomModuleBase } from "./base/groom.module.base";
import { GroomService } from "./groom.service";
import { GroomController } from "./groom.controller";
import { GroomResolver } from "./groom.resolver";

@Module({
  imports: [GroomModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroomController],
  providers: [GroomService, GroomResolver],
  exports: [GroomService],
})
export class GroomModule {}
