import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BrideService } from "./bride.service";
import { BrideControllerBase } from "./base/bride.controller.base";

@swagger.ApiTags("brides")
@common.Controller("brides")
export class BrideController extends BrideControllerBase {
  constructor(
    protected readonly service: BrideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
