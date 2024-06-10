import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BrideModuleBase } from "./base/bride.module.base";
import { BrideService } from "./bride.service";
import { BrideController } from "./bride.controller";
import { BrideResolver } from "./bride.resolver";

@Module({
  imports: [BrideModuleBase, forwardRef(() => AuthModule)],
  controllers: [BrideController],
  providers: [BrideService, BrideResolver],
  exports: [BrideService],
})
export class BrideModule {}
